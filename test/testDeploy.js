const MetaverseRealtyNFT = artifacts.require('MetaverseRealtyNFT');
const Marketplace = artifacts.require('Marketplace');

contract('MetaverseRealtyNFT', () => {
  it('should be deployed', async () => {
    const metaverseRealtyNFT = await MetaverseRealtyNFT.deployed();
    assert(metaverseRealtyNFT.address !== '');
  });
  it('is possible to mint NFT', async () => {
    const metaverseRealtyNFT = await MetaverseRealtyNFT.deployed();
    assert(metaverseRealtyNFT.mint !== '');
  });
  // it('should be deployed', async () => {
  //   const marketplace = await Marketplace.deployed();
  //   assert(marketplace.address !== '');
  // });
});

contract('Marketplace', () => {
  it('should be deployed', async () => {
    const marketplace = await Marketplace.deployed();
    assert(marketplace.address !== '');
  });
  it('is possible to see listing fee', async () => {
    const listingFee = await Marketplace.deployed();
    assert(listingFee !== 0);
  });
  
});