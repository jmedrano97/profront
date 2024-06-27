import { Outlet } from 'react-router-dom'
import NavbarMobile from '../../components/colegio/Header/NavbarMobile'

const AlumnosWrapper = () => {
  const seeBorder = false
  const maquetaBorder = seeBorder ? 'border border-white border-dashed' : ''
  return (
    <main className='light text-foreground bg-background'>
      <div className={`bg-backdrop min-h-screen`}>
        <NavbarMobile />
        <div className={`flex flex-col h-full ${maquetaBorder}`}>
          <div className={`m-2 mx-8  ${maquetaBorder}`}>
            <Outlet />
          </div>
        </div>
        {/* Footer */}
      </div>
    </main>
  )
}

export default AlumnosWrapper
