import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import TileCard from '@/components/TileCard';

export default function AdminTiles() {
  const [tiles, setTiles] = useState([]);
  useEffect(()=>{ // demo fetch
    setTiles([{id:1,title:'Oferta',description:'Opis',image_url:'',order:1}]);
  },[]);
  const add = ()=>{/*...*/};
  const edit = t=>{/*...*/};
  const del = id=>{/*...*/};
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Zarządzanie Kafelkami</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map(t=>(
          <TileCard key={t.id} tile={t} onEdit={edit} onDelete={del}/>
        ))}
      </div>
    </AdminLayout>
