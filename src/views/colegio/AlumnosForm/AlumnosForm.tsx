import { Button } from '@nextui-org/react'
import { useForm, useFieldArray } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { AlumnosType } from '../../../models/colegio/AlumnosModel'
import { alumnosServices } from '../../../services/colegio/alumnosServices'
import { styleInput, styleLabel } from '../../../constants/colegio/EstilosForm'
import OptionsAction from '../../../components/colegio/OptionsAction'
import { useAlumnos } from '../../../hooks/colegio/useAlumnos'
import TelefonosView from '../TelefonosView/TelefonosView'
const verbo: { [key: string]: string } = {
  crear: 'Nuevo alumno',
  editar: 'Editar alumno',
  ver: 'Alumno'
}

export const AlumnosForm = () => {
  const navigate = useNavigate()
  const params = useParams()
  const idAlumno = params.id || ''
  const accionAlumno = params.accion || ''
  const isViewMode = accionAlumno === 'ver'
  const isEditMode = accionAlumno === 'editar'
  const isCreateMode = accionAlumno === 'crear'
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<AlumnosType>({})

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'telefonos'
  })

  const onSubmit = handleSubmit(async (data) => {
    console.log('accionAlumno: ', accionAlumno)
    try {
      if (accionAlumno === 'editar') {
        const response = await alumnosServices.updateAlumno(idAlumno, data)
        toast.success('Alumno actualizado', {
          position: 'bottom-right',
          style: {
            background: '#101010',
            color: '#fff'
          }
        })
        navigate(`alumnos/alumno/ver/${response.id}`)
      } else if (accionAlumno === 'crear') {
        await useAlumnos.createAlumnoTelefonos(data)
        toast.success('Nuevo Alumno Añadido', {
          position: 'bottom-right',
          style: {
            background: '#101010',
            color: '#fff'
          }
        })
        navigate('/alumnos/')
      }
    } catch (error) {
      toast.error('Error al guardar el alumno', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
      console.error('Error:', error)
    }
  })

  useEffect(() => {
    if (idAlumno !== '') {
      const loadAlumno = async () => {
        const data = await alumnosServices.getAlumno(idAlumno)
        setValue('nombres', data.nombres || '')
        setValue('apellido_paterno', data.apellido_paterno || '')
        setValue('apellido_materno', data.apellido_materno || '')
        setValue('fecha_nacimiento', data.fecha_nacimiento || '')
        setValue('avenida_calle', data.avenida_calle || '')
        setValue('localidad', data.localidad || '')
        setValue('alcaldia_municipio', data.alcaldia_municipio || '')
        setValue('estado', data.estado || '')
        setValue('pais', data.pais || '')
        setValue('telefonos', data.telefonos || [])
      }
      loadAlumno()
    }
  }, [idAlumno, setValue])

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-black mb-4'>{verbo[accionAlumno]}</h1>
        {isViewMode ? <OptionsAction id={idAlumno} /> : null}
      </div>
      <form className='w-full flex justify-around pt-4' onSubmit={onSubmit}>
        <div id='pt1' className='w-full mx-8'>
          <div className='mb-4'>
            <label className={styleLabel}>Nombres</label>
            <input className={styleInput} disabled={isViewMode} {...register('nombres', { required: true })} />
            {errors.nombres && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>Apellido Paterno</label>
            <input className={styleInput} disabled={isViewMode} {...register('apellido_paterno', { required: true })} />
            {errors.apellido_paterno && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>Apellido Materno</label>
            <input className={styleInput} disabled={isViewMode} {...register('apellido_materno', { required: true })} />
            {errors.apellido_materno && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>Fecha de Nacimiento</label>
            <input
              className={styleInput}
              disabled={isViewMode}
              type='date'
              {...register('fecha_nacimiento', { required: true })}
            />
            {errors.fecha_nacimiento && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>Avenida/Calle</label>
            <input className={styleInput} disabled={isViewMode} {...register('avenida_calle', { required: true })} />
            {errors.avenida_calle && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>Localidad</label>
            <input className={styleInput} disabled={isViewMode} {...register('localidad', { required: true })} />
            {errors.localidad && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
        </div>
        <div id='pt2' className='w-full mx-8'>
          <div className='mb-4'>
            <label className={styleLabel}>Alcaldía/Municipio</label>
            <input
              className={styleInput}
              disabled={isViewMode}
              {...register('alcaldia_municipio', { required: true })}
            />
            {errors.alcaldia_municipio && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>Estado</label>
            <input className={styleInput} disabled={isViewMode} {...register('estado', { required: true })} />
            {errors.estado && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className='mb-4'>
            <label className={styleLabel}>País</label>
            <input className={styleInput} disabled={isViewMode} {...register('pais', { required: true })} />
            {errors.pais && <span className='text-xs text-red-500'>Este campo es necesario</span>}
          </div>
          <div className={`flex  pb-2`}>
            <Button color='primary' type='submit' className={isEditMode ? 'w-full' : 'hidden'}>
              Editar Alumno
            </Button>
          </div>
          {isCreateMode ? (
            <>
              <div className={'mb-4 border-1 p-3'}>
                <label className='block text-sm font-medium text-gray-700'>Teléfonos</label>
                {fields.map((field, index) => (
                  <div key={field.id} className='flex items-center mb-2'>
                    <input
                      className={styleInput}
                      disabled={isViewMode}
                      type='number'
                      {...register(`telefonos.${index}.numero`, { required: true })}
                    />
                    <Button color='danger' onClick={() => remove(index)} className={`ml-2`}>
                      Eliminar
                    </Button>
                  </div>
                ))}
                <Button onClick={() => append({ id: 0, alumno: 0, numero: '' })} className={`mt-2`}>
                  Añadir Teléfono
                </Button>
              </div>
              <div className='flex justify-end pt-6'>
                <Button color='primary' type='submit' className='w-full'>
                  Crear Alumno
                </Button>
              </div>
            </>
          ) : (
            <TelefonosView idAlumno={idAlumno} accion={accionAlumno} />
          )}
        </div>
      </form>
    </div>
  )
}

export default AlumnosForm
