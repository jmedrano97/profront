
const ALUMNOS_BASE_URL = import.meta.env.VITE_ALUMNOS_BASE_URL as string

export const ALUMNOS_API = {
  getAllAlumnos: `${ALUMNOS_BASE_URL}/alumnos`,
  getAlumno: `${ALUMNOS_BASE_URL}/alumnos/:id`,
  createAlumno: `${ALUMNOS_BASE_URL}/alumnos/`,
  updateAlumno: `${ALUMNOS_BASE_URL}/alumnos/:id`,
  deleteAlumno: `${ALUMNOS_BASE_URL}/alumnos/:id`
}

export const TELEFONOS_API = {
  getAllTelefonos: `${ALUMNOS_BASE_URL}/telefonos`,
  createTelefono: `${ALUMNOS_BASE_URL}/telefonos/`,
  updateTelefono: `${ALUMNOS_BASE_URL}/telefonos/:id`,
  getTelefono: `${ALUMNOS_BASE_URL}/telefonos/:id`,
  deleteTelefono: `${ALUMNOS_BASE_URL}/telefonos/:id`,
  getTelefonosByAlumno: `${ALUMNOS_BASE_URL}/telefonos/telefonosByAlumno/:id`
}
