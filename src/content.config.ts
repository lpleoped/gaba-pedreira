import { defineCollection, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const disciplinas = z.enum([
  "campaña",
  "motion",
  "ilustración",
  "diseño editorial",
  "diseño",
]);

function medio({ image }: SchemaContext) {
  return z
    .object({
      alt: z.string().min(1),
      ancho: z.number().int().positive(),
      alto: z.number().int().positive(),
      imagen: image().optional(),
      video: z.string().min(1).optional(),
      poster: image().optional(),
    })
    .superRefine((value, ctx) => {
      if (value.video && !value.poster) {
        ctx.addIssue({
          code: "custom",
          message: "El video necesita poster.",
          path: ["poster"],
        });
      }
      if (!value.video && !value.imagen) {
        ctx.addIssue({
          code: "custom",
          message: "La pieza necesita imagen, o video con poster.",
          path: ["imagen"],
        });
      }
    });
}

const casos = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/casos",
    generateId: ({ entry, data }) =>
      typeof data.slug === "string" && data.slug.length > 0
        ? data.slug
        : entry.replace(/\.(md|mdx)$/i, ""),
  }),
  schema: (context) =>
    z.object({
      titulo: z.string().min(1),
      slug: z.string().min(1),
      frase: z.string().min(1).optional(),
      cliente: z.string().min(1).optional(),
      anio: z.number().int(),
      rol: z.string().min(1),
      colaboradores: z.array(z.string().min(1)).default([]),
      disciplinas: z.array(disciplinas).min(1),
      desafio: z.string().min(1),
      premios: z
        .array(
          z.object({
            nombre: z.string().min(1),
            anio: z.number().int(),
          }),
        )
        .default([]),
      pieza: medio(context),
      apoyos: z.array(medio(context)).max(4).default([]),
      destacado: z.boolean(),
      orden: z.number().int(),
      colorDeCaso: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      og: z
        .object({
          titulo: z.string().min(1),
          descripcion: z.string().min(1),
          imagen: context.image(),
        })
        .optional(),
    }),
});

export const collections = { casos };
