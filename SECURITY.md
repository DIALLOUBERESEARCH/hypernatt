# Security & Trust — HyperNatt Super App

Trust in decentralized finance must be earned through verifiable cryptography, non-custodial code, and immutable consensus rules. This document specifies the security guarantees and non-custodial model of the HyperNatt platform.

- **Genesis Date**: November 4, 2025 (*Né le 4 novembre 2025*)
- **Vault Contract (Hyperliquid L1)**: [`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)

---

## 1. Official Channels & Anti-Impersonation

Always verify the legitimacy of any domain or contract:

- **Super App Platform**: [https://hypernatt.com](https://hypernatt.com)
- **App Dashboard**: [https://hypernatt.com/app](https://hypernatt.com/app)
- **Documentation**: [https://hypernatt.com/docs](https://hypernatt.com/docs)
- **Proof of Process**: [https://hypernatt.com/audit](https://hypernatt.com/audit)
- **Main Public Repo**: [https://github.com/hypernatt/hypernatt](https://github.com/hypernatt/hypernatt)
- **MCP Terminal Protocol Repo**: [https://github.com/hypernatt/hypernatt-terminal](https://github.com/hypernatt/hypernatt-terminal)
- **Cryptographic Audit Ledger**: [https://github.com/hypernatt/hypernatt-audit-public](https://github.com/hypernatt/hypernatt-audit-public)
- **Official Telegram Bot**: [https://t.me/hypernatt_bot](https://t.me/hypernatt_bot)

**Important Notice:**
- HyperNatt has **no public token sale, no ICO, and no token contract on Ethereum or Solana**.
- Beware of phishing attempts and spoof domains.

---

## 2. Non-Custodial Architecture & Fund Safety

### Can HyperNatt withdraw or steal user funds?
**Strictly NO.** This protection is mathematically enforced by the Hyperliquid Layer 1 consensus protocol:

1. **Zero Withdrawal Permissions**: The automated agent wallet (`0x...`) is granted **only trading permissions** on the vault. The Hyperliquid L1 state machine mathematically prohibits agent keys from initiating withdrawals, asset transfers, or destination re-routing.
2. **Sovereign Depositor Redemptions**: Depositors hold 100% custody of their vault shares. At any time, a depositor can trigger a direct withdrawal back to their own wallet via the Hyperliquid L1 interface.
3. **No Intermediary Custody**: Deposited funds never touch a centralized server, a private GCP database, or an off-chain multi-sig. They remain locked in the native Hyperliquid L1 vault smart contract.

---

## 3. Proprietary Execution & Closed-Source Rationale

- **Why the Remora Engine is Closed-Source**: The algorithmic execution models, neural networks, and sub-second order-routing daemons are proprietary intellectual property. Exposing execution algorithms publicly would subject depositor orders to predatory MEV, toxic arbitrage, and front-running.
- **Proof of Process**: To provide institutional-grade transparency without degrading alpha, HyperNatt anchors historical milestones and telemetry to verifiable SHA-256 cryptographic digests on [hypernatt.com/audit](https://hypernatt.com/audit).

---

## 4. Vulnerability Reporting

If you discover a security vulnerability affecting HyperNatt smart contracts, web infrastructure, or telemetry feeds, please report it responsibly:

- **Security Email**: [contact@hypernatt.com](mailto:contact@hypernatt.com)
- **PGP Key**: Available upon request.
- **Policy**: We acknowledge receipts within 24 hours and do not pursue legal action against security researchers acting in good faith.
