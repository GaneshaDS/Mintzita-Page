export default function GalleryPage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop", alt: "Interior del restaurante", className: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", alt: "Platillo especial", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop", alt: "Mesa preparada", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1414235077428-338988691282?q=80&w=1974&auto=format&fit=crop", alt: "Cócteles", className: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop", alt: "Detalle de cocina", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=1964&auto=format&fit=crop", alt: "Chef cocinando", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2010&auto=format&fit=crop", alt: "Ingredientes frescos", className: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1536489885071-87983c3e28b7?q=80&w=2083&auto=format&fit=crop", alt: "Vista nocturna", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1560159844-3d07e60155b9?q=80&w=1924&auto=format&fit=crop", alt: "Postre", className: "col-span-1 row-span-1" },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4 tracking-tight">Galería</h1>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
        <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
          Un vistazo a la atmósfera, los detalles y la pasión que ponemos en cada creación dentro de Mintzita.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative rounded-lg overflow-hidden group shadow-lg border border-brand-wood/50 hover:border-brand-primary transition-colors ${image.className}`}
          >
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end">
              <p className="text-brand-light p-4 font-medium tracking-wide">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
