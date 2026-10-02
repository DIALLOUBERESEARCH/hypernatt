# HyperNatt — vault, swaps and community

<!-- PUBLICATION:BEGIN -->
## Current engineering activity

Latest committed activity: **2026-10-02T00:09:59Z**.
[Activity and research records](docs/publication/ACTIVITY.md) | [Proof of Process](https://hypernatt.com/audit)

This public documentation is generated from selected committed evidence.
The proprietary implementation remains private. Activity is not proof of profitability.
Current paper deployment and publication health are shown on Proof of Process.
<!-- PUBLICATION:END -->


<p align="center">
  <a href="https://hypernatt.com">
    <img src="https://hypernatt.com/icons/hypernatt-logo.svg" alt="HyperNatt" width="96" height="96" />
  </a>
</p>

<p align="center">
  <a href="https://hypernatt.com/app">Application</a> ·
  <a href="https://hypernatt.com/vault">Vault</a> ·
  <a href="https://hypernatt.com/docs">Documentation</a> ·
  <a href="https://hypernatt.com/audit">Proof of Process</a>
</p>

<p align="center">
  <a href="https://github.com/DIALLOUBERESEARCH/hypernatt/actions/workflows/ci.yml"><img src="https://github.com/DIALLOUBERESEARCH/hypernatt/actions/workflows/ci.yml/badge.svg" alt="CI checks" /></a>
  <a href="https://hypernatt.com/vault"><img src="https://img.shields.io/badge/HyperEVM-Vault-10b981" alt="HyperNatt Vault" /></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Documentation-success" alt="Security documentation" /></a>
  <a href="https://hypernatt.com/audit"><img src="https://img.shields.io/badge/Proof%20of%20Process-SHA--256%20Anchored-8b5cf6" alt="Proof of Process" /></a>
  <a href="https://github.com/DIALLOUBERESEARCH/hypernatt-terminal"><img src="https://img.shields.io/badge/MCP%20Terminal-v2.9.1-purple" alt="MCP Terminal" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-lightgrey" alt="License" /></a>
</p>

HyperNatt brings together a vault interface, NattSwap, NattChat, community
messaging and NattShield. This public repository contains product documentation
and verification material. The execution engine and application implementation
remain private.

## Current rollout — 1 October 2026

The vault is being migrated to smart contracts on **HyperEVM (chain 999)** with
execution and accounting on **HyperCore**. The historical native vault is not
the destination for this new deposit flow. Use the current vault page to inspect
the network, asset, contract and transaction before signing.

The replacement vault and its control and reader contracts are deployed on
mainnet. Their creation receipt, deployed code and initial roles were verified;
the vault was created paused. See the [deployment identities](docs/NON_CUSTODIAL_ARCHITECTURE.md#verified-deployment--1-october-2026).
Deployment verification is separate from activating native permissions and
qualifying the complete deposit and withdrawal circuit.

The new capital transfer, accounting and withdrawal circuit is still undergoing
qualification. A deployed contract or visible deposit button does not establish
that the complete system is ready for public deposits. Engine integration is
a separate delivery milestone. New deposits are not yet open to public
participation; the new capital circuit must be qualified first.

Closed beta is capped at **100 participants**. An assigned key controls admission; it does not
grant access to another user's funds. The key form displays admitted wallets as
0/100 through 100/100. Issued keys and ordinary wallet connections do not count.

The beta admission registry is deployed on HyperEVM, with source and deployed
bytecode verified. Its authentication service is connected and the invitation
cohort is preserved. Play or Deposit opens the key form directly. The wallet
owner confirms activation, then the application recognizes that wallet without
asking for the key again. Admission is separate from depositing funds; the
complete capital circuit is still being qualified. This deployment does not
represent 100 admitted or funded accounts.

## NATT and fees

- NATT has a maximum supply of **21 million**, with **18 decimals** and a halving
  schedule. Emission and allocation limits are distinct from the token's price.
- **Vault trading rewards in NATT remain disabled until further notice.** The
  beta reward pathway is swap activity. Settlement verification, reward
  entitlement and a successful claim are separate stages; a swap confirmation
  alone is not proof that NATT has been received. Swap reward issuance is not
  activated yet; the pathway described here is the intended beta design.
- The NATT staking pool is deployed on HyperEVM and its source has been verified
  against the deployed bytecode. USDC reward funding has not started. A deployed
  pool does not establish an APR or activate swap reward issuance.
- The approved vault commission is **20% of eligible winning-trade profit**, or
  **18% with an accepted referral**. This is not a deduction from deposited capital.
- There is **no automatic buyback or burn promise**. Voluntary burning is not a
  source of yield and does not replace the emission cap.

## Using the application

NattSwap uses LI.FI routes. Supported assets, networks, fees, approvals and
minimum received amounts depend on the route presented by the application.
Cross-chain execution may require several transactions and take time to settle.

The guided mode explains wallet setup, deposits, withdrawals, swaps, NATT,
community features and spending routes. Never enter a wallet recovery phrase
into HyperNatt, a chat or a support form.

NattShield currently provides factual annual records and PDFs. Personal tax
calculations and the complete new activity ledger remain under qualification;
the report does not present an unverified tax amount as money safe to spend.
It is not a tax filing or certification. NattChat does not automatically receive
the user's NattShield report.

The current year opens automatically and earlier reports remain available under
Documents. Using HyperNatt does not require reporting a filing or payment status.
Users remain responsible for filings and payments required by law; changing years
does not erase records or settle tax.

## Read more

- [User guide](docs/USER_GUIDE.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Vault permissions and withdrawals](docs/NON_CUSTODIAL_ARCHITECTURE.md)
- [Security and reporting](SECURITY.md)
- [Independent verification](docs/VERIFICATION_GUIDE.md)
- [HyperNatt Terminal](https://github.com/DIALLOUBERESEARCH/hypernatt-terminal)
- [Public research archive](https://github.com/DIALLOUBERESEARCH/hypernatt-audit-public)

Founded by Hamet Diallo. Documentation and public tooling in this repository
follow [LICENSE](LICENSE); this does not license the private execution engine.
