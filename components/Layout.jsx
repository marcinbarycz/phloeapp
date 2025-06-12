import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <a className="text-2xl font-semibold text-indigo-600">Say Blake</a>
              </Link>
              <div className="hidden md:flex space-x-4 ml-8">
                <Link href="/planner/projects"><a className="px-3 py-2 rounded-md hover:bg-indigo-50">Projekty</a></Link>
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
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © 2025 Say Blake. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
);
}
