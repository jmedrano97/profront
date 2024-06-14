import { AlumnosType } from '../models/AlumnosModel'
import { alumnosServices } from '../services/alumnosServices'
import { telefonosServices } from '../services/telefonosServices'

export const createAlumnoTelefonos = async (data: AlumnosType) => {
  await alumnosServices.createAlumno(data)
  const telefonos = data.telefonos
  for (const telefono of telefonos) {
    await telefonosServices.createTelefono(telefono)
  }
}
