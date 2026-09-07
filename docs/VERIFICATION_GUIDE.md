# Independent On-Chain & Cryptographic Verification Guide

This guide enables any developer, quant, or auditor to independently verify the non-custodial integrity and public audit proofs of the HyperNatt platform.

---

## 1. On-Chain Vault Verification (Hyperliquid L1)

The single source of truth for all trades, equity balances, and liquidation immunity is the native Hyperliquid Layer 1 blockchain:

1. Open the official Hyperliquid Vault Explorer:  
   [`https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
2. Independently verify:
   - **Vault Contract Address**: `0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`
   - **Non-Custodial Balance**: Live USDC equity deposited by sovereign participants.
   - **Execution History**: Transparent on-chain fills and 0.00% liquidation record.
   - **Direct Withdrawal**: Any depositor can redeem shares directly via Hyperliquid consensus.

---

## 2. Cryptographic Proof of Process Audit Ledger

To independently verify that 100% of historical research claims and milestones on [hypernatt.com/audit](https://hypernatt.com/audit) match immutable cryptographic source digests:

```bash
# Clone the dedicated cryptographic audit repository
git clone https://github.com/hypernatt/hypernatt-audit-public.git
cd hypernatt-audit-public

# Run the zero-dependency verification script
node scripts/verify_ledger.mjs
```

### Expected Output
```text
Schema:             hypernatt.audit.ledger.v1
Vault Address:      0x04e2eb302fe9ff23a9d1f2455084af624737a6d8
Total Claims:       18

✅ [PASS] Note 000 | SHA-256: 4fbcbfceaa...
✅ [PASS] Note 645 | SHA-256: c537fd22ce...
...
🎉 VERIFICATION SUCCESSFUL: 18/18 notes cryptographically verified.
```

---

## 3. Terminal MCP Protocol Verification

External autonomous AI agents can inspect live market structure context (forced-order liquidation maps) via the open-source Model Context Protocol server:

- **Repository**: [https://github.com/hypernatt/hypernatt-terminal](https://github.com/hypernatt/hypernatt-terminal)
- **Live Endpoint**: `https://hypernatt.com/mcp/protocol`
