const anchor = require("@project-serum/anchor");
const utils = require("./utils");

describe("serum-quickstart", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SerumQuickstart;

  it("Sets up a market with resting orders", async () => {
    const {
      marketClient,
      baseMint,
      quoteMint,
      marketMaker,
    } = await utils.initOrderbook({ provider: program.provider });
    let myOrders = await marketClient.loadOrdersForOwner(
      program.provider.connection,
      marketMaker.account.publicKey
    );
    console.log("orders", myOrders);
  });
});
