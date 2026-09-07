# Changelog — HyperNatt & Remora Engine Audit

All notable releases, scientific milestones, and audit ledger updates for the public HyperNatt platform.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and follows a disciplined quantitative R&D lifecycle.

---

## [1.2.0] — 2026-09-06 (Era 670)

### Added
- **Mission 05 Autonomous 24/7 L2 Recorder**: Deployed continuous multi-stream WebSocket recorder on GCP VPS capturing 6 native feeds for BTC and ETH (`REF`, `M2`, `M5`, `AGG4`, `BBO`, `TRADES`) with RFC 1952 gzip hourly rotations and SHA-256 manifests.
- **Note 670 Published**: Comprehensive audit documenting provenance of historical matrices (Binance Spot archives 2021–2026 + Hyperliquid simulated fee schedule) and formal retirement of reactive `sweep_sensor.py`.
- **Public Audit Ledger Updated**: Registered Note 670 hash `074ad18d...` under `hypernatt.audit.ledger.v1`.

### Changed
- **Honest Oracle Refutation**: Documented that the +39.73 bps historical close signal exhibits an in-bar selection artifact; blind threshold LIMIT entry yields -7.73 bps.
- **Capital Preservation Directive**: Enforced live vault state strictly **100% FLAT** (`VAULT_ENTRY_ENABLED=false`) pending causal empirical L2 micro-depth validation (Mission 06). Zero depositor capital exposed.

---

## [1.1.0] — 2026-09-03 (Era 645 / Era 657)

### Added
- **Proof of Process Cryptographic Ledger (`ledger.json`)**: Initial public deployment of verifiable claims anchoring historical backtest statistics to immutable SHA-256 note hashes.
- **Note 645 & Note 649**: TRAIL_ADV adverse stop integration. Bounded losses across 1,541 TRAIN exits (worst -39.37 USD on 1,000 USD initial capital). Zero liquidation across 5.65 years of data.
- **Note 656 & Note 657**: Forward zero fills baseline tracking and public process audit specification.

### Fixed
- **Holding Time Cap Retirement**: Archived legacy time-based exits (Note 420) in favor of volatility-adaptive trailing stops.

---

## [1.0.0] — 2026-08-05 (Era 617)

### Added
- **HyperNatt V2 Remora Dry-Run Public Telemetry**: Launched continuous public simulation on `https://hypernatt.com/v2dry/` with 15-second refresh interval.
- **Hyperliquid L1 Vault Integration**: Established native non-custodial vault `0x04e2eb302fe9ff23a9d1f2455084af624737a6d8` with agent trading permissions and zero withdrawal capability.
- **Micro-Edge & Anti-Liquidation Invariants**: Established foundation of Remora market maker awareness (reading liquidation clusters before trade generation).
