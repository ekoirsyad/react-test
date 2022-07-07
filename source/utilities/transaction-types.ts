export enum SortType {
  ASC = 'name A-Z',
  DESC = 'name Z-A',
  DATE_ASC = 'date newest',
  DATE_DESC = 'date oldest',
}

export interface ITransaction {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

export interface ITransactionResponse {
  [key: string]: ITransaction;
}
