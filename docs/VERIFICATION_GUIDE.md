# Verify HyperNatt's public evidence

## Current publication

Open [publication health](https://hypernatt.com/audit/publication/health.json)
and [the current bundle](https://hypernatt.com/audit/publication/latest.json).
Check the timestamp and each destination's status. A stale or failed delivery
must not be treated as current evidence.

The same bundle is published at:

- [Product repository](https://github.com/hypernatt/hypernatt/blob/main/docs/publication/latest.json)
- [Audit repository](https://github.com/DIALLOUBE-RESEARCH/hypernatt-audit-public/blob/main/publication/latest.json)

Compare the `sha256` values and content. For integrity verification, the digest
is SHA-256 of the `data` object serialized with sorted keys, ASCII JSON escapes,
compact separators and a final newline. It is not the hash of the whole bundle.
The corresponding immutable snapshot is stored under `snapshots/<sha256>.json`.

A matching digest proves content integrity. It does not prove the scientific
conclusion, an audit result, fund safety or a profitable strategy.

## Historical notes

```bash
git clone https://github.com/DIALLOUBE-RESEARCH/hypernatt-audit-public.git
cd hypernatt-audit-public
```

For each entry in `ledger.json`, read `source_path`, calculate SHA-256 over the
file's original bytes, and compare it with `source_sha256`. Do not normalize
line endings before hashing. GitHub's raw file at an immutable commit provides
the original bytes when a local checkout transforms line endings.

The ledger, notes and methodology describe their dated historical context.
Old addresses, observations and backtest numbers are not current deposit
instructions. A list of matching hashes is not a certification of every claim.

## Contract and transaction verification

Use [the vault page](https://hypernatt.com/vault) and
[official documentation](https://hypernatt.com/docs) to identify the current
network, asset and contract. HyperEVM contract state and HyperCore trading state
must be reconciled. Check receipts, deployed code, permissions and share
accounting; a screenshot or a displayed balance alone is insufficient.

The capital circuit remains under qualification. No new deposit is required
to read the published evidence. Do not use a historical native vault link as
the destination for a new HyperEVM deposit.
