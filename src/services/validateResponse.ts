import { ZodSchema } from 'zod'

export const validateResponse = <T>(response: T, schema: ZodSchema, path: string | null = null): boolean => {
  const isValid = schema.safeParse(response)
  if (isValid.success) return true

  isValid.error.name

  if (path) console.error('ERROR: Api response missmatch with interface', path)
  console.warn('ERROR: API response missmath with interface', isValid.error)
  return false
}
