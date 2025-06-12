import { useState } from 'react';
import Router from 'next/router';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleSubmit = (e) => { e.preventDefault(); 
    // TODO: send registration to backend
    alert('Zarejestrowano, czekaj na akceptację admina');
    Router.push('/');
  };
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Rejestracja konta wedding plannera</h2>
      <form onSubmit={handleSubmit}>
        <label>Imię i nazwisko: <input type="text" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><br />
        <label>Email: <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><br />
        <label>Hasło: <input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label><br />
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
}
