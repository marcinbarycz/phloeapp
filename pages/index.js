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
        <li>Tworzenie projektów ślubnych</li>
        <li>Edytor stołów: dynamiczna liczba miejsc</li>
        <li>Import i zarządzanie gośćmi</li>
        <li>Personalizacja profilu i strony głównej</li>
        <li>Cennik i ręczne odblokowywanie po płatności</li>
        <li>Eksport planu do PDF</li>
      </ul>
    </div>
);
}
