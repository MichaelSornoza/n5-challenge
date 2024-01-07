import type { IProduct } from '@/types/products'
import { fakeData } from '@/utils/fakeData'

import Product from './product'
import Carousel from '../carousel'

const Products = (): JSX.Element => {
  const items = fakeData.map((product: IProduct, index: number) => (
    <Product product={product} key={`products-${index}`} />
  ))

  return (
    <section className="container">
      {/* {
        fakeData.map((product: IProduct, index: number) => (
          <Product product={product} key={`products-${index}`} />
        ))
      } */}
      <Carousel>
        {items}
      </Carousel>
    </section>
  )
}

export default Products
