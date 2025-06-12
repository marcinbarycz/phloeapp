export default function PlannerProfile() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Mój profil</h2>
      <form>
        <label>Nazwa firmy: <input type="text" /></label><br />
        <label>Telefon: <input type="tel" /></label><br />
        <label>Strona www: <input type="url" /></label><br />
        <label>Kolor przewodni: <input type="color" /></label><br />
        <label>Logo (upload): <input type="file" /></label><br />
        <label>Zdjęcie profilowe: <input type="file" /></label><br />
        <label>Baner graficzny: <input type="file" /></label><br />
        <button type="submit">Zapisz zmiany</button>
      </form>
    </div>
  );
}
