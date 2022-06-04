
var MetaverseRealtyNFT = artifacts.require("MetaverseRealtyNFT");
var Marketplace = artifacts.require("Marketplace");

// Must deploy Marketplace contract before NFT contract
module.exports = async function(deployer) {
  await deployer.deploy(Marketplace);
  const marketplace = await Marketplace.deployed();
  await deployer.deploy(MetaverseRealtyNFT, marketplace.address);
}
