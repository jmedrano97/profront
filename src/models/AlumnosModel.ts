import { z } from 'zod'
import { TelefonosSchema } from './TelefonosModel'

export const AlumnosSchema = z.object({
  nombres: z.string(),
  apellido_paterno: z.string(),
  apellido_materno: z.string(),
  fecha_nacimiento: z.string(),
  avenida_calle: z.string(),
  localidad: z.string(),
  alcaldia_municipio: z.string(),
  estado: z.string(),
  pais: z.string(),
  telefonos: z.array(TelefonosSchema)
})

export type AlumnosType = z.infer<typeof AlumnosSchema>
