# Vault shares, permissions and redemption

The new vault architecture uses HyperEVM contracts with HyperCore integration.
The complete capital and withdrawal circuit remains under qualification.
This document supersedes the former native-vault description for new deposits.
New deposits are not yet open to participation. Availability in the application
is distinct from contract permissions and does not certify an onchain admission
control. Existing withdrawals and transaction reconciliation remain available.

## What a deposit represents

A deposit transfers the specified asset to a contract in exchange for shares.
Shares represent a claim governed by that contract, rather than an asset balance
remaining untouched in the depositor's wallet. Share value depends on the
assets, liabilities, trading results and applicable fees.

The approved commission is 20% of eligible winning-trade profit, or 18% with
an accepted referral. The builder fee of 0.002% of applicable trading notional
is a separate cost. A loss does not create a winning-trade reward. Vault NATT
rewards remain disabled until further notice.

## Permissions to inspect

Verify the exact deployed contract and its administrator, execution, upgrade,
pause, settlement and withdrawal roles. The permission model of the previous
native vault does not establish the permissions of new HyperEVM code.

Separate the wallet owner's authorization from any engine or service identity.
An account able to submit trading orders must not be assumed to have, or to
lack, transfer capabilities without checking the actual execution path.

## Valuation and withdrawals

Accounting must reconcile HyperEVM assets, HyperCore balances and positions,
liabilities and in-flight transfers without double counting. A raw token
balance or an old vault history is not a substitute for that accounting.

Redemption depends on contract rules and available liquidity. Open exposure,
asset transfers and network settlement can affect when assets are available.
Do not interpret a preview as a guarantee that a later transaction will succeed
at the same amount or time. Verify its receipt before treating a withdrawal
as complete.

## Security limits

Self-custody of a wallet does not make contract code, trading or bridges risk-free.
No claim of liquidation immunity, guaranteed capital preservation or absolute
protection from compromise is made. See [the security policy](../SECURITY.md).
