const { ethers } = require("hardhat");

async function main () {
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const Randomizer = await ethers.getContractFactory('randomizer');
    const randomizer = await Randomizer.attach(address);

    const tx1 = await randomizer.setPlayers(0,200);
    const rcpt1 = tx1.wait()
    console.log("Set players from 0 to 199");

    const tx2 = await randomizer.setPlayers(200,400);
    const rcpt2 = tx2.wait()
    console.log("Set players from 200 to 399");

    const tx3 = await randomizer.setPlayers(400,450);
    const rcpt3 = tx3.wait()
    console.log("Set players from 400 to 449")

    }
  
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });