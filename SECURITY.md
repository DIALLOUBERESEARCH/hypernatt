# Security & Trust — HyperNatt & Remora Engine

Trust in decentralized finance and automated trading should never be taken on faith. This document specifies the non-custodial invariants, cryptographic anchors, and security guarantees of the HyperNatt platform.

> **Principle:** Verify, do not trust. Every claim on HyperNatt is verifiable on-chain on Hyperliquid L1 or anchored via immutable SHA-256 hashes in this repository.

---

## 1. Official Channels & Anti-Impersonation

HyperNatt is a verified sovereign project. Scammers and impersonators may launch fake tokens, fraudulent social accounts, or spoof websites. Verify any presence against this official list:

- **Official Website**: [https://hypernatt.com](https://hypernatt.com)
- **Live Proof of Process**: [https://hypernatt.com/audit](https://hypernatt.com/audit)
- **Public Audit Repository**: [https://github.com/hypernatt/hypernatt](https://github.com/hypernatt/hypernatt)
- **MCP Terminal Repository**: [https://github.com/DIALLOUBE-RESEARCH/hypernatt-terminal](https://github.com/DIALLOUBE-RESEARCH/hypernatt-terminal)
- **Official Telegram Bot**: [https://t.me/hypernatt_bot](https://t.me/hypernatt_bot)
- **Hyperliquid L1 Vault Address**: [`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
- **Official Contact**: [contact@hypernatt.com](mailto:contact@hypernatt.com)

**What does NOT exist:**
- HyperNatt has **no public token sale, no ICO, no presale, and no airdrop**.
- HyperNatt has **no official X/Twitter account**. Any account claiming to run a public sale or token contract on Ethereum, Solana, or Base using our name is an impersonator.

---

## 2. Non-Custodial Architecture & Fund Safety

### Can HyperNatt or the Remora bot withdraw or steal user funds?
**Strictly NO.** This guarantee is enforced mathematically by the Hyperliquid Layer 1 consensus protocol:

1. **Zero Withdrawal Permissions**: The automated agent wallet (`0x...`) is granted **only trading permissions** on the vault. The Hyperliquid L1 state machine mathematically prohibits agent keys from initiating withdrawals, asset transfers, or destination re-routing.
2. **Sovereign Depositor Redemptions**: Depositors hold 100% custody of their vault shares. At any time, a depositor can trigger a direct withdrawal back to their own wallet via the Hyperliquid L1 interface.
3. **No Intermediary Custody**: Deposited funds never touch a centralized server, a private GCP database, or an off-chain multi-sig. They remain locked in the native Hyperliquid L1 vault smart contract.

---

## 3. Surface & Disclosure Model

To protect proprietary research without compromising scientific honesty:

| Domain | Visibility | Rationale |
|---|---|---|
| **Proof of Process & Audits** | **Public** | Verifiable mathematical research, historical benchmark matrices, failure post-mortems, and SHA-256 manifests. |
| **Vault Track Record** | **Public On-Chain** | Every fill, liquidation distance, margin ratio, and PnL is publicly readable on Hyperliquid L1. |
| **Live Telemetry (v2dry)** | **Public** | Real-time market state, liquidation radar, and intrabar telemetry served live on `hypernatt.com/v2dry/`. |
| **MCP Terminal Protocol** | **Public** | Open tools for autonomous agents to read market structure terrain. |
| **Execution Engine Source Code** | **Private** | Proprietary order-routing algorithms, sub-second execution mechanisms, and private vault infrastructure remain in the private monorepo to prevent front-running and edge degradation by predatory Market Makers. |

---

## 4. Cryptographic Proof Verification

Every claim published on the [Proof of Process](https://hypernatt.com/audit) page is anchored to a public note in `notes/` via an immutable SHA-256 hash.

Anyone can independently verify that the notes have not been altered ex-post:

```bash
# Clone this repository
git clone https://github.com/hypernatt/hypernatt.git
cd hypernatt

# Run the independent cryptographic audit
node scripts/verify_ledger.mjs
```

A successful output confirms that 100% of claims match the published hashes with 0 discrepancies.

---

## 5. Vulnerability Reporting

If you discover a security vulnerability affecting HyperNatt smart contracts, web infrastructure, or telemetry feeds, please report it responsibly:

- **Security Email**: [contact@hypernatt.com](mailto:contact@hypernatt.com)
- **PGP Key**: Available upon request.
- **Scope**: Smart contract interactions, API endpoints, TLS/DNS configurations.
- **Policy**: We acknowledge receipts within 24 hours and do not pursue legal action against security researchers acting in good faith.
