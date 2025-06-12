import { useState } from 'react';

export default function PlannerProfile() {
  const [profile, setProfile] = useState({ company:'', phone:'', website:'', color:'#6366F1' });
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Mój Profil</h2>
      <form className="space-y-2">
        <input placeholder="Nazwa firmy" value={profile.company} onChange={e=>setProfile({...profile,company:e.target.value})} className="w-full p-2 border rounded" />
        <input type="tel" placeholder="Telefon" value={profile.phone} onChange={e=>setProfile({...profile,phone:e.target.value})} className="w-full p-2 border rounded" />
        <input type="url" placeholder="Strona www" value={profile.website} onChange={e=>setProfile({...profile,website:e.target.value})} className="w-full p-2 border rounded" />
        <input type="color" value={profile.color} onChange={e=>setProfile({...profile,color:e.target.value})} className="block p-1 border rounded" />
        <label className="block">Logo: <input type="file" /></label>
        <label className="block">Zdjęcie profilowe: <input type="file" /></label>
        <label className="block">Baner: <input type="file" /></label>
        <button className="w-full py-2 bg-indigo-600 text-white rounded">Zapisz</button>
      </form>
    </div>
);
}
