import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import { Menu } from 'semantic-ui-react'
import Cartwidget from "../Cartwidget/Cartwidget"

const NavBar = () => {

  return (
  
    <Menu inverted className="contenedor">
      <NavLink to='/home'><Menu.Item name='Ecommerce'/></NavLink>
      <NavLink to='/'><Menu.Item name='Inicio'/></NavLink>
      <NavLink to='/shoes'><Menu.Item name='Shoes'/></NavLink>
      <NavLink to='/clothes'><Menu.Item name='Clothes'/></NavLink>
      <NavLink to='/electronics'><Menu.Item name='Electronics'/></NavLink>
      <NavLink to='/furnitures'><Menu.Item name='Furnitures'/></NavLink>
      <NavLink to='/others'><Menu.Item name='Others'/></NavLink>

      <Menu.Item position='right'>
        <Cartwidget className='icono' count={4}/>
      </Menu.Item>
    </Menu>
      
  )
}

export default NavBar