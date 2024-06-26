import { AlumnosType } from '../../models/colegio/AlumnosModel'
import { alumnosServices } from '../../services/colegio/alumnosServices'
import { telefonosServices } from '../../services/colegio/telefonosServices'

const createAlumnoTelefonos = async (data: AlumnosType) => {
  const response = await alumnosServices.createAlumno(data)
  const idAlumno = response.id
  const telefonos = data.telefonos
  for (const telefono of telefonos) {
    telefono.alumno = parseInt(idAlumno)
    await telefonosServices.createTelefono(telefono)
  }

  return response
}

const updateAlumnoTelefonos = async (id: string, data: AlumnosType) => {
  const response = await alumnosServices.updateAlumno(id, data)
  const telefonos = data.telefonos
  for (const telefono of telefonos) {
    await telefonosServices.updateTelefono(telefono.id.toString(), telefono)
  }

  return response
}

export const useAlumnos = {
  createAlumnoTelefonos,
  updateAlumnoTelefonos
}
