import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Cennik</h2>
      <p>Opłata miesięczna: <strong>20 zł</strong></p>
      <p>Płatność przelewem na konto:</p>
      <ul className="list-disc ml-6">
        <li>Bank: Twój Bank</li>
        <li>Nr konta: 12 3456 7890 1234 5678 9012 3456</li>
        <li>Tytuł: „opłata Phloe – miesiąc YYYY-MM”</li>
      </ul>
      <p>Po zaksięgowaniu kontakt: admin@phloe.pl</p>
      <Link href="/admin"><a className="text-indigo-600">Panel Admina</a></Link>
    </div>
);
}
