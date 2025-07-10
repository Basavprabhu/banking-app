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
  customerName: "Ola Electric Technologies Pvt Ltd",
  accountType: "Priority Account",
  accountNumber: "1234567890123456",
  balance: 2500000.00,
  ifscCode: "HDFC0001234",
  branchName: "Bangalore - Electronic City",
  customerId: "CUST001"
};

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2024-07-08",
    description: "Online Transfer to Vendor Payment",
    amount: -50000,
    type: "debit",
    balance: 2500000
  },
  {
    id: "2",
    date: "2024-07-05",
    description: "Salary Credit - Monthly",
    amount: 150000,
    type: "credit",
    balance: 2550000
  },
  {
    id: "3",
    date: "2024-07-02",
    description: "Electricity Bill Payment",
    amount: -15000,
    type: "debit",
    balance: 2400000
  },
  {
    id: "4",
    date: "2024-06-28",
    description: "Business Income Credit",
    amount: 300000,
    type: "credit",
    balance: 2415000
  },
  {
    id: "5",
    date: "2024-06-25",
    description: "Office Rent Payment",
    amount: -85000,
    type: "debit",
    balance: 2115000
  },
  {
    id: "6",
    date: "2024-06-20",
    description: "Insurance Premium",
    amount: -25000,
    type: "debit",
    balance: 2200000
  }
];

export const loginCredentials = {
  customerId: "CUST001",
  password: "password123"
};