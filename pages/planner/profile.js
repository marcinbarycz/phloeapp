import { useState } from 'react';
export default function PlannerProfile() {
  const [profile, setProfile] = useState({ company:'', phone:'', website:'', color:'#000000' });
  return (
    <div style={{ padding:'2rem', fontFamily:'Arial' }}>
      <h2>Mój profil</h2>
      <form>
        <label>Nazwa firmy: <input value={profile.company} onChange={e=>setProfile({...profile,company:e.target.value})}/></label><br/>
        <label>Telefon: <input type="tel" value={profile.phone} onChange={e=>setProfile({...profile,phone:e.target.value})}/></label><br/>
        <label>Strona www: <input type="url" value={profile.website} onChange={e=>setProfile({...profile,website:e.target.value})}/></label><br/>
        <label>Kolor przewodni: <input type="color" value={profile.color} onChange={e=>setProfile({...profile,color:e.target.value})}/></label><br/>
        <label>Logo: <input type="file" /></label><br/>
        <label>Zdjęcie profilowe: <input type="file" /></label><br/>
        <label>Baner: <input type="file" /></label><br/>
        <button>Zapisz</button>
      </form>
    </div>
  );
}
