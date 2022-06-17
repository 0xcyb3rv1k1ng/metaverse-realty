
var MetaverseRealtyNFT = artifacts.require("MetaverseRealtyNFT");
var Marketplace = artifacts.require("Marketplace");

// Must deploy Marketplace contract before NFT contract
// Otherwise received error
// It must be deployed first to pass it into the MetaverseRealtyNFT contract
module.exports = async function(deployer) {
  await deployer.deploy(Marketplace);
  const marketplace = await Marketplace.deployed();
  await deployer.deploy(MetaverseRealtyNFT, marketplace.address);
}
