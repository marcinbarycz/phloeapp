export default function Register() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Rejestracja konta wedding plannera</h2>
      <form>
        <label>Imię i nazwisko: <input type="text" /></label><br />
        <label>Email: <input type="email" /></label><br />
        <label>Hasło: <input type="password" /></label><br />
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
}
