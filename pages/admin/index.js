import AdminLayout from '@/components/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded">Łączna liczba plannerów: 10</div>
        <div className="p-6 bg-white shadow rounded">Aktywne projekty: 5</div>
        <div className="p-6 bg-white shadow rounded">Zarejestrowane kafelki: 8</div>
      </div>
    </AdminLayout>
);
}
