import { DishCard, Dish } from "@/components/DishCard";

const menuCategories = [
  {
    title: "Entradas",
    items: [
      {
        id: "e1",
        title: "Guacamole con Chapulines",
        description: "Aguacate machacado con pico de gallo, coronado con chapulines tostados y queso cotija. Acompañado de totopos de maíz azul.",
        price: "$180",
        imageUrl: "https://images.unsplash.com/photo-1541528659173-10e8f810cb99?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "e2",
        title: "Ceviche Acapulco",
        description: "Pesca del día marinada en jugo de limón, con jitomate, cebolla morada, cilantro, aceitunas y un toque de chile serrano.",
        price: "$220",
        imageUrl: "https://images.unsplash.com/photo-1594979109002-c94cb185b376?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Platos Fuertes",
    items: [
      {
        id: "p1",
        title: "Mole Negro Oaxaqueño",
        description: "Receta tradicional con más de 30 ingredientes, servido con pechuga de pollo de corral, arroz rojo y tortillas hechas a mano.",
        price: "$350",
        imageUrl: "https://images.unsplash.com/photo-1627993021976-599d10e01861?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "p2",
        title: "Cochinita Pibil",
        description: "Cerdo marinado en achiote y naranja agria, cocido lentamente en hojas de plátano. Acompañado de cebolla morada encurtida.",
        price: "$290",
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop"
      },
      {
        id: "p3",
        title: "Chile en Nogada",
        description: "Chile poblano relleno de picadillo tradicional (carne, frutas, nueces), bañado en salsa de nuez de castilla y granada.",
        price: "$380",
        imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb2a5c68a?q=80&w=1964&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Postres",
    items: [
      {
        id: "d1",
        title: "Flan de Elote",
        description: "Flan cremoso a base de elote tierno, bañado en caramelo y acompañado de tierra de amaranto.",
        price: "$120",
        imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop"
      },
      {
        id: "d2",
        title: "Churros Artesanales",
        description: "Churros crujientes espolvoreados con azúcar y canela, acompañados de salsa de chocolate oaxaqueño y cajeta.",
        price: "$110",
        imageUrl: "https://images.unsplash.com/photo-1624838634569-80517d91de23?q=80&w=1973&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Bebidas",
    items: [
      {
        id: "b1",
        title: "Margarita Mezcal",
        description: "Mezcal artesanal, jugo de limón fresco, triple sec y escarchado de sal de gusano.",
        price: "$160",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "b2",
        title: "Agua de Jamaica con Romero",
        description: "Refrescante agua de flor de jamaica infusionada con romero fresco.",
        price: "$60",
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4 tracking-tight">Nuestro Menú</h1>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
        <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
          Una selección cuidadosa de platillos que representan la riqueza y diversidad de la gastronomía mexicana, preparados con ingredientes frescos y locales.
        </p>
      </div>

      <div className="space-y-20">
        {menuCategories.map((category) => (
          <section key={category.title}>
            <h2 className="text-3xl font-semibold text-brand-light mb-8 pb-2 border-b border-brand-wood">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <DishCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
