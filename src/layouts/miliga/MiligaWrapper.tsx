import { Outlet } from 'react-router-dom'
import NavbarMiliga from '../../components/miliga/NavbarMiliga'

const MiligaWrapper = () => {
  const seeBorder = false
  const maquetaBorder = seeBorder ? 'border border-white border-dashed' : ''
  return (
    // <main className='dark text-foreground bg-background'>
    <div className={`bg-backdrop min-h-screen`}>
      <NavbarMiliga />
      <div className={`flex flex-col h-full ${maquetaBorder}`}>
        <div className={`m-2 mx-8  ${maquetaBorder}`}>
          <Outlet />
        </div>
      </div>
      {/* Footer */}
    </div>

    // </main>
  )
}

export default MiligaWrapper