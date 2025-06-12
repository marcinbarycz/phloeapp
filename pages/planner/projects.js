import Link from 'next/link';
export default function Projects() {
  // demo list
  const projects=[{id:1,name:'Wesele A'},{id:2,name:'Wesele B'}];
  return (
    <div style={{ padding:'2rem', fontFamily:'Arial' }}>
      <h2>Moje Projekty</h2>
      <ul>{projects.map(p=>(
        <li key={p.id}><Link href={'/planner/projects/'+p.id}>{p.name}</Link></li>
      ))}</ul>
      <button style={{marginTop:'1rem'}}>Dodaj Projekt</button>
    </div>
  );
}
