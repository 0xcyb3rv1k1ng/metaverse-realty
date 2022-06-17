// Brings in the contracts
var MetaverseRealtyNFT = artifacts.require("MetaverseRealtyNFT");
var Marketplace = artifacts.require("Marketplace");

async function logNftLists(marketplace) {
    let listedNfts = await marketplace.getListedNfts.call()
    const accountAddress = '0x59469af4d18f6B602daBc2538e2072d5fE12602a' // from Ganache
    let myNfts = await marketplace.getMyNfts.call({from: accountAddress})
    let myListedNfts = await marketplace.getMyListedNfts.call({from: accountAddress})
    console.log(`listedNfts: ${listedNfts.length}`)
    console.log(`myNfts: ${myNfts.length}`)
    console.log(`myListedNfts ${myListedNfts.length}\n`)
}

const main = async (cb) => {
  try {
    const metaverseRealty = await MetaverseRealtyNFT.deployed()
    const marketplace = await Marketplace.deployed()

    // Call the different functions
    console.log('MINT AND LIST 3 NFTs')
    let listingFee = await marketplace.getListingFee()
    listingFee = listingFee.toString()
    let txn1 = await metaverseRealty.mint("URI1")
    let tokenId1 = txn1.logs[2].args[0].toNumber()
    await marketplace.listNft(metaverseRealty.address, tokenId1, 1, {value: listingFee})
    console.log(`Minted and listed ${tokenId1}`)
    let txn2 = await metaverseRealty.mint("URI1")
    let tokenId2 = txn2.logs[2].args[0].toNumber()
    await marketplace.listNft(metaverseRealty.address, tokenId2, 1, {value: listingFee})
    console.log(`Minted and listed ${tokenId2}`)
    let txn3 = await metaverseRealty.mint("URI1")
    let tokenId3 = txn3.logs[2].args[0].toNumber()
    await marketplace.listNft(metaverseRealty.address, tokenId3, 1, {value: listingFee})
    console.log(`Minted and listed ${tokenId3}`)
    await logNftLists(marketplace)

    console.log('BUY 2 NFTs')
    await marketplace.buyNft(metaverseRealty.address, tokenId1, {value: 1})
    await marketplace.buyNft(metaverseRealty.address, tokenId2, {value: 1})
    await logNftLists(marketplace)

    console.log('RESELL 1 NFT')
    await marketplace.resellNft(metaverseRealty.address, tokenId2, 1, {value: listingFee})
    await logNftLists(marketplace)

  } catch(err) {
    console.log('Oops! ', err);
  }
  cb();
}

module.exports = main;