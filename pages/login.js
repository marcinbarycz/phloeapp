import { useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleSubmit = (e) => { e.preventDefault();
    alert('Zalogowano');
    Router.push('/planner/projects');
  };
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Logowanie</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="email" required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-2 border rounded" />
        <input type="password" required placeholder="Hasło" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded">Zaloguj</button>
      </form>
    </div>
);
}
