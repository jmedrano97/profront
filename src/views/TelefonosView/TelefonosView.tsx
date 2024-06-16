import  { useEffect, useState, useCallback } from 'react'
import { TelefonosType } from '../../models/TelefonosModel'
import { telefonosServices } from '../../services/telefonosServices'
import { styleInput } from '../../constants/EstilosForm'
import { Button } from '@nextui-org/react'
import toast from 'react-hot-toast'
import { useFieldArray, useForm } from 'react-hook-form'
import { RiDeleteBin2Line, RiCloseFill, RiSave2Line } from 'react-icons/ri'

interface TelefonosViewProps {
  idAlumno: string
  accion: string
}

const TelefonosView = ({ idAlumno, accion }: TelefonosViewProps) => {
  const [telefonos, setTelefonos] = useState<TelefonosType[]>([])
  const isEditMode = accion === 'editar'

  const loadTelefonos = useCallback(async () => {
    if (idAlumno === '') return
    const data = await telefonosServices.getTelefonosByAlumno(idAlumno)
    setTelefonos(data)
  }, [idAlumno])

  useEffect(() => {
    loadTelefonos()
  }, [loadTelefonos])

  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      telefonos: [{ numero: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'telefonos'
  })

  const handleDelete = async (id: number) => {
    const accepted = window.confirm('Estas seguro?')
    if (accepted) {
      await telefonosServices.deleteTelefono(id.toString())
      toast.success('Telefono eliminado', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
      loadTelefonos() // Actualiza la lista después de eliminar
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      const newTelefono = data.telefonos[0]
      await telefonosServices.createTelefono({ alumno: parseInt(idAlumno), numero: newTelefono.numero })
      toast.success('Telefono añadido', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
      loadTelefonos()
      setValue('telefonos', [{ numero: '' }])
    } catch (error) {
      toast.error('Error al guardar el telefono', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
      console.error('Error:', error)
    }
  })

  return (
    <div className='border-2 p-3'>
      <label className='block text-sm font-medium text-gray-700'>Teléfonos</label>
      <div className='mt-1'>
        {telefonos.map((field) => (
          <div key={field.id} className='flex items-center mb-2'>
            <input className={styleInput} disabled type='number' min={1} value={field.numero} />
            <Button color='danger' onClick={() => handleDelete(field.id)} className={isEditMode ? `ml-2` : 'hidden'}>
              <RiDeleteBin2Line />
            </Button>
          </div>
        ))}
      </div>
      <div className={isEditMode ? `w-full` : 'hidden'}>
        {fields.map((field, index) => (
          <div key={field.id} className='flex items-center mb-2'>
            <input
              className={styleInput}
              type='number'
              {...register(`telefonos.${index}.numero`, { required: true })}
            />
            <Button color='success' onClick={onSubmit} className={`ml-2`}>
              <RiSave2Line />
            </Button>
            <Button onClick={() => remove(index)} className={`ml-2`}>
              <RiCloseFill />
            </Button>
          </div>
        ))}
        <Button onClick={() => append({ numero: '' })} className={`mt-2`}>
          Añadir Teléfono
        </Button>
      </div>
    </div>
  )
}

export default TelefonosView
