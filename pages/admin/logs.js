import AdminLayout from '@/components/AdminLayout';
import { useState,useEffect } from 'react';

export default function AdminLogs() {
  const [logs,setLogs]=useState([]);
  useEffect(()=>{
    setLogs([{id:1,event:'Planer A zarejestrowany'},{id:2,event:'Projekt B utworzony'}]);
  },[]);
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Logi i Statystyki</h1>
      <ul className="space-y-2">
        {logs.map(l=>(
          <li key={l.id} className="p-2 bg-white shadow rounded">
            {l.event}
          </li>
        ))}
      </ul>
    </AdminLayout>
