import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Panel Admina</h2>
        <nav className="space-y-2">
          <Link href="/admin"><a className="block p-2 hover:bg-gray-700 rounded">Dashboard</a></Link>
          <Link href="/admin/planners"><a className="block p-2 hover:bg-gray-700 rounded">Plannerzy</a></Link>
          <Link href="/admin/projects"><a className="block p-2 hover:bg-gray-700 rounded">Projekty</a></Link>
          <Link href="/admin/tiles"><a className="block p-2 hover:bg-gray-700 rounded">Kafelki</a></Link>
          <Link href="/admin/settings"><a className="block p-2 hover:bg-gray-700 rounded">Ustawienia</a></Link>
          <Link href="/admin/logs"><a className="block p-2 hover:bg-gray-700 rounded">Logi</a></Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
);
}
