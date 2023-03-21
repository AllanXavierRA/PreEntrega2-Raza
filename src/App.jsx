import { Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemContainer from './components/ItemContainer/ItemContainer'
import { useEffect, useState } from 'react'

function App() {
  const { id } = useParams()

  const [products, setProducts] = useState([])
  
  const apiProducts = async() => {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
      return res.data;
    }
    
    
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiProducts();
      setProducts(response);
    };
    
    fetchData();
  }, []);

  


  return (
    <>
    <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer products={products}/>}/>
      <Route path='/category/:id' element={<ItemListContainer products={products}/>}/>
      <Route path='/item/:id' element={<ItemContainer products={products}/>}/>
      <Route path='/shoes' element={<ItemListContainer cat='6' products={products}/>}/>
      <Route path='/clothes' element={<ItemListContainer cat='1' products={products}/>}/>
      <Route path='/electronics' element={<ItemListContainer cat='2' products={products}/>}/>
      <Route path='/furnitures' element={<ItemListContainer cat='3' products={products}/>}/>
      <Route path='/others' element={<ItemListContainer cat='5' products={products}/>}/>
    </Routes>
    </>
  )
}

export default App
