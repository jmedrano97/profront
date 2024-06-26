import toast from 'react-hot-toast'
import { RiDeleteBin2Line, RiEdit2Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { alumnosServices } from '../../services/colegio/alumnosServices'

interface OptionsActionProps {
  id: string
}

const OptionsAction = ({ id }: OptionsActionProps) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-around'>
      <span
        className='cursor-pointer text-blue-600'
        onClick={() => {
          navigate(`/alumnos/alumno/editar/${id}`)
        }}
      >
        <RiEdit2Fill />
      </span>
      <span
        className='cursor-pointer text-red-600'
        onClick={async () => {
          const accepted = window.confirm('Estas seguro?')
          if (accepted) {
            await alumnosServices.deleteAlumno(id)
            toast.success('Alumno eliminado', {
              position: 'bottom-right',
              style: {
                background: '#101010',
                color: '#fff'
              }
            })
            navigate('/')
          }
        }}
      >
        <RiDeleteBin2Line />
      </span>
    </div>
  )
}

export default OptionsAction
