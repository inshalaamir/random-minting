const hre = require("hardhat");

async function main() {

  const minimal = await hre.ethers.getContractFactory("minimal");
  const minimalDeployed = await minimal.deploy();

  await minimalDeployed.deployed();

  console.log("contract was deployed")

  await minimalDeployed.createPlayer('Malte Semisch',1994, 2, 1)
  await minimalDeployed.createPlayer('Niklas Landin',1995, 9, 1)
  await minimalDeployed.createPlayer('Casper Mortensen',1996, 9, 1)
  await minimalDeployed.createPlayer('Juri Knorr',1996, 9, 1)
  await minimalDeployed.createPlayer('Emil Jakobsen',1996, 9, 1)
  await minimalDeployed.createPlayer('Kay Smits',1996, 9, 1)
  await minimalDeployed.createPlayer('Christoph Steinert',1996, 9, 1)
  await minimalDeployed.createPlayer('Johannes Golla',1996, 9, 1)
  await minimalDeployed.createPlayer('Fredrik Ladefoged',1996, 9, 1)
  await minimalDeployed.createPlayer('Gisli Thorgeir Kristjansson',1996, 9, 1)
  await minimalDeployed.createPlayer('Julian Koster',1996, 9, 1) 
  await minimalDeployed.createPlayer('Philipp Ahouansou',1996, 9, 1)
  await minimalDeployed.createPlayer('Samuel Zehnder',1996, 9, 1)

  await minimalDeployed.createClub("HC Berlin", "Germany", "Berlin", 1980)

  await minimalDeployed.mint_nft_card(0, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/240_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(1, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/377_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(2, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/254_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(3, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/11936_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(4, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/580_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(5, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/535_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(6, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/264_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(7, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/320_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(8, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/27607_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(9, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/9881_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(10, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/27607_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(11, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/11703_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  await minimalDeployed.mint_nft_card(12, 2022, 3, 1, "https://www.liquimoly-hbl.de/?proxy=redaktion/images/downloads/portraitbilder/27643_Portraitbild.png", 0, "0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d")
  
  await minimalDeployed.mint_nft_item("1.5x multiplier player item", 150, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
  await minimalDeployed.mint_nft_item("1.25x multiplier player item", 125, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
  await minimalDeployed.mint_nft_item("1.75x multiplier player item", 175, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
  await minimalDeployed.mint_nft_item("2x multiplier player item", 200, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
  await minimalDeployed.mint_nft_item("3x multiplier player item", 300, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
  await minimalDeployed.mint_nft_item("1.1x multiplier player item", 110, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')
  await minimalDeployed.mint_nft_item("1.3x multiplier player item", 130, '0x3426D9d2fC2A654Ed2f703fc40da59F2b98B203d')

  console.log("Nft minted")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});