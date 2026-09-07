#!/usr/bin/env node
/**
 * Standalone Verification Script — HyperNatt Proof of Process
 * Verifies that all cryptographic note hashes in ledger.json match local markdown files.
 * Zero external dependencies. Uses Node.js native crypto.
 *
 * Usage: node scripts/verify_ledger.mjs
 */

import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const ledgerPath = join(repoRoot, 'ledger.json');
const manifestPath = join(repoRoot, 'MANIFEST.json');

console.log('------------------------------------------------------------');
console.log('  HYPERNATT CRYPTOGRAPHIC PROOF OF PROCESS AUDIT');
console.log('------------------------------------------------------------\n');

if (!existsSync(ledgerPath)) {
    console.error(`❌ Error: ledger.json not found at ${ledgerPath}`);
    process.exit(1);
}

const ledgerRaw = readFileSync(ledgerPath, 'utf8');
const ledger = JSON.parse(ledgerRaw);

console.log(`Schema:             ${ledger.schema}`);
console.log(`Generated (UTC):    ${ledger.generated_utc}`);
console.log(`Era:                ${ledger.era}`);
console.log(`Vault Address:      ${ledger.vault_address}`);
console.log(`Total Claims:       ${ledger.entries.length}\n`);

let passedCount = 0;
let failedCount = 0;

for (const entry of ledger.entries) {
    const noteFilePath = join(repoRoot, entry.source_path);

    if (!existsSync(noteFilePath)) {
        console.error(`❌ MISSING FILE: ${entry.source_path} (Claim: "${entry.label}")`);
        failedCount++;
        continue;
    }

    const fileContent = readFileSync(noteFilePath);
    const computedHash = createHash('sha256').update(fileContent).digest('hex');

    if (computedHash === entry.source_sha256) {
        console.log(`✅ [PASS] Note ${entry.source_note.padEnd(3)} | SHA-256: ${computedHash.slice(0, 16)}... | ${entry.label}`);
        passedCount++;
    } else {
        console.error(`❌ [MISMATCH] Note ${entry.source_note}:`);
        console.error(`   Expected: ${entry.source_sha256}`);
        console.error(`   Computed: ${computedHash}`);
        failedCount++;
    }
}

console.log('\n------------------------------------------------------------');
if (failedCount === 0) {
    console.log(`🎉 VERIFICATION SUCCESSFUL: ${passedCount}/${ledger.entries.length} notes cryptographically verified.`);
    console.log('   All claims match official immutable SHA-256 digests.');
    console.log('------------------------------------------------------------\n');
    process.exit(0);
} else {
    console.error(`⚠️ VERIFICATION FAILED: ${failedCount} errors detected.`);
    console.log('------------------------------------------------------------\n');
    process.exit(1);
}
