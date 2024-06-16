import axios from 'axios'
import { TELEFONOS_API } from '../constants/apis'
import { TelefonosSchema, TelefonosType, TelefonosTypeWhitoutId } from '../models/TelefonosModel'
import { validateResponse } from './validateResponse'
const getAllTelefonos = async () => {
  const url = `${TELEFONOS_API.getAllTelefonos}`
  const response = await axios.get<TelefonosType[]>(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  validateResponse(response.data, TelefonosSchema, 'Telefonos')
  return response.data
}
const getTelefono = async (id: string) => {
  const url = `${TELEFONOS_API.getTelefono.replace(':id', id)}/`
  const response = await axios.get<TelefonosType>(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  validateResponse(response.data, TelefonosSchema, 'Telefono')
  return response.data
}

const createTelefono = async (telefono: TelefonosTypeWhitoutId) => {
  const url = `${TELEFONOS_API.createTelefono}`
  const response = await axios.post<TelefonosType>(url, telefono, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  validateResponse(response.data, TelefonosSchema, 'Telefono')
  return response.data
}

const updateTelefono = async (id: string, telefono: TelefonosType) => {
  const url = `${TELEFONOS_API.updateTelefono.replace(':id', id)}/`
  const response = await axios.put<TelefonosType>(url, telefono, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  validateResponse(response.data, TelefonosSchema, 'Telefono')
  return response.data
}

const deleteTelefono = async (id: string) => {
  const url = `${TELEFONOS_API.deleteTelefono.replace(':id', id)}/`
  const response = await axios.delete(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data
}

const getTelefonosByAlumno = async (idAlumno: string) => {
  const url = `${TELEFONOS_API.getTelefonosByAlumno.replace(':id', idAlumno)}/`
  const response = await axios.get<TelefonosType[]>(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  validateResponse(response.data, TelefonosSchema, 'Telefonos')
  return response.data
}

export const telefonosServices = {
  getAllTelefonos,
  createTelefono,
  updateTelefono,
  getTelefono,
  deleteTelefono,
  getTelefonosByAlumno
}
