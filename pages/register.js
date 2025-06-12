import { useState } from 'react';
import Router from 'next/router';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleSubmit = (e) => { e.preventDefault();
    alert('Zarejestrowano, oczekuj na akceptację admina');
    Router.push('/');
  };
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Rejestracja Plannera</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" required placeholder="Imię i nazwisko" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-2 border rounded" />
        <input type="email" required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-2 border rounded" />
        <input type="password" required placeholder="Hasło" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded">Zarejestruj</button>
      </form>
    </div>
);
}
