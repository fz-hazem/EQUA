import { expect } from "chai";
import { ethers } from "hardhat";

describe("EquaToken Contract", function () {
  it("Devrait initialiser le jeton avec le bon nom et symbole", async function () {
    const [owner] = await ethers.getSigners();
    const EquaToken = await ethers.getContractFactory("EquaToken");
    const token = await EquaToken.deploy(owner.address);
    
    expect(await token.name()).to.equal("EQUA Token");
    expect(await token.symbol()).to.equal("EQD");
  });

  it("Seul le propriétaire peut pauser et minter", async function () {
    const [owner, user] = await ethers.getSigners();
    const EquaToken = await ethers.getContractFactory("EquaToken");
    const token = await EquaToken.deploy(owner.address);

    await token.mint(user.address, 1000);
    expect(await token.balanceOf(user.address)).to.equal(1000);

    await token.pause();
    await expect(token.connect(user).transfer(owner.address, 100)).to.be.revertedWithCustomError(token, "EnforcedPause");
  });
});
