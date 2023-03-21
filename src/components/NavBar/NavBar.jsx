import "./NavBar.css"
import { Menu } from 'semantic-ui-react'
import Cartwidget from "../Cartwidget/Cartwidget"

const NavBar = () => {

  return (
    <Menu inverted className="contenedor">
      <Menu.Item name='Ecommerce'/>
      <Menu.Item name='Inicio' position="right"/>
      <Menu.Item name='About' />
      <Menu.Item name='Contact' />
      <Menu.Item position='right'>
        <Cartwidget className='icono' count={4}/>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar