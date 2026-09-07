# The Remora Methodology & Research Principles

The Remora Engine is built upon an uncompromising quantitative philosophy: market makers leave physical footprints (liquidation cascades, book skews, aggressive volume clusters) that can be measured and traded with positive mathematical expectation.

---

## 1. The Four Foundational Pillars

### Pillar 1 — MM-Aware (The Remora Clings to the Shark)
A remora never fights the shark; it feeds alongside it. We never trade a technical indicator in isolation (RSI, MACD, generic breakouts). Every entry is evaluated strictly relative to **where the Market Maker is hunting liquidity** and trapping leveraged participants.

### Pillar 2 — Poker Edge (Positive Expectation Only)
Only play hands with a proven positive Expected Value (EV net of fees, slippage, and adverse excursions). 
- **HOLD is a first-class decision**, not a failure.
- Zero FOMO, zero over-trading: if market terrain does not offer an undeniable edge, the default state is flat.

### Pillar 3 — Surgeon Diagnosis (Causal Analysis)
Every closed position is dissected for its root cause:
- Measure Maximum Adverse Excursion (MAE) and Maximum Favorable Excursion (MFE).
- Diagnose *why* an exit occurred: was the entry flawed, was the timing mistimed, or did the market regime shift?

### Pillar 4 — Mathematical Truth (Truth Before Code)
Quantitative integrity precedes marketing claims. If empirical data refutes a hypothesis, the hypothesis is discarded immediately, regardless of sunk emotional investment or backtest appeal.

---

## 2. The Intrabar Oracle Bias Discovery (Post-Mission 05)

A defining milestone in HyperNatt's quantitative history occurred during the comprehensive audit of Era 670:

### 1. What was observed ex-post at Candle Close
Across 5.65 years of historical 15m data (2021–2026), filtering for candle closes with a rejection/force ratio $\ge 5.0$ showed extraordinary theoretical metrics:
- **Win Rate**: ~83%
- **Net EV**: +39.73 bps per trade
- **t-stat**: +19 across TRAIN and HOLDOUT

### 2. The Empirical Reality at Threshold
When our econometric audit modeled entering via blind LIMIT order at the exact intrabar crossing threshold (the instant the price level is pierced):
- **Expected Value**: **Strictly negative (-7.73 bps on ETH, -2.75 bps gross)**.
- **Root Cause**: The +39.73 bps was an artifact of **in-bar selection / look-ahead bias**. The high rejection ratio only confirmed *ex-post* once the wick had already completed. Standard 15m OHLC historical bars cannot predict whether an in-flight sweep will be absorbed or accelerate into a catastrophic cascade.

### 3. The Autonomous 24/7 L2 Recorder
Faced with this truth, HyperNatt made two non-negotiable decisions:
1. **Capital Protection**: The live Hyperliquid vault was held **strictly 100% FLAT** (`VAULT_ENTRY_ENABLED=false`). Zero depositor dollars are risked on an unverified edge.
2. **Autonomous Capture**: Deployed a dedicated 24/7 L2 WebSocket recorder on GCP VPS capturing 6 native sub-second data streams (`REF`, `M2`, `M5`, `AGG4`, `BBO`, `TRADES`) on BTC and ETH.

This continuous dataset forms the foundation of Mission 06: determining whether sub-second orderbook dynamics and aggressive delta can predict absorption *before* the 15-minute candle closes.
