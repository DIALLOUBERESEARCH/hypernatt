# HyperNatt — vault, swaps and community

<!-- PUBLICATION:BEGIN -->
## Current engineering activity

Latest committed activity: **2026-09-29T05:31:59Z**.
[Activity and research records](docs/publication/ACTIVITY.md) | [Proof of Process](https://hypernatt.com/audit)

This public documentation is generated from selected committed evidence.
The proprietary implementation remains private. Activity is not proof of profitability.
Current paper deployment and publication health are shown on Proof of Process.
<!-- PUBLICATION:END -->


![HyperNatt](https://hypernatt.com/icons/hypernatt-logo.svg)

[Application](https://hypernatt.com/app) · [Vault](https://hypernatt.com/vault) · [Documentation](https://hypernatt.com/docs) · [Proof of Process](https://hypernatt.com/audit)

HyperNatt brings together a vault interface, NattSwap, NattChat, community
messaging and NattShield. This public repository contains product documentation
and verification material. The execution engine and application implementation
remain private.

## Current rollout — 29 September 2026

The vault is being migrated to smart contracts on **HyperEVM (chain 999)** with
execution and accounting on **HyperCore**. The historical native vault is not
the destination for this new deposit flow. Use the current vault page to inspect
the network, asset, contract and transaction before signing.

The new capital transfer, accounting and withdrawal circuit is still undergoing
qualification. A deployed contract or visible deposit button does not establish
that the complete system is ready for public deposits. Engine integration is
a separate delivery milestone.

Closed beta is capped at **100 participants**: one founder master key and
99 invitations redeemable once. An invitation controls admission; it does not
grant access to another user's funds. The public counter is intended to count
qualified active depositors, not issued keys or wallet connections.

## NATT and fees

- NATT has a maximum supply of **21 million**, with **18 decimals** and a halving
  schedule. Emission and allocation limits are distinct from the token's price.
- **Vault trading rewards in NATT remain disabled until further notice.** The
  beta reward pathway is swap activity. Settlement verification, reward
  entitlement and a successful claim are separate stages; a swap confirmation
  alone is not proof that NATT has been received.
- Staking uses NATT and a separately funded reward pool. Availability and any
  displayed yield must follow the deployed contracts and actual funding.
- The approved vault commission is **20% of eligible winning-trade profit**, or
  **18% with an accepted referral**. This is not a deduction from deposited capital.
- The approved Hyperliquid builder fee is **0.002%** of applicable trading
  notional. It is separate from the profit commission and swap fees.
- There is **no automatic buyback or burn promise**. Voluntary burning is not a
  source of yield and does not replace the emission cap.

## Using the application

NattSwap uses LI.FI routes. Supported assets, networks, fees, approvals and
minimum received amounts depend on the route presented by the application.
Cross-chain execution may require several transactions and take time to settle.

The guided mode explains wallet setup, deposits, withdrawals, swaps, NATT,
community features and spending routes. Never enter a wallet recovery phrase
into HyperNatt, a chat or a support form.

NattShield provides fiscal assistance. Country rules and annual reporting are
being aligned with the new infrastructure. Its estimates and PDFs are not tax
certifications or proof of compliance. NattChat does not automatically receive
the user's NattShield report.

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
