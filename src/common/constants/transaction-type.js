export const TRANSACTION_TYPE = {
  PAYMENT_CREDIT: 'Pagamento recebido',
  PAYMENT_DEBIT: 'Pagamento realizado',
  PAYMENT_REFUNDED: 'Pagamento estornado',
  PAYMENT_PENDING: 'Pagamento agendado',
  TRANSFER_CREDIT: 'Transferência recebida',
  TRANSFER_DEBIT: 'Transferência realizada',
  TRANSFER_REFUNDED: 'Transferência estornada',
  TRANSFER_PENDING: 'Transferência agendada',
};

export const SOURCE_TYPE = {
  PAYMENT: 'PAYMENT',
  TRANSFER: 'TRANSFER',
};

export const ENTRY_TYPE = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
};

export const STATUS_TYPE = {
  COMPLETED: 'COMPLETED',
  REFUNDED: 'REFUNDED',
  PENDING: 'PENDING',
};