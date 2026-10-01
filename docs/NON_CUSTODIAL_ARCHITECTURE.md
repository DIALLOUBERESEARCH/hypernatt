# Vault shares, permissions and redemption

The new vault architecture uses HyperEVM contracts with HyperCore integration.
The complete capital and withdrawal circuit remains under qualification.
This document supersedes the former native-vault description for new deposits.
New deposits are not yet open to participation. Availability in the application
is distinct from contract permissions and does not certify an onchain admission
control. Existing withdrawals and transaction reconciliation remain available.

## Verified deployment — 1 October 2026

The replacement contracts were created on **HyperEVM mainnet, chain 999**, in
[transaction 0x6fb1ce4dab76d82e16aee71763518c22b2624f77ce5bab263cc5abc461f0eed5](https://hyperevmscan.io/tx/0x6fb1ce4dab76d82e16aee71763518c22b2624f77ce5bab263cc5abc461f0eed5),
at finalized block **47397364**. Verification compared the complete creation
input, receipt, deployed code and initial roles. The identities below belong
to this deployment; earlier addresses remain historical records.

- Vault: `0xc1f30cebe88d3eb79f087838bddaa980e05cc926`.
- Control: `0x1f9a7fd5d9254696ea66d164f8bae20d8fe4682f`.
- Reader: `0x512929a833fb7d044545b8cc20e487b31c9a2ae0`.
- Linked route library: `0x951888fae78f6845d867aea304ca684a65ecf815`.

Keccak-256 hashes of the deployed runtime bytes, including the configured
immutable values, are:

- Vault: `0x6fb7c7a6d817c2dfa1b2a6a61cb6c63457ccd42686c3431a252ffe4c74a80195`.
- Control: `0x5e4f2814719d06f24be23a80210ff8f9650972b63172049227ef98a48d3fc975`.
- Reader: `0x0fe4dffee76756582d20d9170055d6974e5572c38ef7db30cddbd9f0f763c139`.
- Route library: `0x6460129351994818eb4575f85c107bd143ad7b0add4813d0ee50385e9db6b362`.

The vault was created paused, with no shares or capital. Native permissions,
accounting service activation and engine integration are separate gates. A
successful EVM receipt is not evidence of a completed HyperCore transfer.
These deployment checks do not constitute an independent security audit or
approval for deposits. Read current contract state before any later operation.

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
