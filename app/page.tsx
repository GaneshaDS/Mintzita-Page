import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-brand-surface overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/40 z-10" />
        {/* Placeholder for Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop")' }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-light mb-6 tracking-tight">
            Sabores que <span className="text-brand-accent">Cuentan Historias</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto">
            Descubre una experiencia culinaria donde la tradición mexicana se encuentra con la alta cocina contemporánea en un ambiente inigualable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/reservas" size="lg" variant="primary">
              Reservar una Mesa
            </Button>
            <Button href="/menu" size="lg" variant="outline">
              Ver Menú
            </Button>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border border-brand-wood">
                {/* Placeholder for Chef Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop")' }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">Nuestro Chef Ejecutivo</h2>
              <h3 className="text-2xl text-brand-light font-medium">Alejandro Ruiz</h3>
              <div className="w-20 h-1 bg-brand-primary my-6"></div>
              <p className="text-brand-light/80 text-lg leading-relaxed">
                Con más de 15 años de experiencia en las cocinas más prestigiosas del mundo, el Chef Alejandro ha regresado a sus raíces para crear Mintzita.
              </p>
              <p className="text-brand-light/80 text-lg leading-relaxed">
                "Mi visión es transformar los ingredientes locales en obras de arte que no solo deleiten el paladar, sino que evoquen emociones y memorias de nuestra rica cultura."
              </p>
              <div className="pt-6">
                <Button href="/galeria" variant="secondary">
                  Conoce nuestras creaciones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
