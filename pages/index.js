import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Say Blake</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Say Blake to kompleksowe narzędzie dla wedding plannerów:
      </p>
      <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-700 space-y-2">
        <li>Rejestracja i logowanie z rolami (planner, para młoda, sala weselna)</li>
        <li>Panel admina do akceptacji i blokowania kont</li>
        <li>Tworzenie nieograniczonej liczby projektów ślubnych</li>
        <li>Edytor stołów: okrągłe i prostokątne z dynamiczną liczbą miejsc</li>
        <li>Import gości z Excela (kopiuj-wklej) z atrybutami: dieta, rola, siedzisko</li>
        <li>Interaktywne usadzanie gości (drag & drop) z ikonami i kolorami</li>
        <li>Personalizacja profilu (logo, baner, dane kontaktowe, kolor przewodni)</li>
        <li>Strona Cennik i ręczne odblokowywanie dostępu po płatności</li>
        <li>Eksport planu do PDF i widok podglądu sali weselnej</li>
      </ul>
      <div className="flex justify-center space-x-4 pt-6">
        <Link href="/register"><a className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Rozpocznij za darmo</a></Link>
        <Link href="/pricing"><a className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">Sprawdź cennik</a></Link>
      </div>
    </div>
);
}
