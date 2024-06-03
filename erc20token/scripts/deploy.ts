import { ethers } from 'hardhat';

async function main() {
  // const mytoken = await ethers.deployContract('MyToken');
  // mytoken.waitForDeployment();
  // console.log(`mytoken is ${mytoken.target}`);
  //   const ownAddress = mytoken.target;
  // const provider = new ethers.JsonRpcProvider('http:127.0.0.1:8545/');
  const mytoken = await ethers.getContractAt(
    'MyToken',
    '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
  );
  // const singa = new ethers.Wallet(
  //   '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
  //   provider
  // );
  // console.log(`singa is ${singa.address}`);
  const balance = await mytoken.balanceOf(
    '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
    // '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'
  );
  console.log(`balance of is ${balance}`);
  // const allowvalue = ethers.parseUnits('100', 18);
  // const allowtx = await mytoken.approve(
  //   '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  //   allowvalue
  // );
  // await allowtx.wait();
  const value = ethers.parseUnits('10', 18);
  const tx = await mytoken.transfer(
    //'0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    value
  );
  await tx.wait();
  const balance2 = await mytoken.balanceOf(
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
  );
  console.log(`balance of is ${balance2}`);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

// Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
// Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
