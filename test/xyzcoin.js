const XYZCoin = artifacts.require("XYZCoin");

contract("XYZCoin", async accounts => {
    it("should set the token name correctly", async () => {
        let xyzCoinInstance = await XYZCoin.deployed();
        assert.equal(await xyzCoinInstance.name(), "XYZCoin");
    });
})
