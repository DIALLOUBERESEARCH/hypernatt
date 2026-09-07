# 670 — Public Extract: Research Data Provenance, Oracle Audit & High-Frequency L2 Deployment

**Date**: September 6, 2026  
**Entity**: DIALLOUBE-RESEARCH / HYPERNATT  
**Audience**: Public Audit Page (`/audit`), Buildathon Judges & Quantitative Reviewers  
**Context**: Application of Remora Principle 4 (Mathematical Truth Over Marketing)

---

## 1. Historical 5-Year Lab Benchmark Provenance (Table A)

- The 6,540 positions referenced in Table A (TRAIN Era 645, $n=4,782$, and Holdout Era 664, $n=1,758$) represent our offline quantitative laboratory benchmark over 5.65 years (2021–2026).
- **Data Origin**: As formally established during our September 2026 quantitative audit (Erratum 06), this historical study was computed using an institutional 15m OHLC bar dataset from Binance Spot (BTCUSDT & ETHUSDT), with Hyperliquid decentralized exchange execution costs (1.5 bps maker fee, 5.0 bps taker fee) modeled.
- **Signal Anomaly**: The core statistical anomaly is an asymmetric rejection event following a structural volatility boundary breakout, isolating institutional absorption at extreme price excursions.

---

## 2. Quantitative Audit: In-Bar Oracle Detection & Causal Edge

- An exhaustive econometric audit of the historical simulation revealed an in-bar selection effect (look-ahead bias):
  * At the close of a 15m candle, observing this asymmetric absorption pattern confirms an authentic statistical edge (83% win rate, $+40$ bps net EV, $t\text{-stat} = +19$ across both TRAIN and HOLDOUT).
  * However, blindly placing a limit order at the structural threshold during the candle without knowing whether the close will confirm the absorption pattern results in negative expected value ($-7.73$ bps).
  * Unconfirmed crossings experience mean adverse movement of $-23$ to $-30$ bps.
- **Conclusion**: Coarse 15-minute historical bar data is fundamentally insufficient to predict whether a threshold crossing will produce the confirmed absorption pattern before candle close.

---

## 3. Risk Governance & Live Vault Capital Preservation

- In strict adherence to our founding charter—where depositor protection is non-negotiable—the protocol activated an immediate capital preservation safeguard:
  * **Live Vault Entries Paused**: The live Hyperliquid Vault (`0x04e2eb302fe9ff23a9d1f2455084af624737a6d8`) maintains `VAULT_ENTRY_ENABLED = false`.
  * **Capital Status**: The live forward book remains completely **FLAT ($n_{\text{fills}} = 0$)**.
  * **Safety Record**: **0.00% liquidation rate**, exactly zero depositor dollars exposed to unproven intraday execution.

---

## 4. Autonomous 24/7 High-Frequency L2 Recorder Deployment

- Rather than relying on simulated approximations or risking live funds, DIALLOUBE-RESEARCH developed and deployed on September 6, 2026 an autonomous, continuous 24/7 market microstructure recorder (`hl-recorder.service`) on Google Cloud Platform:
  * **6 Native WebSocket Streams**: Continuous tick-by-tick capture of `l2Book` (REF, M2, M5, AGG4), `bbo` (sub-second quote changes), and `trades` across both BTC and ETH perps on Hyperliquid L1.
  * **Hourly Snapshots**: Atomic REST logging of 15m candle state and funding history.
  * **Storage Engine**: RFC 1952 multi-member gzip stream with real-time SHA-256 daily manifests, orphan auto-recovery, and disk guard thresholds.
  * **Supervision**: External watchdog running on 5-minute cron with local fault isolation.

---

## 5. Research Roadmap & Machine Learning Next Steps

- This high-frequency dataset creates the first native sub-second order-book repository to isolate:
  1. Sub-second L2 order-book queue dynamics and microstructural depth behavior at structural boundaries.
  2. Aggressive taker flow exhaustion and micro-slippage during boundary penetration.
  3. Footprint of native Hyperliquid liquidation clusters.
- **Compute Allocation**: Partnering with frontier AI reasoning models (such as Claude Opus 5 and Fable 5.1) to formalize a causal classifier capable of predicting structural absorption prior to candle close, allowing safe re-activation of the maker execution loop.
- **Proof of Process**: Every failure and pivot is publicly logged. We do not market illusions. We build verifiable infrastructure.
