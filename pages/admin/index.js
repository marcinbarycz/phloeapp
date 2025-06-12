import { useState } from 'react';

export default function AdminPanel() {
  const [users, setUsers] = useState([
    { id:1, name:'Planer A', email:'planerA@example.com', status:'pending'},
    { id:2, name:'Planer B', email:'planerB@example.com', status:'active'},
  ]);

  const toggle = id => {
    setUsers(users.map(u=>{
      if(u.id===id) {
        let status = u.status==='pending'?'active':'active'===u.status?'blocked':'active';
        return {...u, status};
      }
      return u;
    }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Panel Admina</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Imię</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Akcja</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u=>(
            <tr key={u.id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.status}</td>
              <td className="border p-2">
                <button onClick={()=>toggle(u.id)} className="px-2 py-1 bg-indigo-600 text-white rounded">
                  {u.status==='pending'?'Aktywuj':u.status==='active'?'Zablokuj':'Aktywuj ponownie'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}
