import { createBrowserRouter } from 'react-router-dom'
import AlumnosWrapper from '../layouts/AlumnosWrapper'
import AlumnosView from '../views/AlumnosView/AlumnosView'
import { AlumnosForm } from '../views/AlumnosForm/AlumnosForm'
const router = createBrowserRouter([
  {
    path: '/',
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
  }
])

export default router
