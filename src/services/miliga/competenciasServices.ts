import axios from 'axios';
import { CompetenciasTypeWhitId } from '../../models/miliga/CompetenciasModel';
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

export const competenciasServices = {
    getCompetenciasByLiga
}
