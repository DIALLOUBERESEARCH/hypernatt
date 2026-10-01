import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

console.log('=== HyperNatt Public Repository Integrity Gate ===\n');

// 1. Package Metadata & Version Parity Check
console.log('1. Verifying package metadata and version parity...');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
assert(pkg.name === '@hypernatt/platform', 'Invalid package name');
assert(pkg.version, 'Missing package version');
assert(pkg.license === 'MIT', 'Invalid license');
assert(pkg.homepage === 'https://hypernatt.com', 'Invalid homepage');
console.log(`   ✓ package.json valid (${pkg.name} v${pkg.version})`);

// Parity with CHANGELOG
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');
assert(changelog.includes(`[${pkg.version}]`), `CHANGELOG.md does not document version ${pkg.version}`);
console.log(`   ✓ CHANGELOG.md documents current version v${pkg.version}`);

// 2. Documentation Link Integrity Check
console.log('\n2. Verifying documentation link integrity...');
const docs = [
    'README.md',
    'SECURITY.md',
    'CHANGELOG.md',
    'docs/ARCHITECTURE.md',
    'docs/NON_CUSTODIAL_ARCHITECTURE.md',
    'docs/USER_GUIDE.md',
    'docs/VERIFICATION_GUIDE.md'
];

for (const doc of docs) {
    assert(fs.existsSync(doc), `Missing document: ${doc}`);
    const content = fs.readFileSync(doc, 'utf8');
    // Check relative links like [label](./path) or [label](docs/...)
    const linkRegex = /\[([^\]]+)\]\(((\.{1,2}\/|docs\/)[^)#]+)(#[^)]+)?\)/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const linkTarget = match[2];
        const resolved = path.resolve(path.dirname(doc), linkTarget);
        assert(fs.existsSync(resolved), `Broken link in ${doc}: ${linkTarget}`);
    }
}
console.log(`   ✓ All ${docs.length} documentation files exist and have zero broken relative links`);

// 3. Security & Secret Leak Prevention Guard
console.log('\n3. Running automated secret & privacy scanner...');
const forbiddenPatterns = [
    { name: 'Private Key pattern', regex: /0x[a-fA-F0-9]{64}/ },
    { name: 'Generic API Key pattern', regex: /(api_key|secret_key|private_key)\s*[:=]\s*["'][a-zA-Z0-9_\-]{16,}["']/i },
    { name: 'Internal Vault Private Keys', regex: /VAULT_SECRET|AGENT_PRIVATE_KEY|HOT_WALLET_KEY/i },
    { name: 'Proprietary Remora Logic Leak', regex: /def\s+_h[0-9]{3}_|class\s+RemoraEngine/i },
    { name: 'Deprecated NattSquare reference', regex: /nattsquare/i },
    { name: 'Deprecated NDAT token reference', regex: /\bNDAT\b/ }
];

// These are independently verified public transaction/runtime fingerprints,
// permitted only in the document that identifies this mainnet deployment.
const PUBLIC_DEPLOYMENT_DOCUMENT = 'docs/NON_CUSTODIAL_ARCHITECTURE.md';
const PUBLIC_DEPLOYMENT_HASHES = new Set([
    '0x6fb1ce4dab76d82e16aee71763518c22b2624f77ce5bab263cc5abc461f0eed5',
    '0x6fb7c7a6d817c2dfa1b2a6a61cb6c63457ccd42686c3431a252ffe4c74a80195',
    '0x5e4f2814719d06f24be23a80210ff8f9650972b63172049227ef98a48d3fc975',
    '0x0fe4dffee76756582d20d9170055d6974e5572c38ef7db30cddbd9f0f763c139',
    '0x6460129351994818eb4575f85c107bd143ad7b0add4813d0ee50385e9db6b362'
]);

function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'scripts') continue;
        if (entry.isDirectory()) {
            scanDir(fullPath);
        } else if (entry.isFile()) {
            const content = fs.readFileSync(fullPath, 'utf8');
            for (const { name, regex } of forbiddenPatterns) {
                const relative = path.relative('.', fullPath).split(path.sep).join('/');
                const found = name === 'Private Key pattern'
                    ? [...content.matchAll(new RegExp(regex.source, 'g'))].some(match =>
                        relative !== PUBLIC_DEPLOYMENT_DOCUMENT || !PUBLIC_DEPLOYMENT_HASHES.has(match[0]))
                    : regex.exec(content);
                assert(!found, `Security Leak Guard failed in ${fullPath}: detected ${name}`);
            }
        }
    }
}
scanDir('.');
console.log('   ✓ Zero private keys, zero sensitive env vars, zero proprietary engine leaks, zero deprecated tokens');

// 4. Current public verification entry points. This is not on-chain validation.
console.log('\n4. Verifying current documentation and verification entry points...');
const readme = fs.readFileSync('README.md', 'utf8');
for (const url of ['https://hypernatt.com/app', 'https://hypernatt.com/vault',
    'https://hypernatt.com/docs', 'https://hypernatt.com/audit']) {
    assert(readme.includes(url), `Missing official verification entry point: ${url}`);
}
assert(readme.includes('HyperEVM') && readme.includes('chain 999') && readme.includes('HyperCore'),
    'README must distinguish HyperEVM chain 999 and HyperCore');
assert(readme.includes('New deposits are not yet open'), 'Missing current deposit availability');
console.log('   ✓ Official entry points and current rollout are documented; deployed code and receipts require separate verification');

console.log('\n=== All CI Integrity Gates Passed Successfully ===\n');
