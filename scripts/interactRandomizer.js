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
    console.log("Set players from 200 to 400");

    for (let i=0; i<4176000; i++){
    const tx = await randomizer.buy(i)
    const rcpt = await tx.wait()
    
    // const event = rcpt.events.find(event => event.event === 'done');
    // console.log(event);
    // const [player, division, serial] = event.args;
    // console.log(player.constructor);
    
    console.log('gasCostForTxn:', ethers.utils.formatEther(rcpt.gasUsed))
    console.log("")
    }
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });