import { Button } from "@/components/Button";

export default function ReservationsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4 tracking-tight">Haz tu Reserva</h1>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
        <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
          Asegura tu lugar en Mintzita. Te invitamos a vivir una experiencia gastronómica única en un espacio diseñado para despertar tus sentidos.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* 3D Model Placeholder Area */}
        <div className="w-full lg:w-1/2">
          <div className="bg-brand-surface border-2 border-dashed border-brand-wood rounded-xl p-8 flex flex-col items-center justify-center min-h-[500px] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors"></div>
            <svg className="w-16 h-16 text-brand-primary mb-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
            <h3 className="text-2xl font-semibold text-brand-light mb-2 relative z-10">Explora nuestro Restaurante</h3>
            <p className="text-brand-light/60 max-w-xs relative z-10">
              Próximamente: Vista 3D interactiva para elegir tu mesa favorita.
            </p>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="w-full lg:w-1/2 bg-brand-surface p-8 rounded-xl border border-brand-wood shadow-xl">
          <h2 className="text-2xl font-bold text-brand-accent mb-6">Detalles de la Reserva</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                  placeholder="Ej. María García"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-light mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                  placeholder="Ej. 55 1234 5678"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-brand-light mb-2">Fecha</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow [color-scheme:dark]"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-brand-light mb-2">Hora</label>
                <select 
                  id="time" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                >
                  <option value="">Selecciona</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-brand-light mb-2">Personas</label>
                <select 
                  id="guests" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                >
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5">5 Personas</option>
                  <option value="6">6 Personas</option>
                  <option value="7">Grupos grandes (+6)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-brand-light mb-2">Peticiones Especiales</label>
              <textarea 
                id="notes" 
                rows={4}
                className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow resize-none"
                placeholder="Alergias, aniversarios, preferencias de mesa..."
              ></textarea>
            </div>

            <div className="pt-4">
              <Button type="button" variant="primary" size="lg" className="w-full">
                Confirmar Reserva
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
