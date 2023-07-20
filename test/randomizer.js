const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("minimal", function () {
    
    let randomizerDeployed;
    provider = ethers.provider;

    before(async function(){

    [owner, add1, add2] = await ethers.getSigners();
    const randomizerContract = await ethers.getContractFactory("randomizer");
    randomizerDeployed = await randomizerContract.deploy(1);

    })
 
    it("buy card", async function(){
        // for (let i=0; i<522001; i++){
        // await randomizerDeployed.connect(owner).buy();
        // }

        for (let i=0; i<104402; i++){
        
        console.log("transaction no.", i+1)
        const tx = await randomizerDeployed.connect(owner).buy(i)
        const rcpt = await tx.wait()
        // const gasCostForTxn = rcpt.gasUsed.mul(rcpt.effectiveGasPrice)
        // const ethGas = ethers.utils.formatEther(gasCostForTxn)
        console.log('gasCostForTxn:', ethers.utils.formatEther(rcpt.gasUsed))
        console.log("")
        }
    })
});