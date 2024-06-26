const MILIGA_BASE_URL = import.meta.env.VITE_MILIGA_BASE_URL as string

export const COMPETENCIAS_API = {
    getCompetencias:`${MILIGA_BASE_URL}/competencias`,
    getCompetenciasByLiga:`${MILIGA_BASE_URL}/competencias/CompetenciasByLiga/:id`,
    getCompetencia:`${MILIGA_BASE_URL}/competencias/:id`,
    createCompetencia:`${MILIGA_BASE_URL}/competencias`,
    updateCompetencia:`${MILIGA_BASE_URL}/competencias/:id`,
    deleteCompetencia:`${MILIGA_BASE_URL}/competencias/:id`,
}