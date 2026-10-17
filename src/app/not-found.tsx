import Link from 'next/link';
import React from 'react';

const NotFound= () => {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm font-semibold text-green-700">404</p>
      <h1 className="text-2xl font-bold text-slate-900">
        পেজটি খুঁজে পাওয়া যায়নি
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        এই ক্যাটাগরিতে কোনো পণ্য নেই, অথবা ক্যাটাগরিটি খুঁজে পাওয়া যায়নি।
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </main>
    );
};

export default NotFound ;