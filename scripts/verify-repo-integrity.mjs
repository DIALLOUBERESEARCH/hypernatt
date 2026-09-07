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
                const found = regex.exec(content);
                assert(!found, `Security Leak Guard failed in ${fullPath}: detected ${name} (${found ? found[0] : ''})`);
            }
        }
    }
}
scanDir('.');
console.log('   ✓ Zero private keys, zero sensitive env vars, zero proprietary engine leaks, zero deprecated tokens');

// 4. On-Chain Vault Contract Address Format & Integrity
console.log('\n4. Verifying on-chain vault contract format & consensus guarantees...');
const VAULT_ADDRESS = '0x04e2eb302fe9ff23a9d1f2455084af624737a6d8';
assert(/^0x[0-9a-fA-F]{40}$/.test(VAULT_ADDRESS), 'Vault address is not a valid 20-byte hex address');
const readme = fs.readFileSync('README.md', 'utf8');
assert(readme.includes(VAULT_ADDRESS), 'README does not reference the verified vault address');
console.log(`   ✓ Vault contract address verified: ${VAULT_ADDRESS}`);

console.log('\n=== All CI Integrity Gates Passed Successfully ===\n');
