import { createBrowserRouter } from 'react-router-dom'
import AlumnosWrapper from '../layouts/colegio/AlumnosWrapper'
import AlumnosView from '../views/colegio/AlumnosView/AlumnosView'
import { AlumnosForm } from '../views/colegio/AlumnosForm/AlumnosForm'
import MiligaWrapper from '../layouts/miliga/MiligaWrapper'
import CompetenciasView from '../views/MiLiga/Competencias/CompetenciasView'
const router = createBrowserRouter([
  {
    path: '/alumnos',
    element: <AlumnosWrapper />,
    children: [
      {
        index: true,
        element: <AlumnosView />
      },
      {
        path: 'alumno/:accion/:id/',
        element: <AlumnosForm />
      },
      {
        path: 'alumno/:accion/',
        element: <AlumnosForm />
      }
    ]
  },
  {
    path: '/',
    element: <MiligaWrapper />,
    children: [
      {
        index: true,
        element: <CompetenciasView />,
      }
    ]
  }
])

export default router
