import { getCollection, type CollectionEntry } from "astro:content";

export type Caso = CollectionEntry<"casos">;

export async function casosPublicados(): Promise<Caso[]> {
  const todos = await getCollection("casos");
  return todos.sort((a, b) => a.data.orden - b.data.orden || a.data.anio - b.data.anio);
}

export function lineaPremios(casos: Caso[]): string | undefined {
  const partes = casos.flatMap((caso) =>
    caso.data.premios.map((premio) => `${premio.nombre}, ${premio.anio}`),
  );
  const unicos = [...new Set(partes)];
  if (unicos.length === 0) return undefined;
  return unicos.join(" · ");
}

export function casoSiguiente(casos: Caso[], actual: Caso): Caso | undefined {
  if (casos.length < 2) return undefined;
  const indice = casos.findIndex((caso) => caso.id === actual.id);
  const siguiente = casos[(indice + 1) % casos.length];
  return siguiente?.id === actual.id ? undefined : siguiente;
}

const oficios: Record<string, string> = {
  campaña: "Campaña",
  motion: "Motion",
  ilustración: "Ilustración",
  "diseño editorial": "Diseño editorial",
  diseño: "Diseño",
};

export function etiquetaOficios(caso: Caso): string {
  return caso.data.disciplinas.map((oficio) => oficios[oficio] ?? oficio).join(", ");
}

export function etiquetaCliente(caso: Caso): string {
  return caso.data.cliente ?? "Ilustración";
}

export function etiquetaEnlace(url: string): string {
  if (url.includes("vimeo.com")) return "Vimeo";
  if (url.includes("behance.net")) return "Behance";
  return "Ver";
}
