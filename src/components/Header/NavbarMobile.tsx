import React from 'react'
import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  console.log(isMenuOpen)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className='sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link color='foreground' href='/'>
            Alumnos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/alumno/crear' aria-current='page'>
            Crear alumno
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarMobile
