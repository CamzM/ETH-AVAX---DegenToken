# ETH-AVAX---DegenToken

Simple overview of use/purpose.

## Description

Instructions:
Your task is to create a ERC20 token and deploy it on the Avalanche network for Degen Gaming. The smart contract should have the following functionality:

1. Minting new tokens: The platform should be able to create new tokens and distribute them to players as rewards. Only the owner can mint tokens.
2. Transferring tokens: Players should be able to transfer their tokens to others.
3. Redeeming tokens: Players should be able to redeem their tokens for items in the in-game store.
4. Checking token balance: Players should be able to check their token balance at any time.
5. Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.

## Getting Started

### Executing program

1. Open a command prompt and run this command: $ mkdir myproject to create a named "myproject" in the location. ("myproject" can be chaned to any project name)
2. Change the directory with this command: $ cd myproject
3. Run this command to create a new package.json: $$ npm init -y
4. Install the hardhat development environment: $ npm install --save-dev hardhat
5. To run the hardhat, run this command: $ npx hardhat 
  5.1 select the "Create a Javascript project" in order to generate a hardhat.config.js
6. To install the toolbox plugin of hardhat: $ npm i --save-dev @nomicfoundation/hardhat-toolbox
7. Install the OpenZeppelin Contracts library as a dependency by executing the following command: npm install @openzeppelin/contracts
8. Create a token smartContact using OpenZeppelin by creating a solidity file in the contracts folder in the myproject
9. Edit the hardhat.config.js in the myproject

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

10. Edit the deploy.js (in the scripts folder), also in the avalanche-project

### deploy.js
```
const hre = require("hardhat");
async function main() {

  const contract = await hre.ethers.deployContract(contractName);
  await contract.waitForDeployment();
  console.log(`Contract Deployed to address ${await contract.getAddress()}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

11. Create your own API key from the Snowtrace, then add it to your hardhat.config.js

### hardhat.config.js
```
module.exports = {
  // ...rest of the config...
  etherscan: {
    apiKey: "INSERT YOUR API KEY HERE",
  },
};
```

12. Set up a Avalanche network in your Metamask by adding a new network with these details 
(Network Name: Avalanche Fuji C-Chain 
New RPC URL: https://api.avax-test.network/ext/bc/C/rpc 
ChainID: 43113 
Symbol: AVAX 
Explorer: https://testnet.snowtrace.io/)
13. Go to the Avalanche Testnet Faucet website, and request 2 AVAX to your wallet account in order for the contract to run.
14. Run the script with the fuji network with this command in the terminal: $ npx hardhat run scripts/deploy.js --network fuji
15. Verify the smart contract address you deployed by this command: $ npx hardhat verify (INSERT CONTRACT ADDRESS) --network fuji
16. Then go to the remix ethereum website, and upload the DegenToken.sol (or the smartcontract.sol you've made)
17. In the deployment tab, there is an "At Address" tab there and copy the contract address there as well.
18. You can now do the functions!