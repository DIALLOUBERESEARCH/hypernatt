# Non-Custodial Architecture on Hyperliquid L1

HyperNatt is built on the foundational guarantee that users retain 100% sovereign ownership of their capital at all times.

---

## 1. Role Separation Enforced by Blockchain Consensus

Hyperliquid Layer 1 implements a purpose-built state machine with native sub-account permission separation:

```text
┌────────────────────────────────────────────────────────┐
│               HYPERLIQUID L1 SMART CONTRACT            │
│       Vault Address: 0x04e2eb302fe9ff23a9d1...         │
└───────────────────────────▲────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
     [Depositor Key]                  [Agent Key]
  • 100% Share Ownership         • Trading Orders ONLY
  • Sole Right to Redeem         • Zero Withdrawal Capability
  • Sovereign 1-Click Exit       • Zero Transfer Capability
```

- **Depositor Key**: The user's private key. The only entity cryptographically authorized to redeem shares and withdraw funds.
- **Agent Key (Remora Engine)**: An automated execution daemon granted strictly `order_routing` permissions on the vault sub-account. The Hyperliquid L1 consensus engine mathematically rejects any withdrawal or asset transfer initiated by this key.

---

## 2. Mathematical Proof of Capital Safety

1. **No Central Pool**: Funds are not held in a centralized hot wallet or off-chain database.
2. **No Smart Contract Upgrade Backdoor**: Vault logic is governed by Hyperliquid L1 native consensus, eliminating EVM proxy upgrade vulnerabilities.
3. **Mempool Front-Running Immunity**: Hyperliquid's Tendermint BFT consensus processes orders without a public mempool, mitigating MEV sandwich attacks.
