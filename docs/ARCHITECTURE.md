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
    NattSquare["🌐 NattSquare M2M (x402 on Base)"]
    NattShield["🛡️ NattShield Fiscal Engine"]
    HL_Vault["🔒 Hyperliquid L1 Vault (0x04e2eb...)"]
    Remora["⚡ Remora Engine (Private Execution Daemon)"]
    MCP["🔌 HyperNatt Terminal (MCP Server)"]

    User -->|Connect / Trade / Swap| Frontend
    Frontend --> LiFi
    Frontend --> NattChat
    Frontend --> NattSquare
    Frontend --> NattShield
    Frontend -->|Non-Custodial Deposit / Withdraw| HL_Vault
    Remora -->|Signed Orders Only (Zero Withdraw Rights)| HL_Vault
    MCP -->|Forced-Order Maps| User
```

---

## 2. Technology Stack

- **Frontend & PWA**: Next.js 14, React 18, TypeScript, Tailwind CSS, wagmi / viem, Lucide icons.
- **Smart Contracts & Execution**: Hyperliquid Layer 1 (Rust consensus, native orderbook), Arbitrum, Base Mainnet.
- **Cross-Chain Bridging**: Li.Fi API & Smart Routing.
- **Machine-to-Machine (M2M)**: HTTP 402 micro-payment protocol, NDAT ERC-20 on Base.
- **AI Infrastructure**: Multilingual streaming LLM orchestration, voice synthesis and speech recognition.
- **Terminal & Developer Tools**: Model Context Protocol (MCP) server, stdio / SSE transport.
