export enum SortType {
  NO_SELECTION = 'NO_SELECTION',
  ASC = 'ASC',
  DESC = 'DESC',
  DATE_ASC = 'DATE_ASC',
  DATE_DESC = 'DATE_DESC',
}

export interface IFilter {
  label: string;
  type: SortType;
  selected: boolean;
}

export type SortList = {
  [key in SortType]: IFilter;
};

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

/**
 * Initial data for Sorting transaction
 */
export const dataSorts: SortList = {
  NO_SELECTION: {
    label: 'URUTKAN',
    type: SortType.NO_SELECTION,
    selected: true,
  },
  ASC: {
    label: 'Nama A-Z',
    type: SortType.ASC,
    selected: false,
  },
  DESC: {
    label: 'Nama Z-A',
    type: SortType.DESC,
    selected: false,
  },
  DATE_ASC: {
    label: 'Tanggal Terbaru',
    type: SortType.DATE_ASC,
    selected: false,
  },
  DATE_DESC: {
    label: 'Tanggal Terlama',
    type: SortType.DATE_DESC,
    selected: false,
  },
};
