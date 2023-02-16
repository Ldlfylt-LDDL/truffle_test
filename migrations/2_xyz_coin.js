var MyContract = artifacts.require("XYZCoin");

module.exports = function(deployer) {
    deployer.deploy(MyContract);
};
