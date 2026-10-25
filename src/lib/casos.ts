import { getCollection, type CollectionEntry } from "astro:content";

export type Caso = CollectionEntry<"casos">;

export async function casosPublicados(): Promise<Caso[]> {
  const todos = await getCollection("casos");
  return todos.sort((a, b) => a.data.orden - b.data.orden || a.data.anio - b.data.anio);
}

export function casoSiguiente(casos: Caso[], actual: Caso): Caso | undefined {
  if (casos.length < 2) return undefined;
  const indice = casos.findIndex((caso) => caso.id === actual.id);
  const siguiente = casos[(indice + 1) % casos.length];
  return siguiente?.id === actual.id ? undefined : siguiente;
}

export type Idioma = "es" | "en";

const oficios: Record<Idioma, Record<string, string>> = {
  es: {
    campaña: "Campaña",
    motion: "Motion",
    ilustración: "Ilustración",
    "diseño editorial": "Diseño editorial",
    diseño: "Diseño",
  },
  en: {
    campaña: "Campaign",
    motion: "Motion",
    ilustración: "Illustration",
    "diseño editorial": "Editorial design",
    diseño: "Design",
  },
};

export function etiquetaOficio(oficio: string, idioma: Idioma = "es"): string {
  return oficios[idioma][oficio] ?? oficio;
}

export function etiquetaOficios(caso: Caso, idioma: Idioma = "es"): string {
  return caso.data.disciplinas.map((oficio) => etiquetaOficio(oficio, idioma)).join(", ");
}

export function etiquetaCliente(caso: Caso, idioma: Idioma = "es"): string {
  return caso.data.cliente ?? etiquetaOficio("ilustración", idioma);
}

export function etiquetaEnlace(url: string, idioma: Idioma = "es"): string {
  if (url.includes("vimeo.com")) return "Vimeo";
  if (url.includes("behance.net")) return "Behance";
  return idioma === "en" ? "View" : "Ver";
}
