import Link from 'next/link';
export default function Pricing() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>Cennik</h1>
      <p>Opłata miesięczna: <strong>20 zł</strong></p>
      <p>Płatność przelewem na konto:</p>
      <ul>
        <li>Bank: Twój Bank</li>
        <li>Numer rachunku: 12 3456 7890 1234 5678 9012 3456</li>
        <li>Tytuł przelewu: „opłata Phloe – miesiąc YYYY-MM”</li>
      </ul>
      <p>Po zaksięgowaniu wpłaty skontaktuj się z nami, a my <strong>ręcznie odblokujemy</strong> Twoje konto.</p>
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/admin"><a style={{ color: '#0070f3' }}>Panel Administratora</a></Link>
      </p>
    </div>
  );
}
