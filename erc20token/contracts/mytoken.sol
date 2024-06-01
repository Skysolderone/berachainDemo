// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.8;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint256 public constant INIT_TOTAL = 1000_000;
    constructor() ERC20("Test", "TS") {
        _mint(msg.sender, INIT_TOTAL);
        console.log("%s", msg.sender);
    }
    // function getBalance() public view returns (uint256) {
    //     return ERC20(address(this)).balanceOf();
    // }
}
