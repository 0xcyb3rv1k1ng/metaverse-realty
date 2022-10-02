Metaverse Realty NFT Marketplace
<p>
The following steps will walk through how to setup the project. <p>
SETUP <p>
 1)	Open Ganache <p>
    A)	Click Create New Project and name the project. <p>
    B)	Confirm it is working by viewing the addresses. <p>
2)	Open VS Code <p>
   A)	Switch directories to the correct directory. In this example it would be: 'cd mvr'. From mvr folder run: <p>
      'truffle migrate --network development' <p>
      This will deploy the smart contract to Truffle. <p>
   B)	Open a new terminal <p>
      Switch directories by using cd mvr and cd client <p>
   C)	Deploy the front end <p>
   D)	From the terminal, run: npm run dev [from client folder] <p>
3)	Go to localhost:3000 <p>
   A)	Note: that it will be blank the first time loading in since no NFTs have been listed. <p>
   B) NFTs can show if there have been NFTs previously uploaded and it is on the same network. <p>
<p>
ACTIONS <p>
The following steps will show how to use the dApp once it is uploaded. <p>
<p>
SELL NFT <p>
 1)	Click ‘Sell a new NFT’ <p>
    A)	Enter Asset Name (e.g. Park Place) <p>
    B)	Enter Asset Description <p>
       1.	Sample Description: <p>
          Small (S) parcel in the Purple Property District has a size of 1.8 m² and is located at X = 748 and Y = 536. <p>
    C)	Enter price in ETH (e.g. 0.0005) <p>
    D)	Select Image from file. <p>
    E)	Click ‘Mint and list NFT’ <p>
       1.	Wait for MetaMask to pop up.  <p>
       2.	Scroll down and click ‘Confirm’. <p>
       3.	Wait for it to go through and receive confirmation. <p>
       4.	Scroll down and click ‘Confirm’ <p>
       5.	Wait for website to reload with newly listed NFT. <p>
<p>
BUY NFT <p>
1)	Click ‘Buy’ to purchase an NFT. <p>
2)	Wait for MetaMask to pop up. <p>
A)	Scroll down and click ‘Confirm’ <p>
3)	Wait for confirmation of the transaction. <p>
4)	Click ‘My NFTs’ to view the purchased NFT. <p>
<p>
RESELL NFT <p>
1)	Click ‘List’. <p>
2)	Enter price in ETH. <p>
3)	Click ‘List NFT’ <p>
4)	MetaMask should pop up <p>
5)	Scroll down and click ‘Confirm’ <p>
6)	Wait for successful transaction <p>
7)	Website should reload to the homepage. <p>
<p>
MY LISTED NFTs <p>
1)	Click ‘My Listed NFTs’ to show it works. <p>
2)	All NFTs should be the same as the home page since I listed them all. <p>
<p>
Below is the chart used to create the NFTs. This is just meant for example purposes and does not reflect an accurate or the realistic value of ETH in relation to the USD. <p>
<p>
| Parcel # | Name                    | Property District | Location  | Size   | Parcel Size | Cost    | ETH      | X-Coordinate | Y-Coordinate |    
| -------- | ----------------------- | ----------------- | --------- | ------ | ----------- | ------  | -------- | ------------ | ------------ |
| 1        | Interstate              | None              | 748, 751  | Medium | 2.8m^2      | $5,000  | 0.05     | 748          | 751          |
| 2        | Mediterranean Avenue    | Purple            | 663, 751  | Small  | 1.8m^2      | $50     | 0.0005   | 664          | 751          |
| 3        | Purple Community Center | Purple            | 600, 751  | Small  | 1.8m^2      | $1,000  | 0.01     | 600          | 751          |
| 4        | Baltic Avenue           | Purple            | 533, 751  | Small  | 1.8m^2      | $50     | 0.0005   | 533          | 751          |
| 5        | Tax Street              | Purple            | 467, 751  | Small  | 1.8m^2      | $200    | 0.002    | 467          | 751          |
| 6        | Reading Railroad        | Light Blue        | 401, 751  | Small  | 1.8m^2      | 200     | 0.002    | 401          | 751          |
| 7        | Oriental Avenue         | Light Blue        | 335, 751  | Small  | 1.8m^2      | $100    | 0.001    | 335          | 751          |
| 8        | Chance Street           | Light Blue        | 269, 751  | Small  | 1.8m^2      | $100    | 0.001    | 269          | 751          |
| 9        | Vermont Avenue          | Light Blue        | 203, 751  | Small  | 1.8m^2      | $100    | 0.001    | 203          | 751          |
| 10       | Conneticut Avenue       | Light Blue        | 139, 751  | Small  | 1.8m^2      | $120    | 0.0012   | 139          | 751          |
| 11       | Jail                    | Light Pink        | 53, 751   | Small  | 2.8m^2      | $130    | 0.0013   | 53           | 751          |
| 12       | St. Charles Place       | Light Pink        | 53, 667   | Small  | 1.8m^2      | $140    | 0.0014   | 53           | 667          |
| 13       | Electric Avenue         | Light Pink        | 53, 601   | Small  | 1.8m^2      | $150    | 0.0015   | 53           | 601          |
| 14       | States Avenue           | Light Pink        | 53, 536   | Small  | 1.8m^2      | $140    | 0.0014   | 53           | 536          |
| 15       | Virginia Avenue         | Light Pink        | 53, 468   | Small  | 1.8m^2      | $160    | 0.0016   | 53           | 468          |
| 16       | Pennsylvania Railroad   | Orange            | 53, 404   | Small  | 1.8m^2      | $200    | 0.002    | 53           | 404          |
| 17       | St. James Avenue        | Orange            | 53, 340   | Small  | 1.8m^2      | $180    | 0.0018   | 53           | 340          |
| 18       | Orange Community Center | Orange            | 53, 274   | Small  | 1.8m^2      | $1,000  | 0.01     | 53           | 274          |
| 19       | Tennessee Avenue        | Orange            | 53, 206   | Small  | 1.8m^2      | $180    | 0.0018   | 53           | 206          |
| 20       | New York Avenue         | Orange            | 53, 142   | Small  | 1.8m^2      | $200    | 0.002    | 53           | 142          |
| 21       | Parking Lot             | Red               | 53, 55    | Medium | 2.8m^2      | $1,000  | 0.01     | 53           | 55           |
| 22       | Kentucky Avenue         | Red               | 138, 55   | Small  | 1.8m^2      | $220    | 0.0022   | 138          | 55           |
| 23       | Chance Avenue           | Red               | 204, 55   | Small  | 1.8m^2      | $220    | 0.0022   | 204          | 55           |
| 24       | Indiana Avenue          | Red               | 270, 55   | Small  | 1.8m^2      | $220    | 0.0022   | 270          | 55           |
| 25       | Illinois Avenue         | Red               | 334, 55   | Small  | 1.8m^2      | $200    | 0.002    | 334          | 55           |
| 26       | B&O Railroad            | Yellow            | 402, 55   | Small  | 1.8m^2      | $200    | 0.002    | 402          | 55           |
| 27       | Atlantic Avenue         | Yellow            | 466, 55   | Small  | 1.8m^2      | $260    | 0.0026   | 466          | 55           |
| 28       | Ventnor Avenue          | Yellow            | 532, 55   | Small  | 1.8m^2      | $260    | 0.0026   | 532          | 55           |
| 29       | Waterworks Avenue       | Yellow            | 598, 55   | Small  | 1.8m^2      | $270    | 0.0027   | 598          | 55           |
| 30       | Marvin Gardens          | Yellow            | 664, 55   | Small  | 1.8m^2      | $280    | 0.0028   | 664          | 55           |
| 31       | Police Station          | Green             | 748, 55   | Medium | 2.8m^2      | $1,000  | 0.01     | 748          | 55           |
| 32       | Pacific Avenue          | Green             | 748, 142  | Small  | 1.8m^2      | $300    | 0.003    | 748          | 142          |
| 33       | North Carolina Avenue   | Green             | 748, 206  | Small  | 1.8m^2      | $300    | 0.003    | 748          | 206          |
| 34       | Green Community Center  | Green             | 748, 274  | Small  | 1.8m^2      | $1,000  | 0.01     | 748          | 274          |
| 35       | Pennsylvania Avenue     | Green             | 748, 340  | Small  | 1.8m^2      | $320    | 0.0032   | 748          | 340          |
| 36       | Short Line Railroad     | Green             | 748, 404  | Small  | 1.8m^2      | $200    | 0.002    | 748          | 404          |
| 37       | Chance Place            | Blue              | 748, 468  | Small  | 1.8m^2      | $330    | 0.0033   | 748          | 468          |
| 38       | Park Place              | Blue              | 748, 536  | Small  | 1.8m^2      | $350    | 0.0035   | 748          | 536          |
| 39       | Luxury Avenue           | Blue              | 748, 601  | Small  | 1.8m^2      | $380    | 0.0038   | 748          | 601          |
| 40       | Boardwalk               | Blue              | 748, 667  | Small  | 1.8m^2      | $400    | 0.004    | 748          | 667          |
| 41       | City Park               | None              | 219, 582  | Large  | 14.4m^2     | $5,000  | 0.05     | 748          | 751          |
| 42       | State Park              | None              | 252, 268  | Large  | 26.6m^2     | $7,500  | 0.075    | 748          | 751          |
| 43       | National Park           | None              | 528, 430  | Large  | 52.0m^2     | $10,000 | 0.1      | 748          | 751          |










