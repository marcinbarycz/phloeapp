import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    { id:1, name:'Wesele A', planner:'Planer A' },
    { id:2, name:'Wesele B', planner:'Planer B' },
  ]);
  const remove = id => setProjects(projects.filter(p=>p.id!==id));
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Zarządzanie Projektami</h1>
      <ul className="space-y-2">
        {projects.map(p=>(
          <li key={p.id} className="p-4 bg-white shadow rounded flex justify-between">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-gray-600 text-sm">Planner: {p.planner}</div>
            </div>
            <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={()=>remove(p.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </AdminLayout>
