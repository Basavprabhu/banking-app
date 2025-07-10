'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LogOut,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Send,
  Landmark,
  PhoneCall,
  Banknote,
  ShieldCheck,
  UserCircle,
  Download,
  Edit,
} from 'lucide-react';
import { mockAccount, mockTransactions } from '@/lib/data';
// import {html2pdf} from @types/'html2pdf.js';

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(false);
  const router = useRouter();
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/');
  };

//   const handleDownloadPDF = async () => {
//   if (typeof window !== 'undefined') {
//     const element = statementRef.current;

//     if (!element) return;

//     const html2pdf = (await import('html2pdf.js')).default;

//     const opt = {
//       margin:       0.5,
//       filename:     'account-statement.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
//   }
// };


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-gray-800">
      {/* Header */}
      <header className="bg-[#004080] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">HDFC Bank</h1>
            <p className="text-sm text-white/90">Secure NetBanking Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-[#cc0000] hover:bg-red-700 text-white rounded-md transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Welcome + Details */}
        <section className="flex flex-col lg:flex-row justify-between items-start bg-white shadow-xl rounded-2xl p-6 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#cc0000]/10 text-[#cc0000] rounded-full">
              <UserCircle className="h-10 w-10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#004080]">Welcome, {mockAccount.customerName}</h2>
              <p className="text-sm text-gray-600">Manage your finances confidently with HDFC NetBanking.</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <button
              onClick={() => router.push('/account-details')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#004080] hover:bg-[#003060] rounded-lg transition shadow"
            >
              {/* <Edit className="h-4 w-4" /> */}
              Account Details
            </button>
            <button
            //   onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#004080] border border-[#004080] hover:bg-[#004080] hover:text-white rounded-lg transition"
            >
              <Download className="h-4 w-4" />
              Download Statement
            </button>
          </div>
        </section>

        {/* Account Overview */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#004080]">
            <p className="text-sm text-gray-500">Account Type</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{mockAccount.accountType}</p>
              <CreditCard className="h-6 w-6 text-[#004080]" />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#004080]">
            <p className="text-sm text-gray-500">Account Number</p>
            <p className="text-lg font-semibold">****{mockAccount.accountNumber.slice(-4)}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#004080]">
            <p className="text-sm text-gray-500">Available Balance</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-[#004080]">
                {showBalance ? formatCurrency(mockAccount.balance) : '****'}
              </p>
              <button onClick={() => setShowBalance(!showBalance)}>
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#004080] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { label: 'Transfer Money', icon: <Send className="h-5 w-5 text-[#004080]" /> },
              { label: 'Pay Bills', icon: <Banknote className="h-5 w-5 text-[#cc0000]" /> },
              { label: 'Apply for Loan', icon: <ShieldCheck className="h-5 w-5 text-[#004080]" /> },
              { label: 'Open FD', icon: <Landmark className="h-5 w-5 text-[#cc0000]" /> },
            ].map((action, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer transition"
              >
                {action.icon}
                {action.label}
              </div>
            ))}
          </div>
        </section>

        {/* Transactions */}
        <section
          className="bg-white shadow-md rounded-xl p-6"
          ref={statementRef}
        >
          <h3 className="text-lg font-semibold text-[#004080] mb-4">Recent Transactions</h3>
          <div className="divide-y divide-gray-100">
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center py-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      transaction.type === 'credit'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {transaction.type === 'credit' ? (
                      <ArrowDownRight className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {transaction.type === 'credit' ? '+' : '-'}{' '}
                    {formatCurrency(Math.abs(transaction.amount))}
                  </p>
                  <p className="text-sm text-gray-400">
                    Bal: {formatCurrency(transaction.balance)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-md font-semibold text-[#004080] mb-2">Account Info</h4>
            <p className="text-sm text-gray-600">IFSC Code: HDFC0001234</p>
            <p className="text-sm text-gray-600">Branch: Bengaluru MG Road</p>
            <p className="text-sm text-gray-600">Email: user@example.com</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-md font-semibold text-[#004080] mb-2">Need Help?</h4>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
              <PhoneCall className="h-4 w-4" />
              Call: 1800-123-4567
            </div>
            <p className="text-sm text-gray-500">
              24/7 support available for net banking, cards, and account-related queries.
            </p>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="bg-gradient-to-r from-[#004080] to-[#004080cc] p-6 rounded-xl text-center text-white shadow-md">
          <h4 className="text-lg font-semibold">Upgrade to HDFC Premium</h4>
          <p className="text-sm mt-2">
            Get cashback, priority banking, and zero-balance account privileges.
          </p>
        </section>
      </main>
    </div>
  );
}
