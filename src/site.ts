export const sitio = {
  nombre: "Gaba Pedreira",
  rol: "Directora de Arte",
  rolEn: "Art Director",
  // Con el nombre en la portada, el rol ya dice el cargo. La frase queda para que ella la confirme.
  frase: "Ideas que se pueden ver.",
  behance: "https://www.behance.net/gabrielapedreira",
  instagram: "https://www.instagram.com/soygaba/",
  linkedin: "https://www.linkedin.com/in/gaba-pedreira-884519153/",
  email: "gpedreira23@gmail.com",
};

export type Galardon = {
  festival: string;
  distincion: string;
  categoria: string;
  anio: number;
};

// Solo metales y distinciones ganadas, con Gaba acreditada en la pieza. Finalistas y shortlists no entran.
export const galardones: Galardon[] = [
  { festival: "Cannes Lions", distincion: "Plata", categoria: "Glass: The Lion for Change", anio: 2023 },
  { festival: "The Clio Awards", distincion: "Plata", categoria: "Product Design", anio: 2025 },
  { festival: "Desachate", distincion: "Mejor dirección de arte", categoria: "Leyendas", anio: 2024 },
  { festival: "The One Show", distincion: "Gold Pencil", categoria: "Young Ones", anio: 2022 },
  { festival: "Campana de Oro", distincion: "Gran Campana", categoria: "Diseño", anio: 2024 },
  { festival: "El Ojo de Iberoamérica", distincion: "Oro", categoria: "Idea País", anio: 2022 },
  { festival: "FIAP", distincion: "Oro", categoria: "Innovación", anio: 2022 },
  { festival: "Clio Sports", distincion: "Plata", categoria: "Design", anio: 2024 },
  { festival: "Desachate", distincion: "Oro", categoria: "Gráfica campaña", anio: 2025 },
  { festival: "New York Festivals", distincion: "Plata", categoria: "Direct & Collateral", anio: 2022 },
  { festival: "Campana de Oro", distincion: "Gran Campana", categoria: "Campaña gráfica", anio: 2025 },
  { festival: "ADC", distincion: "Bronze Cube", categoria: "Young Ones", anio: 2022 },
  { festival: "El Ojo de Iberoamérica", distincion: "Nuevos Talentos", categoria: "Brief 2", anio: 2022 },
  { festival: "The Clio Awards", distincion: "Bronce", categoria: "Direct", anio: 2025 },
  { festival: "The Clio Awards", distincion: "Oro", categoria: "Games", anio: 2022 },
  { festival: "Campana de Oro", distincion: "Gran Campana", categoria: "Relaciones públicas", anio: 2023 },
  { festival: "Desachate", distincion: "Oro", categoria: "Vía pública", anio: 2024 },
  { festival: "PHNX", distincion: "Bronce", categoria: "Strategy & Technique", anio: 2023 },
  { festival: "Campana de Oro", distincion: "Gran Campana", categoria: "Desarrollo sostenible", anio: 2023 },
  { festival: "El Ojo de Iberoamérica", distincion: "Bronce", categoria: "Sports", anio: 2022 },
  { festival: "Desachate", distincion: "Plata", categoria: "Gráfica campaña", anio: 2026 },
  { festival: "FIAP", distincion: "Plata", categoria: "Formato", anio: 2022 },
  { festival: "Campana de Oro", distincion: "Oro", categoria: "Vía pública", anio: 2024 },
  { festival: "El Ojo de Iberoamérica", distincion: "Bronce", categoria: "Sustentable", anio: 2022 },
  { festival: "Campana de Oro", distincion: "Oro", categoria: "Bien público ambiental", anio: 2024 },
  { festival: "Desachate", distincion: "Bronce", categoria: "Gráfica", anio: 2025 },
  { festival: "Campana de Oro", distincion: "Oro", categoria: "Servicios públicos y privados", anio: 2024 },
  { festival: "Campana de Oro", distincion: "Oro", categoria: "Innovación en medios", anio: 2025 },
];
