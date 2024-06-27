import ModalAddCompetencia from '../../../components/miliga/ModalAddCompetencia'
import { CompetenciasType } from '../../../models/miliga/CompetenciasModel'
import CompetenciasTable from './CompetenciasTable'

const CompetenciasView = () => {

  return (
    <div>
      <div className='pb-5'>
        <h1 className='text-4xl font-bold'>COMPETENCIAS</h1>

      </div>
      <CompetenciasTable />
      <ModalAddCompetencia />
    </div>
  )
}

export default CompetenciasView