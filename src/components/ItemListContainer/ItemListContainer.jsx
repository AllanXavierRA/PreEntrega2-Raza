import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from '../Card/Card';



const ItemListContainer = (props) => {
    const {list} = props;

    const [products, setProducts] = useState([])

    const apiProducts = async() => {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
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
    <div className="ui link cards">

    {products.map(product => (
      <Card key={product.id} product={product}/>
    ))}
    
    </div>
    </>
  )
}

export default ItemListContainer