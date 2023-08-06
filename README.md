# Project Title

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

1. Open a command prompt and run this command: $ mkdir avalanche-project to create a named "avalanche-project" in the location.
2. Change the directory with this command: $ cd avalanche-project
3. Run this command to create a new package.json: $$ npm init -y
4. Install the hardhat development environment: $ npm install --save-dev hardhat
5. To run the hardhat, run this command: $ npx hardhat 5.1 select the create a javascript project in order to generate a hardhat.config.js
6. To install the toolbox plugin of hardhat: $ npm i --save-dev @nomicfoundation/hardhat-toolbox
7. Install the OpenZeppelin Contracts library as a dependency by executing the following command: npm install @openzeppelin/contracts
8. Edit your hardhat.config.js

### hardhat.config.js

```
require("@nomicfoundation/hardhat-toolbox");
const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;
if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined,
      forking: forkingData
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        // INSERT THE METAMASK PRIVATE KEY HERE 
      ]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [
        // INSERT THE METAMASK PRIVATE KEY HERE
      ]
    }
  }
}
```

9. Edit the deploy.js (in the scripts folder)

### deploy.js
```
const hre = require("hardhat");
async function main() {
	
  const contractName == "CONTRACT_NAME HERE" 
  const contract = await hre.ethers.deployContract(contractName);
  await contract.waitForDeployment();
  console.log(`Contract Deployed to address ${await contract.getAddress()}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

10. Create your own API key from the Snowtrace, then add it to your hardhat.config.js

### hardhat.config.js
```
module.exports = {
  // ...rest of the config...
  etherscan: {
    apiKey: "INSERT YOUR API KEY HERE",
  },
};
```

11. Set up a Avalanche network in your Metamask by adding a new network with these details (Network Name: Avalanche Fuji C-Chain New RPC URL: https://api.avax-test.network/ext/bc/C/rpc ChainID: 43113 Symbol: AVAX Explorer: https://testnet.snowtrace.io/)
12. Go to the Avalanche Testnet Faucet website, and request 2 AVAX to your wallet account in order for the contract to run.
13. Run the script with the fuji network with this command: $ npx hardhat run scripts/deploy.js --network fuji
14. Verify the smart contract address you deployed by this command: $ npx hardhat verify (INSERT CONTRACT ADDRESS) --network fuji
15. Then go to the remix ethereum website, and copy the Degen.sol
16. In the deployment tab, there is an "At Address" tab there and copy the contract address there as well.
17. You can now do the functions!