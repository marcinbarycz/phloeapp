import { useState } from 'react';
export default function Project() {
  const [tables, setTables] = useState([]);
  return (
    <div style={{ padding:'2rem', fontFamily:'Arial' }}>
      <h2>Edytor Stołów i Gości</h2>
      <button onClick={()=>{const id=tables.length+1; setTables([...tables,{id,seats:4}]);}}>Dodaj stół</button>
      <div>{tables.map(t=>(
        <div key={t.id} style={{border:'1px solid',padding:'1rem',margin:'1rem 0'}}>
          <p>Stół {t.id}, miejsca: {t.seats}</p>
        </div>
      ))}</div>
    </div>
  );
}
