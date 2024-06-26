import { AlumnosType } from '../../models/colegio/AlumnosModel'
import { alumnosServices } from '../../services/colegio/alumnosServices'
import { telefonosServices } from '../../services/colegio/telefonosServices'

export const createAlumnoTelefonos = async (data: AlumnosType) => {
  await alumnosServices.createAlumno(data)
  const telefonos = data.telefonos
  for (const telefono of telefonos) {
    await telefonosServices.createTelefono(telefono)
  }
}
