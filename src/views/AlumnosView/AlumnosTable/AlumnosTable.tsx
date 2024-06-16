import React, { useEffect, useState } from 'react'
import { AlumnosTypeWhitoutTelefonos } from '../../../models/AlumnosModel'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from '@nextui-org/react'
import { ALUMNOS_HEADERS_TABLE } from '../../../constants/AlumnosConstants'
import { RiEyeLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { alumnosServices } from '../../../services/alumnosServices'

const AlumnosTable = () => {
  const navigate = useNavigate()
  const [alumnosTable, setAlumnosTable] = useState<AlumnosTypeWhitoutTelefonos[]>([])

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const data = await alumnosServices.getAllAlumnos()
        setAlumnosTable(data)
      } catch (error) {
        console.error('Error alumnos:', error)
      }
    }
    fetchAlumnos()
  }, [])

  const handleDetailClick = (id: number) => {
    navigate(`alumno/ver/${id}`)
  }

  const renderCell = React.useCallback(
    (alumno: AlumnosTypeWhitoutTelefonos, columnKey: keyof AlumnosTypeWhitoutTelefonos) => {
      const cellValue = alumno[columnKey]

      switch (columnKey) {
        case 'estado':
          return (
            <div className='relative flex items-center gap-2'>
              <Tooltip content='Detalles'>
                <span
                  className='text-lg text-default-400 cursor-pointer active:opacity-50'
                  onClick={() => handleDetailClick(parseInt(alumno.id))}
                >
                  <RiEyeLine />
                </span>
              </Tooltip>
            </div>
          )
        default:
          return cellValue
      }
    },
    []
  )

  return (
    <div className='flex flex-col'>
      <div>
        <Table aria-label='Example table with dynamic content'>
          <TableHeader columns={ALUMNOS_HEADERS_TABLE}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={alumnosTable}>
            {(item) => (
              // aqui es donde me da el error en columnKey
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey as keyof AlumnosTypeWhitoutTelefonos)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AlumnosTable
