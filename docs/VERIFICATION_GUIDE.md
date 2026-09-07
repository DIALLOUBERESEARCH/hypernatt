# Independent Cryptographic Verification Guide

This guide enables any developer, quant, or auditor to independently verify the cryptographic integrity of all statistics and claims published on the [HyperNatt Proof of Process](https://hypernatt.com/audit) portal.

---

## 1. Automated Verification (30 Seconds)

To verify all 18 claims and 10 research notes automatically:

```bash
# 1. Clone this repository
git clone https://github.com/hypernatt/hypernatt.git
cd hypernatt

# 2. Run the zero-dependency verification script
node scripts/verify_ledger.mjs
```

### Expected Output
```text
------------------------------------------------------------
  HYPERNATT CRYPTOGRAPHIC PROOF OF PROCESS AUDIT
------------------------------------------------------------

Schema:             hypernatt.audit.ledger.v1
Generated (UTC):    2026-09-06T15:30:00Z
Era:                645
Vault Address:      0x04e2eb302fe9ff23a9d1f2455084af624737a6d8
Total Claims:       18

✅ [PASS] Note 000 | SHA-256: 4fbcbfceaa142a5a... | Default action
✅ [PASS] Note 645 | SHA-256: c537fd22ce813e44... | Exits
...
------------------------------------------------------------
🎉 VERIFICATION SUCCESSFUL: 18/18 notes cryptographically verified.
------------------------------------------------------------
```

---

## 2. Manual CLI Verification (Single Note)

You can compute the SHA-256 hash of any research note using native Unix tools:

```bash
# Compute SHA-256 hash of Note 670 (L2 Recorder & Provenance)
sha256sum notes/670_RESEARCH_PROVENANCE_AND_L2_RECORDER.md

# Output:
# 074ad18d778a192e6903cfa4817b5cc4f1aa830684c0bf78567069015a05bbdb  notes/670_RESEARCH_PROVENANCE_AND_L2_RECORDER.md
```

Compare the computed hash against the `source_sha256` in `ledger.json` or directly in the modal on `https://hypernatt.com/audit`. They must match character-for-character.

---

## 3. On-Chain Vault Verification (Hyperliquid L1)

To independently audit the live vault balance, positions, fills, and historical performance:

1. Open the official Hyperliquid Vault Explorer:  
   [`https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
2. Verify that:
   - Vault Address matches: `0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`.
   - Vault entries remain strictly governed in alignment with Note 670.
   - All closed trades and liquidation metrics correspond to on-chain state transitions.
