'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Building,
  CreditCard,
  MapPin,
  Hash,
  User,
  Phone,
  Calendar,
} from 'lucide-react';
import { mockAccount } from '@/lib/data';

export default function AccountDetails() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const accountDetails = [
    {
      icon: <User className="h-5 w-5" />,
      label: 'Account Holder Name',
      value: mockAccount.customerName,
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: 'Account Type',
      value: mockAccount.accountType,
    },
    {
      icon: <Hash className="h-5 w-5" />,
      label: 'Account Number',
      value: mockAccount.accountNumber,
    },
    {
      icon: <Building className="h-5 w-5" />,
      label: 'IFSC Code',
      value: mockAccount.ifscCode,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Branch Name',
      value: mockAccount.branchName,
    },
    {
      icon: <Hash className="h-5 w-5" />,
      label: 'Customer ID',
      value: mockAccount.customerId,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-gray-800">
      {/* Header */}
      <header className="bg-[#004080] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2 px-4 py-2 bg-[#cc0000] hover:bg-red-700 text-white rounded-md transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div>
              <h1 className="text-xl font-bold">Account Details</h1>
              <p className="text-sm text-white/90">Complete account information</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Balance Card */}
        <section className="bg-gradient-to-r from-[#cc0000] to-[#ff4444] text-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm opacity-90">Available Balance</p>
              <p className="text-3xl font-bold">{formatCurrency(mockAccount.balance)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Account Type</p>
              <p className="text-lg font-semibold">{mockAccount.accountType}</p>
            </div>
          </div>
        </section>

        {/* Account Info */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#004080] mb-6">Account Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accountDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow transition"
              >
                <div className="text-[#cc0000]">{detail.icon}</div>
                <div>
                  <p className="text-sm text-gray-600">{detail.label}</p>
                  <p className="font-semibold text-gray-800">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#004080] mb-6">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow transition">
              <div className="text-[#cc0000]">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Opening Date</p>
                <p className="font-semibold text-gray-800">15 Jan 2020</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow transition">
              <div className="text-[#cc0000]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Registered Mobile</p>
                <p className="font-semibold text-gray-800">+91 9876543210</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
