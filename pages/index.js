import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Phloe – Aplikacja do usadzania gości</h1>
      <p className="text-gray-600">Zaloguj się lub załóż konto, aby rozpocząć.</p>
      <div className="flex justify-center space-x-4">
        <Link href="/login"><a className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Zaloguj</a></Link>
        <Link href="/register"><a className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">Rejestracja</a></Link>
      </div>
    </div>
);
}
