import React from 'react';

export default function AdminDashboard() {
  const recentReservations = [
    { id: "RES-001", name: "Carlos Mendoza", date: "2026-07-15", time: "20:00", guests: 4, status: "Confirmada" },
    { id: "RES-002", name: "Ana Sofia Ríos", date: "2026-07-15", time: "21:00", guests: 2, status: "Confirmada" },
    { id: "RES-003", name: "Familia Garza", date: "2026-07-16", time: "14:30", guests: 6, status: "Pendiente" },
    { id: "RES-004", name: "Roberto Gómez", date: "2026-07-16", time: "20:00", guests: 2, status: "Cancelada" },
    { id: "RES-005", name: "Laura Yáñez", date: "2026-07-17", time: "19:30", guests: 3, status: "Confirmada" },
  ];

  const popularDishes = [
    { id: "DSH-01", name: "Mole Negro Oaxaqueño", category: "Platos Fuertes", price: "$350", orders: 142 },
    { id: "DSH-02", name: "Ceviche Acapulco", category: "Entradas", price: "$220", orders: 98 },
    { id: "DSH-03", name: "Margarita Mezcal", category: "Bebidas", price: "$160", orders: 215 },
    { id: "DSH-04", name: "Flan de Elote", category: "Postres", price: "$120", orders: 85 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmada': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Pendiente': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Cancelada': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-brand-light">Panel de Administración</h1>
          <p className="text-brand-light/60 mt-1">Gestión del Restaurante Mintzita</p>
        </div>
        <div className="mt-4 md:mt-0 bg-brand-surface border border-brand-wood rounded-lg p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-dark font-bold">
            AR
          </div>
          <div>
            <p className="text-sm font-medium text-brand-light">Alejandro Ruiz</p>
            <p className="text-xs text-brand-light/60">Administrador</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-brand-surface p-6 rounded-xl border border-brand-wood">
          <h3 className="text-sm font-medium text-brand-light/70 mb-2">Reservas de Hoy</h3>
          <p className="text-3xl font-bold text-brand-accent">24</p>
          <p className="text-xs text-green-400 mt-2">↑ 12% vs ayer</p>
        </div>
        <div className="bg-brand-surface p-6 rounded-xl border border-brand-wood">
          <h3 className="text-sm font-medium text-brand-light/70 mb-2">Ingresos Estimados</h3>
          <p className="text-3xl font-bold text-brand-accent">$45,200</p>
          <p className="text-xs text-green-400 mt-2">↑ 8% vs semana pasada</p>
        </div>
        <div className="bg-brand-surface p-6 rounded-xl border border-brand-wood">
          <h3 className="text-sm font-medium text-brand-light/70 mb-2">Visitantes (Web)</h3>
          <p className="text-3xl font-bold text-brand-accent">1,204</p>
          <p className="text-xs text-green-400 mt-2">↑ 24% vs ayer</p>
        </div>
        <div className="bg-brand-surface p-6 rounded-xl border border-brand-wood">
          <h3 className="text-sm font-medium text-brand-light/70 mb-2">Mesa Más Popular</h3>
          <p className="text-2xl font-bold text-brand-accent">Terraza 04</p>
          <p className="text-xs text-brand-light/60 mt-2">15 reservas esta semana</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Reservations Table */}
        <div className="xl:col-span-2 bg-brand-surface rounded-xl border border-brand-wood overflow-hidden flex flex-col">
          <div className="p-6 border-b border-brand-wood flex justify-between items-center">
            <h2 className="text-xl font-bold text-brand-light">Próximas Reservas</h2>
            <button className="text-sm text-brand-primary hover:text-brand-accent transition-colors">Ver todas</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark/50 text-brand-light/70 text-sm">
                  <th className="p-4 font-medium">ID</th>
                  <th className="p-4 font-medium">Cliente</th>
                  <th className="p-4 font-medium">Fecha y Hora</th>
                  <th className="p-4 font-medium">Pax</th>
                  <th className="p-4 font-medium">Estado</th>
                  <th className="p-4 font-medium text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-brand-wood/50">
                {recentReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-brand-dark/30 transition-colors">
                    <td className="p-4 text-brand-light/60">{res.id}</td>
                    <td className="p-4 font-medium text-brand-light">{res.name}</td>
                    <td className="p-4 text-brand-light/80">{res.date} <span className="text-brand-light/50 ml-1">{res.time}</span></td>
                    <td className="p-4 text-brand-light/80">{res.guests}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(res.status)}`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-brand-light/50 hover:text-brand-primary transition-colors">
                        <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Dishes */}
        <div className="bg-brand-surface rounded-xl border border-brand-wood flex flex-col">
          <div className="p-6 border-b border-brand-wood">
            <h2 className="text-xl font-bold text-brand-light">Platillos Más Pedidos</h2>
          </div>
          <div className="p-6 flex-grow">
            <div className="space-y-6">
              {popularDishes.map((dish, index) => (
                <div key={dish.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-dark border border-brand-wood flex items-center justify-center text-sm font-bold text-brand-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-brand-light">{dish.name}</h4>
                      <p className="text-xs text-brand-light/50">{dish.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-brand-light">{dish.orders}</p>
                    <p className="text-xs text-brand-light/50">órdenes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-brand-wood bg-brand-dark/30 text-center">
            <button className="text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors">
              Gestionar Menú completo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
