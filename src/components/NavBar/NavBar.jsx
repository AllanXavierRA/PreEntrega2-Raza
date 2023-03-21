import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import { Menu } from 'semantic-ui-react'
import Cartwidget from "../Cartwidget/Cartwidget"

const NavBar = () => {

  return (
  
    <Menu inverted className="contenedor">
      <NavLink to='/home'><Menu.Item name='Ecommerce'/></NavLink>
      <NavLink to='/home'><Menu.Item name='Inicio'/></NavLink>
      <NavLink to='/About'><Menu.Item name='About'/></NavLink>
      <NavLink to='/Contact'><Menu.Item name='Contact'/></NavLink>

      <Menu.Item position='right'>
        <Cartwidget className='icono' count={4}/>
      </Menu.Item>
    </Menu>
      
  )
}

export default NavBar