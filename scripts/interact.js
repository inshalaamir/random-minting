
const hre = require("hardhat");
const contract = require("../artifacts/contracts/minimal.sol/minimal.json");

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const alchemyProvider = new hre.ethers.providers.AlchemyProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const minimalContract = new hre.ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
const providerMinimal = new hre.ethers.Contract(CONTRACT_ADDRESS, contract.abi, alchemyProvider)

async function main() {
    // const message = await minimalContract._setTokenURI(0,'https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/240_Portraitbild.png')
    // console.log("The message is: " + message);

    const message2 = await providerMinimal.getCard(0)
    console.log(message2)

    // console.log("Adding player..");
    // const tx = await minimalContract.mint_nft_item("1.5x multiplier player item", 150, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx.wait()
    // console.log("Adding player 2..");
    // const tx1 = await minimalContract.mint_nft_item("1.25x multiplier player item", 125, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx1.wait()
    // console.log("Adding player 3..");
    // const tx2 = await minimalContract.mint_nft_item("1.75x multiplier player item", 175, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx2.wait()
    // console.log("Adding player 4..");
    // const tx3 = await minimalContract.mint_nft_item("2x multiplier player item", 200, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx3.wait()
    // console.log("Adding player 5..");
    // const tx4 = await minimalContract.mint_nft_item("3x multiplier player item", 300, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx4.wait()
    // console.log("Adding player 6..");
    // const tx5= await minimalContract.mint_nft_item("1.1x multiplier player item", 110, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx5.wait()
    // console.log("Adding player 7..");
    // const tx6 = await minimalContract.mint_nft_item("1.3x multiplier player item", 130, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
    // await tx6.wait()
    
    // const newMessage = await helloWorldContract.message();
    // console.log("The new message is: " + newMessage);
}

main();