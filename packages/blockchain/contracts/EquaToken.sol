// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

/**
 * @title EquaToken (EQD)
 * @notice Jeton stable pour l'écosystème EQUA, pausable pour conformité BCT.
 */
contract EquaToken is ERC20, Ownable, Pausable {
    
    event ReservesAudited(uint256 totalReserveTND, uint256 timestamp);

    constructor(address initialOwner) 
        ERC20("EQUA Token", "EQD") 
        Ownable(initialOwner) 
    {}

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }

    function auditReserves(uint256 totalReserveTND) external onlyOwner {
        emit ReservesAudited(totalReserveTND, block.timestamp);
    }

    function _update(address from, address to, uint256 value) internal override whenNotPaused {
        super._update(from, to, value);
    }
}
