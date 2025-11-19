// src/lib/data.ts
export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  balance: number;
}

export interface Account {
  customerName: string;
  accountType: string;
  accountNumber: string;
  balance: number;
  ifscCode: string;
  branchName: string;
  customerId: string;
}

export const mockAccount: Account = {
  customerName: "Channappa Talawai",
  accountType: "Priority Account",
  accountNumber: "876790240091",
  balance: 1071500000.00,
  ifscCode: "HDFC0001289",
  branchName: "Dharwad - NTTF Branch",
  customerId: "CUST091675"
};

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2025-11-17",
    description: "TVS motor Software solutions India Pvt Ltd",
    amount: 96500000.00,
    type: "credit",
    balance: 975000000.00
  },
  {
    id: "2",
    date: "2025-11-15",
    description: "CreDha Shodha AutoService India Pvt Ltd",
    amount: 185000000.00,
    type: "credit",
    balance: 795000000.00
  },
  {
    id: "3",
    date: "2025-11-11",
    description: "Cipla Phramaceuticals India Pvt Ltd",
    amount: 102500000.00,
    type: "credit",
    balance: 610000000.00
  },
  {
    id: "4",
    date: "2025-11-07",
    description: "Milton Industries India Pvt Ltd",
    amount: 167500000.00,
    type: "credit",
    balance: 507500000.00
  },
  {
    id: "5",
    date: "2025-10-23",
    description: "SRV offshore Communications Pvt Ltd",
    amount: 110000000.00,
    type: "credit",
    balance: 340000000.00
  },
  {
    id: "6",
    date: "2025-09-29",
    description: "Ola India Entreprises Pvt Ltd",
    amount: 175000000.00,
    type: "credit",
    balance: 130000000.00
  }
];

export const loginCredentials = {
  customerId: "CUST001",
  password: "password123"
};
