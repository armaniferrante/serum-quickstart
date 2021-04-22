# Serum Quickstart

Scaffolding to setup an Anchor program with a liquid Serum orderbook running locally.

If you're looking to build an on-chain program that composes with Serum but don't
know how to get everything up and running, i.e. a localnet with the DEX deployed and
an orderbook listed, this repo hopes to help.

## Setup

### Clone

Clone the repo and all of its submodules

```
git clone --recursive https://github.com/armaniferrante/serum-quickstart.git
```

### Setup Anchor

Setup Anchor with the instructions [here](https://project-serum.github.io/anchor/getting-started/installation.html).

### Set wallet directory

By default, you should have your solana keypair setup in the default path, i.e. `~/.config/solana/id.json`. If you are using a custom path, make sure to update the `Anchor.toml` to use your custom path.

### Build the dex

```
cd deps/serum-dex/dex/ && cargo build-bpf && cd ../../../
```

### Install Test Dependencies

```
yarn
```

### Run the test

```
anchor test
```

## Non Anchor Programs

If you're not using Anchor, you can just snag the [script](https://github.com/armaniferrante/serum-quickstart/blob/master/tests/utils/index.js) used by the tests to initialize the orderbook.
