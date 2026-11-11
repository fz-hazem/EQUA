import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Déploiement avec le compte :", deployer.address);

  const EquaToken = await ethers.getContractFactory("EquaToken");
  const token = await EquaToken.deploy(deployer.address);
  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  console.log("EquaToken déployé à l'adresse :", tokenAddress);

  const EquaEscrow = await ethers.getContractFactory("EquaEscrow");
  const escrow = await EquaEscrow.deploy(tokenAddress, deployer.address);
  await escrow.waitForDeployment();

  console.log("EquaEscrow déployé à l'adresse :", await escrow.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
