# HyperNatt architecture

Updated 1 October 2026. The architecture below distinguishes application
services from the vault capital circuit, which is still being qualified.

## Application boundaries

The web application and PWA provide the dashboard, vault interface, guided mode
and wallet connection. Wallet signatures remain explicit user actions.

Authentication and beta admission, vault accounting, swaps and rewards,
community messaging, NattChat and fiscal reporting have separate responsibilities.
The frontend consumes their interfaces; it is not the authority that decides
whether funds were received or a reward was earned.

NattSwap requests LI.FI routes and follows transaction settlement. The network
and asset pair determine the route; one quote does not imply every chain or
token is supported. A cross-chain source transaction is not by itself proof of
destination settlement or entitlement to NATT.

NattChat and human messaging are distinct services. A private fiscal report
is not automatically included in the assistant's account context.

## HyperEVM and HyperCore

HyperEVM is the EVM environment on chain 999. The vault contracts and share
token interactions belong there. HyperCore is the exchange and native accounting
environment. Moving assets between them and valuing open positions requires
explicit reconciliation; a contract's EVM token balance alone is not its complete
trading net asset value.

The replacement vault, control and reader contracts are deployed on mainnet;
their creation receipt, exact deployed code and initial roles were verified.
The application now identifies that replacement vault. The initial state is
paused, with no shares or capital. Native permissions, the accounting worker
and engine activation remain separate gates.

The new circuit must account for deposits, shares, realized and unrealized
results, liabilities, fees, in-flight transfers and redemption liquidity.
It must prevent repeated settlement or claiming the same entitlement twice.
These are qualification requirements, not a claim that every production path
has already passed them.

The execution engine connects through separately controlled permissions.
The new capital circuit and engine activation are distinct delivery steps.
The old native vault's permission model cannot be copied as a guarantee for
the new contracts.

## Economic and public interfaces

Vault share tokens represent a deposit position; they are distinct from NATT.
All NATT issuance and reward allocation remain disabled during beta, including
vault trades, swaps and RedotPay top-ups. No beta NATT entitlement is reserved
for later distribution. The programme is planned to launch together with the
public vault after explicit parameter approval and activation. A separately
funded staking pool requires its own settlement and claim accounting.

HyperNatt Terminal is a separately maintained public MCP integration. Its
[repository](https://github.com/DIALLOUBE-RESEARCH/hypernatt-terminal) describes
its current tools and payment rails. It does not provide custody of vault funds.

The publication process distributes committed, selected evidence to the public
repositories and Proof of Process. Historical notes stay immutable. Health
indicates delivery status and a matched paper identity, not profitability.
