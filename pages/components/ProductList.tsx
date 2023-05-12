import Image from "next/image"

export type Product = {
    node: {
      id: string
      title: string
      images: {
        nodes: { 
          url: string
          width: number
          height: number
        }[]
      }
    }
}

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const renderedProducts =  products?.map((product) => (
    <div key={product.node.id}>
      {product.node.images?.nodes?.map((image) => (
        <div key={image.url}>
          <Image src={image.url} width={image.width} height={image.height} alt={product.node.title}/>
          <img src={image.url}/>
        </div>
      ))}
      <h3>{product.node.title}</h3>
    </div>
  ))

  return (
    <div className='container m-auto grid grid-cols-3 gap-8 p-8'>
      {renderedProducts}
    </div>
  )
}

export default ProductList;