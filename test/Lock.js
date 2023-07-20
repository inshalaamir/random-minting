const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("minimal", function () {
    
    let minimalDeployed;
    provider = ethers.provider;

    before(async function(){

    [owner, add1, add2] = await ethers.getSigners();
    const minimalContract = await ethers.getContractFactory("minimal");
    minimalDeployed = await minimalContract.deploy();

    })
 
  it("add club and player", async function () {
    await minimalDeployed.connect(owner).createPlayer("Cristiano Ronaldo", 1985, 4, 30)
    await minimalDeployed.connect(owner).createClub("Real Madrid", "Spain", "Madrid", 1940)
    console.log("data added")
    await minimalDeployed.connect(owner).mint_nft_card(0, 2022, 3, 1, "hello.jpg", 0, add1.address)
    await minimalDeployed.connect(owner).mint_nft_item("1.5x multiplier item card", 150, add1.address)
    const nft = await minimalDeployed.getCard(0)
    console.log(nft)
    const iem = await minimalDeployed.getItem(1)
    console.log(iem)
    const blnce = await provider.getBalance(owner.address)
    console.log(blnce)
  });
});