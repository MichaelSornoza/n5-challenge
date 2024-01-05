import type { IProduct } from '@/types/products'
import { fakeData } from '@/utils/fakeData'

import Product from './product'

const Products = (): JSX.Element => {
  return (
    <section className="grid-products">
      {
        fakeData.map((product: IProduct, index: number) => (
          <Product product={product} key={`products-${index}`} />
        ))
      }
    </section>
  )
}

export default Products
