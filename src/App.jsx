import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer list='asdasdasdasd'/>}/>
      <Route path='/category/:id' element={<ItemListContainer list='asdasdasdasd'/>}/>
      <Route path='/item/:id' element={<ItemListContainer list='asdasdasdasd'/>}/>
    </Routes>
    </>
  )
}

export default App
