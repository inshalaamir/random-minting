require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      gas: 30000000,
      chainId: 31337,
      // gasPrice: 0,
      startBlock: 8992958,
      blockGasLimit: 0x1fffffffffffff,
      // allowUnlimitedContractSize: true,
      url: `http://127.0.0.1:8545`,
      mining: {
        auto: false,
        interval: 5000,
      }
    },
    goerli: {
      url: process.env.RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
