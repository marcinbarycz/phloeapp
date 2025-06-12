import { useState } from 'react';

let demoUsers = [
  { id: 1, email: 'planer1@example.com', name: 'Planer A', status: 'pending' },
  { id: 2, email: 'planer2@example.com', name: 'Planer B', status: 'active' },
];

export default function AdminPanel() {
  const [users, setUsers] = useState(demoUsers);

  const toggleStatus = (id) => {
    setUsers(users.map(u =>
      u.id === id
        ? { ...u, status: u.status === 'active' ? 'blocked' : 'active' }
        : u
    ));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Panel Administratora</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr><th>Email</th><th>Imię</th><th>Status</th><th>Akcja</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>{u.name}</td>
              <td>{u.status}</td>
              <td>
                <button onClick={() => toggleStatus(u.id)}>
                  {u.status === 'pending' ? 'Aktywuj' :
                   u.status === 'active'  ? 'Zablokuj' :
                   'Aktywuj ponownie'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
