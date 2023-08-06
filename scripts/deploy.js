const hre = require("hardhat");

async function main() {

  const points = await hre.ethers.deployContract("DegenToken");

  await points.waitForDeployment();

  console.log(
    `Contract Deployed to address ${await points.getAddress()}`
  );
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
