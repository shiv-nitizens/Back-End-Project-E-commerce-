import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title";
import Item from "../components/items";
const Collection = () => {
  const {products}= useContext(ShopContext)
  return (
    <div className='max-padd-container py-16 pt-28 bg-primary'>
       <Title
        title1={"All"}
        title2={"Product"}
        titleStyles={"pb-10"}
      />
      <div className='grid grid-cols-1 sm:grid-cols md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 '>
        {products.map((product)=>(
          <Item key={product._id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Collection