# HyperNatt security and responsible disclosure

Updated 1 October 2026. This document describes security boundaries and
reporting channels. It is not an independent audit certificate.

## Official entry points

- [Application and vault](https://hypernatt.com/vault)
- [Documentation](https://hypernatt.com/docs)
- [Proof of Process](https://hypernatt.com/audit)
- [Product repository](https://github.com/hypernatt/hypernatt)
- [Audit repository](https://github.com/DIALLOUBE-RESEARCH/hypernatt-audit-public)
- [Terminal repository](https://github.com/DIALLOUBE-RESEARCH/hypernatt-terminal)

Verify the domain, network, asset, recipient, approval amount and transaction
details in your wallet. HyperNatt and its support channels do not need your
private key or recovery words. Do not rely on a token name or logo to identify
a contract. Verify current addresses through the official documentation.

## Vault transition and permissions

The new design uses HyperEVM smart contracts with HyperCore accounting and
execution. Historical statements about the native vault's permissions must not
be treated as guarantees for a different contract or execution path.

Deposits exchange an asset for vault shares. Redemption depends on the actual
contract rules, available liquidity, any funds in transit and the network.
Holding shares does not eliminate trading losses, contract bugs, compromised
roles or infrastructure risks. There is no blanket guarantee of immediate
withdrawal, immunity to liquidation or impossibility of loss.

The capital circuit and engine integration are still being qualified. Deployment
alone is not approval for public deposits. Verify the deployed code, roles,
permissions, upgrade controls and accounting before relying on an integration.

The replacement mainnet vault's creation receipt, deployed code and initial
roles have been verified. It was created paused. Native permissions and the
complete capital circuit are separate qualification steps; an EVM receipt
does not establish the completion of a HyperCore transfer.

## Evidence and personal information

Published SHA-256 digests establish integrity relative to the referenced
material. They do not establish legal compliance, economic performance or the
absence of vulnerabilities. Research archives remain dated evidence.

Fiscal estimates require the correct wallet, jurisdiction and reporting year.
A generated PDF is not a certified filing. NattChat does not automatically read
the user's fiscal report.

## Vulnerability reporting

- Security contact: [contact@hypernatt.com](mailto:contact@hypernatt.com).
- PGP key: available upon request.
- Scope: smart contract interactions, API endpoints and web infrastructure.
- Existing disclosure policy: we acknowledge receipts within 24 hours and do
  not pursue legal action against security researchers acting in good faith.

Describe the affected component and a minimal reproduction. Avoid including
private keys, recovery words or another user's private data in your report.
