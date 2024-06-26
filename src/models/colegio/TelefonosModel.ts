import { z } from 'zod'

export const TelefonosSchema = z.object({
  id: z.number(),
  alumno: z.number(),
  numero: z.string()
})

export const TelefonosSchemaWhitoutId = TelefonosSchema.omit({id: true})

export type TelefonosType = z.infer<typeof TelefonosSchema>
export type TelefonosTypeWhitoutId = z.infer<typeof TelefonosSchemaWhitoutId>
