import { z } from 'zod'

export const TelefonosSchema = z.object({
  id: z.number(),
  alumno: z.number(),
  numero: z.string()
})

export type TelefonosType = z.infer<typeof TelefonosSchema>
