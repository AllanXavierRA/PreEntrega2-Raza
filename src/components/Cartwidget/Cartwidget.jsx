import { Icon, Label, Menu } from 'semantic-ui-react'
import './Cartwidget.css'


const Cartwidget = (props) => {
    const {count} = props;
  return (
    <>
        <Menu.Item as='a'>
            <Icon name='shopping cart' size='large'/>
            <Label color='red' floating>
            {count}
            </Label>
        </Menu.Item>
    </>
  )
}

export default Cartwidget