import React from 'react'

const Product = async({ params }: { params: Promise<{productId: string}> }) => {
  const productId=(await params).productId
  return (
    <div>Product{productId}</div>
  )
}

export default Product

// export default async function Product ({ 
//   params, 
// }: { 
//   params: Promise<{productId: string}>
// })  {
//   const productId=(await params).productId
//   return (
//     <div>Product : {productId}</div>
//   )
// }