import axios from 'axios';
import { CompetenciasType, CompetenciasTypeWhitId } from '../../models/miliga/CompetenciasModel';
import {COMPETENCIAS_API} from '../../constants/miliga/apis'


const getCompetenciasByLiga = async (id_liga:number) => {
    const url = `${COMPETENCIAS_API.getCompetenciasByLiga.replace(':id', id_liga.toString())}/`
    const response = await axios.get<CompetenciasTypeWhitId[]>(url,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response.data
};

const createCompetencia = async (competencia: CompetenciasType) => {
    const url = `${COMPETENCIAS_API.createCompetencia}`
    const response = await axios.post<CompetenciasTypeWhitId>(url, competencia, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const competenciasServices = {
    getCompetenciasByLiga,
    createCompetencia
}
