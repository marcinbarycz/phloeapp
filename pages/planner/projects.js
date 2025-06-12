import Link from 'next/link';

export default function Projects() {
  const projects = [{id:1,name:'Wesele A'}, {id:2,name:'Wesele B'}];
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Moje Projekty</h2>
      <ul className="space-y-2">
        {projects.map(p=>(
          <li key={p.id}><Link href={'/planner/projects/'+p.id}><a className="text-indigo-600">{p.name}</a></Link></li>
        ))}
      </ul>
      <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded">Dodaj Projekt</button>
    </div>
);
}
