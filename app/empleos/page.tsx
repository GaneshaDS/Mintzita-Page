import { Button } from "@/components/Button";

export default function JobsPage() {
  const jobs = [
    {
      id: "j1",
      title: "Chef de Partie",
      type: "Tiempo Completo",
      experience: "2-3 años",
      description: "Buscamos un Chef de Partie apasionado por la cocina mexicana contemporánea. Será responsable de su estación, asegurando la más alta calidad en cada platillo y manteniendo los estándares de higiene."
    },
    {
      id: "j2",
      title: "Sommelier",
      type: "Tiempo Completo",
      experience: "3+ años",
      description: "Experto en vinos mexicanos e internacionales para guiar a nuestros comensales en el maridaje perfecto con nuestro menú degustación."
    },
    {
      id: "j3",
      title: "Capitán de Meseros",
      type: "Tiempo Completo",
      experience: "4+ años",
      description: "Líder carismático y organizado para dirigir al equipo de servicio de sala, garantizando una experiencia excepcional para cada cliente desde su llegada hasta su despedida."
    },
    {
      id: "j4",
      title: "Host/Hostess",
      type: "Medio Tiempo / Tiempo Completo",
      experience: "1 año",
      description: "La primera impresión de Mintzita. Buscamos a alguien con excelente presentación, facilidad de palabra y habilidades de organización para gestionar reservas y bienvenidas."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4 tracking-tight">Únete a Nuestro Equipo</h1>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
        <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
          En Mintzita, creemos que nuestro mayor activo es nuestra gente. Si tienes pasión por la hospitalidad y la gastronomía de excelencia, queremos conocerte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Job Listings */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-bold text-brand-light mb-6">Vacantes Disponibles</h2>
          {jobs.map((job) => (
            <div key={job.id} className="bg-brand-surface p-6 rounded-xl border border-brand-wood hover:border-brand-primary/50 transition-colors shadow-lg group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-accent mb-2 group-hover:text-brand-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-brand-light/70 mb-4">
                    <span className="bg-brand-dark px-2 py-1 rounded border border-brand-wood/50">{job.type}</span>
                    <span className="bg-brand-dark px-2 py-1 rounded border border-brand-wood/50">Exp: {job.experience}</span>
                  </div>
                </div>
              </div>
              <p className="text-brand-light/80 text-sm leading-relaxed mb-6">
                {job.description}
              </p>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Aplicar a este puesto
              </Button>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="lg:col-span-5">
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-wood shadow-xl sticky top-28">
            <h2 className="text-2xl font-bold text-brand-light mb-6">Formulario de Aplicación</h2>
            <p className="text-brand-light/60 text-sm mb-6">
              Completa el siguiente formulario y nos pondremos en contacto contigo si tu perfil se ajusta a nuestras necesidades.
            </p>
            <form className="space-y-5">
              <div>
                <label htmlFor="job-title" className="block text-sm font-medium text-brand-light mb-2">Puesto de Interés</label>
                <select 
                  id="job-title" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                >
                  <option value="">Selecciona un puesto</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.id}>{job.title}</option>
                  ))}
                  <option value="other">Candidatura Espontánea</option>
                </select>
              </div>

              <div>
                <label htmlFor="applicant-name" className="block text-sm font-medium text-brand-light mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="applicant-name" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="applicant-email" className="block text-sm font-medium text-brand-light mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="applicant-email" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="applicant-phone" className="block text-sm font-medium text-brand-light mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="applicant-phone" 
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-brand-light mb-2">Enlace a CV / LinkedIn</label>
                <input 
                  type="url" 
                  id="resume" 
                  placeholder="https://"
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="cover-letter" className="block text-sm font-medium text-brand-light mb-2">Mensaje Breve (Opcional)</label>
                <textarea 
                  id="cover-letter" 
                  rows={3}
                  className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow resize-none"
                  placeholder="Cuéntanos por qué quieres trabajar en Mintzita..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="button" variant="primary" size="lg" className="w-full">
                  Enviar Solicitud
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
