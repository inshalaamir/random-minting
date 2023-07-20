const { ethers } = require("hardhat");

async function main() {

    let randomizerDeployed;

    const randomizerContract = await ethers.getContractFactory("randomizer");
    randomizerDeployed = await randomizerContract.deploy(1);
    await randomizerDeployed.deployed();

    console.log("contract was deployed at ", randomizerDeployed.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});