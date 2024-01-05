import type { IProduct } from '@/types/products'

export interface IProductProps {
  product: IProduct
}

const Product = ({ product }: IProductProps): JSX.Element => {
  return (
    <div className="product">
      <div className="grid-products__item__title">
        <h2>{product.name}</h2>
      </div>
      <div className="grid-products__item__price">
        <span>$ {product.price}</span>
      </div>
      <div className="button-container">
        <button type="button">Add to cart</button>
      </div>
    </div>
  )
}

export default Product
