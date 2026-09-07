# Architecture & Non-Custodial Security Model

HyperNatt is an autonomous, non-custodial quantitative execution platform built on Hyperliquid Layer 1. This document details the architectural separation between user custody, verifiable research, and execution boundaries.

---

## 1. System Topology

```mermaid
graph TD
    User["👤 Depositor (Self-Custodial Wallet)"]
    HL_Vault["🔒 Hyperliquid L1 Vault Contract (0x04e2eb...)"]
    Agent["🤖 Remora Execution Agent (0x...)"]
    L2_Stream["📡 L2 Native WebSocket Recorder (24/7 VPS)"]
    Audit_Portal["🌐 Public Proof of Process (hypernatt.com/audit)"]

    User -->|Deposit / Direct Withdraw| HL_Vault
    Agent -->|Signed Trade Orders Only (Zero Withdraw Rights)| HL_Vault
    L2_Stream -->|Continuous Multi-Stream Capture| Agent
    Audit_Portal -->|Cryptographic SHA-256 Hashes| User
```

---

## 2. The Non-Custodial Guarantee (Hyperliquid L1)

The most critical invariant of HyperNatt is that **user capital is never custodial**:

- **Contract Address**: [`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
- **Role Separation**:
  - **Depositor**: Holds 100% ownership of vault shares. At any time, a depositor can trigger a redemption directly back to their self-custodial wallet through the native Hyperliquid interface.
  - **Leader / Agent**: Holds **strictly order-routing rights**. The Hyperliquid L1 consensus rules mathematically prevent the leader key from initiating withdrawals or transferring funds to arbitrary external addresses.
- **Mempool Immunity**: Hyperliquid utilizes a Tendermint-based Byzantine Fault Tolerant (BFT) consensus without a public mempool, mitigating front-running and MEV sandwich attacks.

---

## 3. Technology Stack

- **L1 Infrastructure**: Hyperliquid Layer 1 (Rust consensus, native orderbook).
- **Core Orchestration**: Python 3.11+, asynchronous WebSockets, multi-stream sub-second data capture.
- **Frontend & Public Interface**: Next.js 14, TypeScript, Tailwind CSS, high-security HTTP headers (HSTS Preload, TLS 1.3).
- **Agent Interoperability**: MCP (Model Context Protocol), dual-rail payment settlement via x402 on Base and Solana mainnets.
