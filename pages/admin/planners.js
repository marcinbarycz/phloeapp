import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminPlanners() {
  const [planners, setPlanners] = useState([
    { id:1, name:'Planer A', email:'a@example.com', status:'pending' },
    { id:2, name:'Planer B', email:'b@example.com', status:'active' },
  ]);
  const toggle = id => {
    setPlanners(planners.map(p => p.id===id ? {...p, status: p.status==='active'?'blocked':'active'} : p));
  };
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Zarządzanie Plannerami</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th><th className="p-2 border">Imię</th>
            <th className="p-2 border">Email</th><th className="p-2 border">Status</th><th className="p-2 border">Akcja</th>
          </tr>
        </thead>
        <tbody>
          {planners.map(p=>(
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.email}</td>
              <td className="p-2 border">{p.status}</td>
              <td className="p-2 border">
                <button className="px-2 py-1 bg-indigo-600 text-white rounded" onClick={()=>toggle(p.id)}>
                  {p.status==='pending'?'Aktywuj':p.status==='active'?'Zablokuj':'Aktywuj ponownie'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
