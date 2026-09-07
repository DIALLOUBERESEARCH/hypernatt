# 645 — public extract (TRAIL_ADV, lab TRAIN)

Private source: 645. This file is a public extract.
Engine parameters are not published.

Split: TRAIN 2021-01-01 -> 2024-12-31 (4 years, 4782 positions).

## Book (TRAIN)

| Metric | Measured value |
|---|---|
| Positions opened | 4782 |
| Adverse stop exits | 1541 (all bounded) |
| Win rate | 67.8% |
| Worst unit loss | -39.37 USD |
| Mean adverse stop loss | -6.85 USD |
| Liquidations | 0 |

TRAIL_ADV is the adverse-trailing stop mechanism capping losses when market flow breaks against position thesis. All 1541 adverse exits were bounded losses (worst -39.37 USD, zero ruin).

Promoted to live production on 2026-09-03 (note 663) as the primary engine layer.

## What this is not

Not a promise of identical future returns. Not the historical vault fill window (see note 657).
Confirmed as the reference TRAIN coffer by public extract 649.
