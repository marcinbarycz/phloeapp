import { useState } from 'react';
import Router from 'next/router';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === 'marcin.barycz@phloe.pl' && form.password === 'K@ja17112022') {
      // mock auth, redirect to admin dashboard
      Router.push('/admin');
    } else {
      alert('Nieprawidłowe dane logowania');
    }
  };
  return (
    <div className="max-w-md mx-auto py-20">
      <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-2 border rounded" />
        <input type="password" required placeholder="Hasło" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded">Zaloguj</button>
      </form>
    </div>
);
}
