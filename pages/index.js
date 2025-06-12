import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Phloe – Aplikacja do usadzania gości</h1>
      <ul>
        <li><Link href="/register">Rejestracja konta plannera</Link></li>
        <li><Link href="/login">Logowanie</Link></li>
        <li><Link href="/planner/profile">Mój Profil</Link></li>
        <li><Link href="/pricing">Cennik</Link></li>
        <li><Link href="/admin">Panel Admina</Link></li>
      </ul>
    </div>
  );
}
