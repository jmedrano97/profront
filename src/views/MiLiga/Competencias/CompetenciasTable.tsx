import { useEffect, useState } from 'react'
import { competenciasServices } from '../../../services/miliga/competenciasServices'
import { CompetenciasType, CompetenciasTypeWhitId } from '../../../models/miliga/CompetenciasModel'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { COMPETENCIAS_HEADERS_TABLE } from '../../../constants/miliga/MiligaConstants'

const CompetenciasTable = () => {
  const [competencias, setCompetencias] = useState<CompetenciasTypeWhitId[]>([])

  useEffect(() => {
    const fetchCompetenciasByLiga = async () => {
      try {
        const data = await competenciasServices.getCompetenciasByLiga(2)
        setCompetencias(data)

      } catch (error){
        console.error('Error competencias:', error)
      }
    }
    fetchCompetenciasByLiga()
  }, [])

  return (
    <div className='flex flex-col'>
      <div>
        <Table aria-label='Tabla de competencias'>
          <TableHeader columns={COMPETENCIAS_HEADERS_TABLE}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={competencias}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell key={columnKey}>
                    {item[columnKey as keyof CompetenciasType]}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default CompetenciasTable