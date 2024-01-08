'use client'

import type { IProduct } from '@/types/products'

import Product from './product'
import { useSelector } from 'react-redux'
import { type RootState } from '@/store'

const Products = (): JSX.Element => {
  const { loading, items } = useSelector((state: RootState) => state.stock)

  return (
    <section className="grid-products">
      {
        !loading && items.map((product: IProduct, index: number) => (
          <Product product={product} key={`products-${index}`} />
        ))
      }
    </section>
  )
}

export default Products
