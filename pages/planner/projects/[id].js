// pages/planner/projects/[id].js
import { useState } from 'react';

export default function Project() {
  const [tables, setTables] = useState([]);
  const addTable = () => {
    const id = tables.length + 1;
    setTables([...tables, { id, seats: 4 }]);
  };
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Edytor Stołów i Gości</h2>
      <button onClick={addTable} className="py-2 px-4 bg-indigo-600 text-white rounded">Dodaj Stół</button>
      {tables.map(t=>(
        <div key={t.id} className="p-4 border rounded">
          <p>Stół {t.id}, miejsca: {t.seats}</p>
        </div>
      ))}
    </div>
);
}
