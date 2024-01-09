'use client'
import Product from '@/components/products/product'
// import '@/css/styles.css'

import { type RootState } from '@/store'
import { useSelector } from 'react-redux'

const Cart = (): JSX.Element => {
  const { cart, stock } = useSelector((state: RootState) => state)

  return (
    <main className="cart-page">
      <div className="grid-products">
        {
          cart.items.map((item, index) => {
            const product = stock.items.find((product) => product.id === item.id)! // eslint-disable-line

            return (
              <div className="product" key={`cart-${index}`}>
                <Product isCart product={product} amount={item.amount} />
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Cart
