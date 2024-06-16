import AlumnosTable from './AlumnosTable/AlumnosTable'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

const AlumnosView = () => {
  const navigate = useNavigate()
  const handleNewAlumno = () => {
    navigate('/alumno/crear')
  }
  return (
    <div className='w-full flex flex-row justify-between items-center'>
      <div className='flex-1'>
        <h1 className='text-4xl font-bold text-black'>Alumnos 23</h1>

        <div className='flex flex-row gap-1 mt-8'>
          <Button color='primary' onClick={handleNewAlumno}>
            Nuevo alumno
          </Button>
        </div>
        <div className='flex flex-col justify-between flex-1 w-full mt-1 h-auto min-h-auto'>
          <AlumnosTable />
        </div>
      </div>
    </div>
  )
}

export default AlumnosView
