export enum KycStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum TxType {
  MINT = 'MINT',
  BURN = 'BURN',
  TRANSFER_P2P = 'TRANSFER_P2P',
  ESCROW_PAYMENT = 'ESCROW_PAYMENT'
}

export enum TxStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  FAILED = 'FAILED'
}

export interface UserDto {
  id: string;
  email: string;
  walletAddress?: string;
  kycStatus: KycStatus;
  createdAt: string;
}

export interface TransferDto {
  recipientAddress: string;
  amount: string;
}

export interface InvoiceDto {
  id: string;
  issuerId: string;
  payerId?: string;
  amount: string;
  status: string;
  dueDate?: string;
}
