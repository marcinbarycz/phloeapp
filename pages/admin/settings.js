import AdminLayout from '@/components/AdminLayout';
import { useState } from 'react';

export default function AdminSettings() {
  const [siteTitle,setSiteTitle]=useState('Say Blake');
  const [tagline,setTagline]=useState('Kompleksowe narzędzie dla wedding plannerów');
  const save=()=>alert('Zapisano Ustawienia');
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Ustawienia Strony</h1>
      <div className="space-y-4 max-w-md">
        <label className="block">Tytuł strony:
          <input type="text" value={siteTitle} onChange={e=>setSiteTitle(e.target.value)} className="w-full p-2 border rounded"/>
        </label>
        <label className="block">Opis główny:
          <textarea value={tagline} onChange={e=>setTagline(e.target.value)} className="w-full p-2 border rounded"/>
        </label>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={save}>Zapisz</button>
      </div>
    </AdminLayout>
