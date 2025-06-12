import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <a className="text-2xl font-semibold text-indigo-600">Say Blake</a>
              </Link>
              <div className="hidden md:flex space-x-4 ml-8">
                <Link href="/pricing"><a className="px-3 py-2 rounded-md hover:bg-indigo-50">Cennik</a></Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login"><a className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Zaloguj</a></Link>
              <Link href="/register"><a className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">Rejestracja</a></Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Main content */}
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      {/* Admin login icon */}
      <div className="text-center py-4">
        <Link href="/admin/login">
          <a title="Admin Login" className="text-gray-400 hover:text-gray-600">
            {/* Simple lock icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.828 0 1.5.672 1.5 1.5S12.828 14 12 14s-1.5-.672-1.5-1.5S11.172 11 12 11zm0 0V9a1 1 0 10-2 0v2m2 0h-2m5 0h2M6 11h2m8-2V7a4 4 0 10-8 0v2" />
            </svg>
          </a>
        </Link>
      </div>
      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © 2025 Say Blake. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
);
}
