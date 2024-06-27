import { z } from 'zod'

export const CompetenciasSchema = z.object({
    nombre: z.string(),
    tipo: z.string(),
    liga: z.number(),
    })

const CompetenciasSchemaWithId = CompetenciasSchema.extend({
    id: z.number(),
});

export type CompetenciasType = z.infer<typeof CompetenciasSchema>
export type CompetenciasTypeWhitId = z.infer<typeof CompetenciasSchemaWithId>
