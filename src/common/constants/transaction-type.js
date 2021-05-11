export const TRANSACTION_TYPE = {
  PAYMENT_CREDIT: 'Pagamento realizado',
  PAYMENT_DEBIT: 'Pagamento recebido',
  PAYMENT_REFUNDED: 'Pagamento estornado',
  PAYMENT_SCHEDULED: 'Pagamento agendado',
  PAYMENT_PENDING: 'Pagamento pendente',
  TRANSFER_CREDIT: 'Transferência realizada',
  TRANSFER_DEBIT: 'Transferência recebida',
  TRANSFER_REFUNDED: 'Transferência estornada',
  TRANSFER_SCHEDULED: 'Transferência agendada',
  TRANSFER_PENDING: 'Transferência pendente',
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