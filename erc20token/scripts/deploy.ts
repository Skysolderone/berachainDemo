import { ethers } from 'hardhat';

async function main() {
  const mytoken = await ethers.deployContract('MyToken');
  mytoken.waitForDeployment();
  console.log(`mytoken is ${mytoken.target}`);
  //   const ownAddress = mytoken.target;
  const balance = await mytoken.balanceOf(
    '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
  );
  console.log(`balance of is ${balance}`);
  mytoken.transferFrom(
    '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    10
  );
  const balance2 = await mytoken.balanceOf(
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
  );
  console.log(`balance of is ${balance2}`);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
