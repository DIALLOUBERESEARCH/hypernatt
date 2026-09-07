# System Architecture — HyperNatt Super App

HyperNatt is a modular, high-availability decentralized finance platform uniting multi-chain connectivity, automated L1 vault execution, and agent-to-agent protocols.

---

## 1. High-Level Architecture

```mermaid
graph TD
    User["👤 Depositor / User"]
    Frontend["💻 Next.js 14 PWA (Web & Mobile)"]
    LiFi["🔄 NattSwap (Li.Fi DEX Aggregator)"]
    NattChat["🤖 NattChat AI Concierge"]
    NattShield["🛡️ NattShield Fiscal Engine"]
    HL_Vault["🔒 Hyperliquid L1 Vault (0x04e2eb...)"]
    Remora["⚡ Remora Engine (Private Execution Daemon)"]
    MCP["🔌 HyperNatt Terminal (MCP Server & x402)"]

    User -->|Connect / Trade / Swap| Frontend
    Frontend --> LiFi
    Frontend --> NattChat
    Frontend --> NattShield
    Frontend -->|Non-Custodial Deposit / Withdraw| HL_Vault
    Remora -->|Signed Orders Only (Zero Withdraw Rights)| HL_Vault
    MCP -->|Forced-Order Maps & Telemetry| User
```

---

## 2. Technology Stack

- **Frontend & PWA**: Next.js 14, React 18, TypeScript, Tailwind CSS, wagmi / viem, Lucide icons.
- **Smart Contracts & Execution**: Hyperliquid Layer 1 (Rust consensus, native orderbook), Arbitrum, Base Mainnet.
- **Cross-Chain Bridging**: Li.Fi API & Smart Routing.
- **AI Infrastructure**: Multilingual streaming LLM orchestration, voice synthesis and speech recognition.
- **Terminal & Developer Protocol**: Model Context Protocol (MCP v2.7.0), x402 micro-payments on Base and Solana.
