// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import the ERC721 standard to create a valid NFT
// This allows storage of tokenURIs on chain in storage. Allows metadata upload to IPFS off-chain
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// Tracks total number of NFTs. Creates a unique token id for each NFT
import "@openzeppelin/contracts/utils/Counters.sol";

contract MetaverseRealtyNFT is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds; // will increment this to get the token id of each nft
  address marketplaceContract; // address of the Marketplace.sol contract
  // This event will be emitted each time an NFT is minted. These parameters will be stored in
  // the transaction logs. Will need to grab tokenId.
  event NFTMinted(uint256); 

  constructor(address _marketplaceContract) ERC721("Metaverse Realty Digital Properties", "MRDP") {
    marketplaceContract = _marketplaceContract;
  }

  // This function mints NFTs. Token IDs are incremented.
  function mint(string memory _tokenURI) public {
    _tokenIds.increment();
    uint256 newTokenId = _tokenIds.current(); // grabs the tokenId
    _safeMint(msg.sender, newTokenId); // mints the token
    _setTokenURI(newTokenId, _tokenURI);
    setApprovalForAll(marketplaceContract, true); // requires approval for transfer of ownership between addresses
    emit NFTMinted(newTokenId); // allows access to info
  }
}
