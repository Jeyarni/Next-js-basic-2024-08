import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async({params}:Props):Promise<Metadata>=>{
  const id = (await params).productId
  return {
    title:`Product ${id}`
  }
}
// const Product = async({ params }: { params: Promise<{productId: string}> }) => {
//   const productId=(await params).productId
//   return (
//     <div>Product{productId}</div>
//   )
// }
// export default Product;

export default async function Product({params}: Props) {
  const productId = (await params).productId;
  return <div>Product : {productId}</div>;
}


