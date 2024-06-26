import axios from 'axios'
import { ALUMNOS_API } from '../../constants/colegio/apis'
import { AlumnosType, AlumnosSchema,AlumnosTypeWhitId } from '../../models/colegio/AlumnosModel'
import { validateResponse } from './validateResponse'
import { z } from 'zod'

const getAllAlumnos = async () => {
  const url = `${ALUMNOS_API.getAllAlumnos}`
  const response = await axios.get<AlumnosTypeWhitId[]>(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('response getAllAlumnos services: ', response.data)
  validateResponse(response.data, z.array(AlumnosSchema), 'Alumnos')
  return response.data
}

const getAlumno = async (id: string) => {
  const url = `${ALUMNOS_API.getAlumno.replace(':id', id)}/`
  const response = await axios.get<AlumnosType>(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('response getAlumno services: ', response.data)
  validateResponse(response.data, AlumnosSchema, 'Alumno')
  return response.data
}

// agregar un id a este alumnostype


const createAlumno = async (alumno: AlumnosType) => {
  const url = `${ALUMNOS_API.createAlumno}`
  const response = await axios.post<AlumnosTypeWhitId>(url, alumno, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('response createAlumno services: ', response.data)
  validateResponse(response.data, AlumnosSchema, 'Alumno')
  return response.data
}

const updateAlumno = async (id: string, alumno: AlumnosType) => {
  const url = `${ALUMNOS_API.updateAlumno.replace(':id', id)}/`
  const response = await axios.put<AlumnosTypeWhitId>(url, alumno, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('response updateAlumno services: ', response.data)
  validateResponse(response.data, AlumnosSchema, 'Alumno')
  return response.data
}

const deleteAlumno = async (id: string) => {
  const url = `${ALUMNOS_API.deleteAlumno.replace(':id', id)}/`
  const response = await axios.delete(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('response deleteAlumno services: ', response.data)
  return response.data
}

export const alumnosServices = {
  getAllAlumnos,
  createAlumno,
  getAlumno,
  updateAlumno,
  deleteAlumno
}
