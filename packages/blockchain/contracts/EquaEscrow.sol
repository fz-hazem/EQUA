// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title EquaEscrow
 * @notice Contrat d'entiercement pour sécuriser les factures freelances et commerçants.
 */
contract EquaEscrow is Ownable {
    IERC20 public immutable equaToken;

    enum EscrowStatus { CREATED, FUNDED, RELEASED, REFUNDED }

    struct InvoiceEscrow {
        string invoiceId;
        address payable issuer;
        address payer;
        uint256 amount;
        EscrowStatus status;
    }

    mapping(string => InvoiceEscrow) public escrows;

    event EscrowCreated(string indexed invoiceId, address indexed issuer, address indexed payer, uint256 amount);
    event EscrowFunded(string indexed invoiceId);
    event EscrowReleased(string indexed invoiceId);
    event EscrowRefunded(string indexed invoiceId);

    constructor(address _equaToken, address initialOwner) Ownable(initialOwner) {
        equaToken = IERC20(_equaToken);
    }

    function createEscrow(string calldata invoiceId, address payer, uint256 amount) external {
        require(escrows[invoiceId].amount == 0, "Escrow existant.");
        escrows[invoiceId] = InvoiceEscrow({
            invoiceId: invoiceId,
            issuer: payable(msg.sender),
            payer: payer,
            amount: amount,
            status: EscrowStatus.CREATED
        });
        emit EscrowCreated(invoiceId, msg.sender, payer, amount);
    }

    function fundEscrow(string calldata invoiceId) external {
        InvoiceEscrow storage escrow = escrows[invoiceId];
        require(escrow.status == EscrowStatus.CREATED, "Statut invalide.");
        require(msg.sender == escrow.payer, "Seul le payeur peut alimenter.");
        
        escrow.status = EscrowStatus.FUNDED;
        require(equaToken.transferFrom(msg.sender, address(this), escrow.amount), "Echec du transfert");
        emit EscrowFunded(invoiceId);
    }

    function releaseEscrow(string calldata invoiceId) external {
        InvoiceEscrow storage escrow = escrows[invoiceId];
        require(escrow.status == EscrowStatus.FUNDED, "Non alimente.");
        require(msg.sender == escrow.payer || msg.sender == owner(), "Non autorise.");

        escrow.status = EscrowStatus.RELEASED;
        require(equaToken.transfer(escrow.issuer, escrow.amount), "Echec de libération");
        emit EscrowReleased(invoiceId);
    }
}
