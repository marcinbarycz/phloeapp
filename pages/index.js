import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Phloe – Aplikacja do usadzania gości</h1>
      <p>Witaj! To panel startowy.</p>
      <ul>
        <li><Link href="/register">Rejestracja konta plannera</Link></li>
        <li><Link href="/login">Logowanie</Link></li>
        <li><Link href="/planner/profile">Mój Profil</Link></li>
      </ul>
    </div>
  );
}
