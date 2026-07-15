import { Button } from "@/components/Button";

export default function ContactPage() {
  const faqs = [
    {
      question: "¿Tienen opciones vegetarianas o veganas?",
      answer: "Sí, contamos con una variedad de platillos diseñados específicamente para dietas vegetarianas y veganas, manteniendo la esencia y el sabor de nuestra cocina."
    },
    {
      question: "¿Se necesita hacer reserva con anticipación?",
      answer: "Recomendamos hacer reservación, especialmente para cenas de jueves a sábado. Sin embargo, siempre guardamos un número limitado de mesas para clientes sin reserva."
    },
    {
      question: "¿Cuentan con valet parking?",
      answer: "Sí, ofrecemos servicio de valet parking sin costo adicional para nuestros comensales."
    },
    {
      question: "¿Puedo organizar un evento privado?",
      answer: "Por supuesto. Tenemos espacios exclusivos para eventos corporativos, celebraciones familiares y cenas privadas. Contáctanos directamente para más información."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4 tracking-tight">Contacto</h1>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
        <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
          Estamos aquí para escucharte. Ya sea para una consulta, comentario o para planear un evento especial, no dudes en comunicarte con nosotros.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-wood shadow-xl">
            <h2 className="text-2xl font-bold text-brand-light mb-6">Información de Contacto</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-brand-light/80">
                  Av. Insurgentes Sur 1234<br />
                  Col. del Valle, Benito Juárez<br />
                  03100 Ciudad de México, CDMX
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-brand-light/80">+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-brand-light/80">contacto@mintzita.com</span>
              </li>
            </ul>
          </div>

          <div className="h-[300px] bg-brand-surface rounded-xl border border-brand-wood overflow-hidden relative group">
            {/* Simulated Map */}
            <div className="absolute inset-0 bg-brand-dark flex items-center justify-center">
              <svg className="w-12 h-12 text-brand-wood/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-primary flex flex-col items-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-brand-dark/80 px-3 py-1 text-xs text-brand-light rounded border border-brand-wood/50">
              Mapa Simulado
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-brand-surface p-8 rounded-xl border border-brand-wood shadow-xl h-full flex flex-col">
          <h2 className="text-2xl font-bold text-brand-light mb-6">Envíanos un Mensaje</h2>
          <form className="space-y-6 flex-grow flex flex-col">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-2">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-light mb-2">Asunto</label>
              <select 
                id="subject" 
                className="w-full bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow"
              >
                <option value="general">Información General</option>
                <option value="events">Eventos Privados</option>
                <option value="feedback">Comentarios sobre tu visita</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <div className="flex-grow">
              <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-2">Mensaje</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full h-32 bg-brand-dark border border-brand-wood rounded-md px-4 py-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-shadow resize-none"
              ></textarea>
            </div>
            <div>
              <Button type="button" variant="primary" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="mt-16 pt-16 border-t border-brand-wood">
        <h2 className="text-3xl font-bold text-brand-accent mb-10 text-center">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-surface p-6 rounded-lg border border-brand-wood hover:border-brand-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-brand-light mb-3">{faq.question}</h3>
              <p className="text-brand-light/70 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
