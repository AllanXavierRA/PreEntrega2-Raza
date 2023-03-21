import { useEffect, useState } from 'react';
import { NavLink, } from 'react-router-dom'
import Card from '../Card/Card';



const ItemListContainer = (props) => {
    const {products, cat} = props;

    const category = Number(cat)
    


  return (
    <>


    <div className="ui link cards">

    {category === 1 ?
  products.filter(product => product.category.id === 1).map(product => (
    <Card key={product.id} product={product} />
  ))
  :
  category === 2 ?
    products.filter(product => product.category.id === 2).map(product => (
      <Card key={product.id} product={product} />
    ))
    :
    category === 3 ?
      products.filter(product => product.category.id === 3).map(product => (
        <Card key={product.id} product={product} />
      ))
      :
      category === 5 ?
        products.filter(product => product.category.id === 5).map(product => (
          <Card key={product.id} product={product} />
        ))
        :
        category === 6 ?
          products.filter(product => product.category.id === 6).map(product => (
            <Card key={product.id} product={product} />
          ))
          :
          products.map(product => (
            <Card key={product.id} product={product} />
          ))
}
   
    
    </div>

    </>
  )
}

export default ItemListContainer