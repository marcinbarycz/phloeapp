import { useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleSubmit = (e) => { e.preventDefault();
    // TODO: authenticate
    alert('Zalogowano');
    Router.push('/planner/projects');
  };
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><br />
        <label>Hasło: <input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label><br />
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
}
