# HyperNatt — Public Research & Cryptographic Audit

[![Cryptographic Audit](https://img.shields.io/badge/Cryptographic%20Audit-18%2F18%20Verified-brightgreen)](https://hypernatt.com/audit)
[![Vault](https://img.shields.io/badge/Hyperliquid%20L1-Vault%200x04e2eb...-10b981)](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
[![Proof of Process](https://img.shields.io/badge/Proof%20of%20Process-SHA--256%20Anchored-8b5cf6)](https://hypernatt.com/audit)
[![Version](https://img.shields.io/badge/version-1.2.0--era670-blue)](./CHANGELOG.md)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](./LICENSE)
[![Security](https://img.shields.io/badge/Security-Non--Custodial-success)](./SECURITY.md)

**The sovereign, non-custodial quantitative platform powered by the Remora Engine.**

Built by one person over 21 months. Research methodologies, cryptographic anchors, and failure post-mortems are **public**. Proprietary execution bots and order-routing infrastructure are **private**. Zero custody. Not financial advice.

- **Main Platform**: [https://hypernatt.com](https://hypernatt.com)
- **Live Proof of Process**: [https://hypernatt.com/audit](https://hypernatt.com/audit)
- **Live Public Telemetry**: [https://hypernatt.com/v2dry/](https://hypernatt.com/v2dry/)
- **MCP Terminal**: [https://github.com/DIALLOUBE-RESEARCH/hypernatt-terminal](https://github.com/DIALLOUBE-RESEARCH/hypernatt-terminal)

> **Public mirror notice:** This repository is the public verification mirror for HyperNatt. It anchors all figures, claims, and benchmark matrices displayed on the live platform to immutable SHA-256 digests.

---

## 1. Quick Start — Independent Verification (30 Seconds)

Any developer, quant, or jury member can verify that 100% of claims on [hypernatt.com/audit](https://hypernatt.com/audit) match their underlying cryptographic source notes:

```bash
# Clone the public mirror repository
git clone https://github.com/hypernatt/hypernatt.git
cd hypernatt

# Run the standalone zero-dependency verification script
node scripts/verify_ledger.mjs
```

### Verification Result
```text
Schema:             hypernatt.audit.ledger.v1
Generated (UTC):    2026-09-06T15:30:00Z
Era:                645
Vault Address:      0x04e2eb302fe9ff23a9d1f2455084af624737a6d8
Total Claims:       18

✅ [PASS] Note 000 | SHA-256: 4fbcbfceaa142a5a... | Default action
✅ [PASS] Note 645 | SHA-256: c537fd22ce813e44... | Exits
✅ [PASS] Note 649 | SHA-256: 24cd5b417bb729f1... | TRAIN confirmation
✅ [PASS] Note 657 | SHA-256: 817c6e17a9703916... | Proof of Process
✅ [PASS] Note 670 | SHA-256: 074ad18d778a192e... | Documented audit — Intrabar oracle & L2 recorder deployment
...
🎉 VERIFICATION SUCCESSFUL: 18/18 notes cryptographically verified.
```

---

## 2. The Core Premise: Proof of Process

Most algorithmic trading projects make unverifiable marketing claims about backtests, win rates, and proprietary algorithms. HyperNatt operates on a different standard: **Proof of Process**.

1. **Every Figure Anchored**: Every metric shown on the public audit dashboard (win rates, drawdowns, loss ceilings, sample sizes) cites a specific research note with an immutable SHA-256 hash.
2. **Documented Failures**: We publicly document discarded hypotheses, failure modes, and engineering errors (e.g. the legacy holding-time cap in Note 420).
3. **On-Chain Truth**: Real fills, margin balance, and liquidation distance are visible directly on the [Hyperliquid L1 Vault Contract](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8).

---

## 3. The Scientific Discovery: Intrabar Oracle Bias (Era 670)

A core demonstration of HyperNatt's quantitative honesty occurred during the comprehensive audit of Era 670 (Note 670):

- **The Historical Close Illusion**: Across 5.65 years of 15m historical candles (2021–2026), filtering for candle closes with rejection/force $\ge 5.0$ displayed an apparent **83% Win Rate and +39.73 bps net EV**.
- **The Empirical Refutation**: When audited at the exact crossing threshold (entering in real time via LIMIT order), the signal produced a **strictly negative net EV (-7.73 bps on ETH)**.
- **The Root Cause**: The +39.73 bps was an in-bar selection artifact. 15-minute OHLC bars are mathematically blind to whether an in-progress sweep will be absorbed or accelerate into a liquidation cascade.
- **The Resolution**: 
  - The live vault remains **100% FLAT** (`VAULT_ENTRY_ENABLED=false`) to protect depositor capital.
  - A continuous **24/7 L2 WebSocket recorder** was deployed on GCP VPS to capture sub-second book depth and trade aggression for BTC and ETH, laying the foundation for causal microstructure research (Mission 06).

---

## 4. The Remora Philosophy (4 Pillars)

| Pillar | Principle | Operational Rule |
|---|---|---|
| **1. MM-Aware** | Remora clings to the shark | Read market-maker liquidation traps, sweeps, and reclaim levels before entering. Never trade generic indicator crossovers. |
| **2. Poker Edge** | Play only positive EV | Trade only with mathematical expectation net of fees and slippage. **HOLD is a first-class decision**, not an error. |
| **3. Surgeon Diagnosis** | Causal post-mortems | Dissect MAE (Maximum Adverse Excursion) and MFE on every trade to identify the structural cause of every exit. |
| **4. Mathematical Truth** | Science before code | If empirical data refutes a theory, the theory is discarded immediately. Zero narrative bias. |

### What We Do NOT Claim

| We do **not** claim | What we **do** anchor & demonstrate |
|---|---|
| Guaranteed future profit or "no-loss" algorithm | Zero depositor liquidations across 5.6+ years backtest & live flat protection |
| Intrabar predictive edge from historical 15m OHLC | Documented in-bar oracle bias; -7.73 bps threshold refutation publicly proven |
| Custody or discretionary management of user deposits | 100% non-custodial Hyperliquid L1 vault; agent wallet has zero withdrawal permissions |
| Public dump of proprietary execution bot code | Public mathematical research, cryptographic Proof of Process ledger, independent CLI verification |
| Tokens, ICOs, or presales | Pure non-custodial DeFi vault architecture on Hyperliquid L1 |

---

## 5. Non-Custodial Architecture

HyperNatt is built from the ground up to prevent custodial counterparty risk:

- **Hyperliquid L1 Native Vault**: [`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8).
- **Consensus Enforcement**: The automated agent wallet possesses **strictly order-routing rights**. Hyperliquid L1 consensus mathematically blocks the agent from initiating withdrawals or transferring funds.
- **Immediate Sovereign Redemptions**: Depositors retain 100% custody of their vault shares and can redeem capital directly through the L1 blockchain at any time.

---

## 6. Public Research Notes & Anchors

All research notes are committed in `notes/` and verifiable against `ledger.json`:

| Note | Date | SHA-256 Digest | Key Finding / Commitment |
|---|---|---|---|
| **000** | 2026-09-03 | `4fbcbfceaa14...` | Default Action: HOLD is first-class. No trade is owed to the market. |
| **420** | 2026-09-03 | `acf24136f15d...` | Documented failure: retirement of legacy holding-time cap without adverse stop. |
| **645** | 2026-09-03 | `c537fd22ce81...` | TRAIL_ADV adverse stop: 1,541 bounded TRAIN exits (worst -39.37 USD). 0 liquidation. |
| **649** | 2026-09-02 | `24cd5b417bb7...` | Confirmation of TRAIN coffer across 2021–2024 dataset. |
| **653** | 2026-09-03 | `aec9515c3412...` | Camera integrity chain genesis verification. |
| **656** | 2026-09-03 | `e42a95435e28...` | Era 645 forward book baseline (`n_fills=0`). |
| **657** | 2026-09-03 | `817c6e17a970...` | Proof of Process architectural specification & rejected marketing windows. |
| **664** | 2026-09-03 | `5aa07ab9dbb1...` | 20-month unseen holdout audit isolating intrabar oracle bias. |
| **667** | 2026-09-03 | `b1551343e8e8...` | Transition execution trade documentation. |
| **670** | 2026-09-06 | `074ad18d778a...` | Historical data provenance (Binance Spot + fee model) & 24/7 L2 recorder deployment. |

---

## 7. Security & Official Channels

- **Website**: [https://hypernatt.com](https://hypernatt.com)
- **Telegram Bot**: [https://t.me/hypernatt_bot](https://t.me/hypernatt_bot)
- **Vault Contract**: [`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`](https://app.hyperliquid.xyz/vaults/0x04e2eb302fe9ff23a9d1f2455084af624737a6d8)
- **Security Policy**: See [SECURITY.md](SECURITY.md) for vulnerability disclosure and non-custodial proofs.
- **Notice**: HyperNatt has **no public token**, runs **no ICO/presale**, and has **no official X/Twitter account**. Beware of impersonators.

---

## 8. License

The documentation, research notes, cryptographic manifests, and verification tooling in this repository are licensed under the [MIT License](LICENSE).  
The proprietary execution engine, ML trading models, and sub-second vault orchestration infrastructure remain proprietary intellectual property of DIALLOUBE RESEARCH.
