# HyperNatt — The Sovereign DeFi Super App on Hyperliquid L1

<!-- PUBLICATION:BEGIN -->
## Current engineering activity

Latest committed activity: **2026-09-27T10:40:15Z**.
[Activity and research records](docs/publication/ACTIVITY.md) | [Proof of Process](https://hypernatt.com/audit)

This public documentation is generated from selected committed evidence.
The proprietary implementation remains private. Activity is not proof of profitability.
Current paper deployment and publication health are shown on Proof of Process.
<!-- PUBLICATION:END -->


[![CI](https://img.shields.io/badge/CI-passing-brightgreen)](https://github.com/hypernatt/hypernatt)
[![Hyperliquid L1](https://img.shields.io/badge/Hyperliquid%20L1-Native%20Vault-10b981)](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
[![Security](https://img.shields.io/badge/Security-100%25%20Non--Custodial-success)](./SECURITY.md)
[![MCP Terminal](https://img.shields.io/badge/MCP%20Terminal-v2.7.0-purple)](https://github.com/hypernatt/hypernatt-terminal)
[![Proof of Process](https://img.shields.io/badge/Proof%20of%20Process-SHA--256%20Anchored-8b5cf6)](https://hypernatt.com/audit)
[![Genesis](https://img.shields.io/badge/Genesis-November%204%2C%202025-blue)](https://hypernatt.com)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](./LICENSE)

**HyperNatt is the sovereign, non-custodial decentralized finance Super App built natively on Hyperliquid L1.**

- **Genesis**: November 4, 2025  
- **Founder**: Hamet Diallo.

HyperNatt unites automated non-custodial vault execution, multi-chain DEX aggregation, embedded AI financial intelligence, P2P social micro-payments, automated multi-country tax compliance, and an open Model Context Protocol (MCP) server within a single unified Web3 experience.

- **Main Super App**: [https://hypernatt.com](https://hypernatt.com)
- **Launch Application**: [https://hypernatt.com/app](https://hypernatt.com/app)
- **Official Documentation**: [https://hypernatt.com/docs](https://hypernatt.com/docs)
- **Proof of Process & Audit**: [https://hypernatt.com/audit](https://hypernatt.com/audit)
- **MCP Terminal Protocol**: [https://github.com/hypernatt/hypernatt-terminal](https://github.com/hypernatt/hypernatt-terminal)
- **Cryptographic Audit Ledger**: [https://github.com/hypernatt/hypernatt-audit-public](https://github.com/hypernatt/hypernatt-audit-public)

> **Public Mirror Notice**: This repository provides the public architecture, documentation, interface contracts, and ecosystem guides for the HyperNatt platform. The algorithmic execution engine remains proprietary to protect user capital from predatory MEV and front-running. User funds are 100% non-custodial and governed exclusively by Hyperliquid L1 consensus.

---

## 1. What HyperNatt Delivers (The Super App Ecosystem)

### 🏦 1. Non-Custodial Hyperliquid L1 Vault
- **Autonomous Algorithmic Execution**: Automated trading powered by the proprietary Remora Engine, engineered for capital preservation and disciplined risk-adjusted participation.
- **100% Non-Custodial**: Deposits are deployed into the native Hyperliquid L1 smart contract ([`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)). No private keys, seed phrases, or depositor balances are ever held by HyperNatt servers.
- **Sovereign Redemptions**: Depositors retain full on-chain ownership of their vault shares and can redeem capital directly via blockchain consensus at any time.

### 🔄 2. NattSwap (Cross-Chain DEX Aggregator)
- **Frictionless Multi-Chain Routing**: Powered by Li.Fi, swap any asset across 20+ blockchains (Arbitrum, Ethereum, Solana, Base, Polygon, Optimism, Avalanche, BSC...) directly into Hyperliquid USDC in a single transaction.
- **Optimal Liquidity**: Intelligent aggregation across major decentralized exchanges for minimal slippage and optimal fees.

### 🤖 3. NattChat & Real-Time Intelligence
- **AI Portfolio Concierge**: Multilingual AI assistant providing continuous telemetry on vault positions, equity balance, margin health, and market context.
- **Voice & Speech Interface**: Native voice recognition and audio playback for mobile accessibility.

### 🛡️ 4. NattShield Fiscal Guard
- **Automated Tax Compliance**: Real-time tax liability estimation and buffer calculation across 8 countries (France, USA, Germany, Spain, Japan, Brazil, UK, etc.).
- **1-Click Certified Export**: Generates instant, certified PDF tax reports ready for accounting and regulatory filing.

### 💸 5. P2P Social Micro-Payments & Community
- **Decentralized Instant Tips**: Send and receive USDC micro-payments (1–100 USDC/day) instantly between community members directly in chat on Arbitrum with zero platform fees.
- **Real-Time Translation**: Communicate globally with automatic live message translation into your native language.

### ⚡ 6. HyperNatt Terminal (Open-Source MCP Server)
- **Model Context Protocol for Trading Agents**: Equips Claude, Cursor, Windsurf, and custom autonomous agents with forced-order liquidation maps.
- Dedicated public repository: [hypernatt/hypernatt-terminal](https://github.com/hypernatt/hypernatt-terminal).

---

## 2. Quick Start — How to Use HyperNatt (30 Seconds)

```text
[Connect Wallet] ──> [Deposit USDC in Vault] ──> [Remora Engine Executes] ──> [1-Click Withdraw Anytime]
```

### Step 1: Connect Your Wallet
1. Open [https://hypernatt.com](https://hypernatt.com) (or install the PWA on desktop / mobile).
2. Click **Connect Wallet** in the top navigation bar.
3. Select your EVM wallet (MetaMask, Rabby, Coinbase Wallet, Trust Wallet, WalletConnect, etc.).

### Step 2: Deposit into the Hyperliquid L1 Vault
1. Navigate to the **Vault** interface on the dashboard ([hypernatt.com/app](https://hypernatt.com/app)).
2. Enter the amount of USDC you wish to deposit (minimum $5 USDC).
3. Confirm the deposit transaction in your wallet.
4. *Your funds remain 100% under your sovereign control on Hyperliquid L1.*

### Step 3: Monitor Autonomous Execution
- The Remora Engine continuously evaluates sub-second market structure on Hyperliquid perpetuals.
- **Capital Preservation First**: If market terrain does not offer a demonstrable positive mathematical expectation, the engine remains flat (holding capital safe).
- Monitor your real-time equity balance, PnL, and live on-chain status 24/7 on the dashboard.

### Step 4: Sovereign On-Chain Redemption
- Click **Withdraw** at any time.
- Capital is instantly redeemed from the vault contract back to your wallet address with zero intermediary approval required.

---

## 3. Platform Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          HYPERNATT SUPER APP                           │
│     Web3 Frontend (Next.js PWA) • NattChat • NattShield • Terminal     │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
                    ▼                                ▼
       ┌────────────────────────┐       ┌────────────────────────┐
       │   NattSwap (Li.Fi)     │       │  HyperNatt Terminal    │
       │ Multi-Chain Cross-Swap │       │  (MCP Server & x402)   │
       │ (Arb, Eth, Sol, Base)  │       │  Liquidation Telemetry │
       └────────────┬───────────┘       └────────────────────────┘
                    │ (USDC)
                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        HYPERLIQUID L1 PROTOCOL                         │
│                                                                        │
│   ┌────────────────────────────────┐  Consensus  ┌─────────────────┐   │
│   │ Native Vault Contract          │ ◄────────── │ User Depositors │   │
│   │ 0x04e2eb302fe9ff23a...         │ ──────────► │ 1-Click Redeem  │   │
│   └───────────────▲────────────────┘             └─────────────────┘   │
│                   │                                                    │
│                   │ Strictly Order-Routing Permissions                 │
│                   │ (Consensus Blocks Withdrawals)                     │
│                   │                                                    │
│   ┌───────────────┴────────────────┐                                   │
│   │ Automated Agent Wallet         │                                   │
│   │ Powered by the Remora Engine   │                                   │
│   │ (Proprietary Execution Daemon) │                                   │
│   └────────────────────────────────┘                                   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Security & Non-Custodial Guarantees

1. **Zero Custody**: HyperNatt does not hold user funds, manage private keys, or maintain centralized balances. All deposits interact directly with Hyperliquid Layer 1 smart contracts.
2. **Consensus-Enforced Permission Boundaries**:
   - The automated trading agent operates under restricted sub-account permissions on Hyperliquid L1.
   - Consensus rules mathematically restrict the agent to order routing (open/close positions, placing limit/market orders).
   - **The agent wallet has ZERO withdrawal or transfer capabilities.** It is physically and cryptographically impossible for the platform to move depositor funds to an external wallet.
3. **Emergency Sovereign Exit**: Depositors can withdraw their equity directly via the Hyperliquid official explorer or interface independently of HyperNatt.
4. **Vulnerability Disclosure**: See [SECURITY.md](SECURITY.md) for our coordinated disclosure policy.

---

## 5. Proprietary Execution & Proof of Process

- **Why Execution Logic is Closed-Source**: The proprietary execution models, high-frequency algorithms, and neural networks powering the Remora Engine are strictly closed-source. Publicizing order execution logic exposes depositor orders to toxic predatory flow, front-running bots, and reverse-engineering.
- **Proof of Process**: Rather than relying on unverified claims, HyperNatt anchors its public figures, milestones, and audit history to verifiable cryptographic SHA-256 digests.
- **Independent Verification**: Visit [hypernatt.com/audit](https://hypernatt.com/audit) or clone our audit ledger mirror at [hypernatt/hypernatt-audit-public](https://github.com/hypernatt/hypernatt-audit-public) to independently inspect on-chain execution telemetry.

---

## 6. Official Ecosystem Links

| Service | Link | Description |
|---|---|---|
| **Super App Platform** | [hypernatt.com](https://hypernatt.com) | Main web application and dashboard |
| **Launch App** | [hypernatt.com/app](https://hypernatt.com/app) | Direct trading dashboard & vault interface |
| **Documentation** | [hypernatt.com/docs](https://hypernatt.com/docs) | Complete user & developer documentation (8 languages) |
| **Proof of Process** | [hypernatt.com/audit](https://hypernatt.com/audit) | Cryptographic verification & audit ledger |
| **MCP Terminal Repo** | [hypernatt/hypernatt-terminal](https://github.com/hypernatt/hypernatt-terminal) | Open-source Model Context Protocol server |
| **Audit Mirror Repo** | [hypernatt/hypernatt-audit-public](https://github.com/hypernatt/hypernatt-audit-public) | Immutable SHA-256 audit ledger |
| **Hyperliquid Vault** | [`0x04e2eb...`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8) | Verified native on-chain vault on Hyperliquid L1 |
| **Telegram Bot** | [@hypernatt_bot](https://t.me/hypernatt_bot) | Live real-time trade alerts |

---

## 7. License & Intellectual Property

- The frontend interfaces, documentation, SDKs, and integration tools in this repository are licensed under the [MIT License](LICENSE).
- The Remora execution engine, algorithmic models, and private vault orchestration infrastructure remain the exclusive intellectual property of Hamet Diallo / DIALLOUBE RESEARCH.
- **HyperNatt Genesis**: **November 4, 2025**. All rights reserved.
