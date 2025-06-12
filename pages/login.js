export default function Login() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Logowanie</h2>
      <form>
        <label>Email: <input type="email" /></label><br />
        <label>Hasło: <input type="password" /></label><br />
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
}
