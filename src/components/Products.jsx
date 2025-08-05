import Image from 'next/image'
import React from 'react'

const Products = ({name,price,desc,image}) => {
  return (
    <div className ="border-1 border-weight  shadow-md shadow-white mt-4 p-3">
      <p>name: {name}</p>
      <p>price:{price}</p>
      <p>desc: {desc}</p>


     
      {/* <Image src={image} width={300} height={400} alt="product image"/> */}
      
    </div>
  )
}

export default Products
