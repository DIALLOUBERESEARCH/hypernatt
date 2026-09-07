# 667 — public extract (Legacy trade transition, 2026-09-03)

Private source: 667 / transition log. This file is a public extract.
Engine parameters are not published.

## Context and execution

During the deployment of the 645 engine components on 2026-09-03, a position had been opened by the legacy engine (pre-activation):
- Entry: 2026-09-03 13:45 UTC
- Close: 2026-09-03 15:54 UTC
- Realized loss: -12.87 USD
- Resulting vault equity: $345.78 USD

## Protocol adherence

1. **Risk envelope**: The realized loss (-12.87 USD) remained strictly within the lab documented worst unit loss (-39.37 USD from note 645).
2. **Clean handoff**: The operator chose to close the position at market to allow the vault and dry environments to start completely synchronized and flat under the 645 engine.
3. **Accounting integrity**: This trade belongs to the pre-activation legacy engine. It is documented here for transparent public accounting and is explicitly excluded from the 645 forward book metrics.
