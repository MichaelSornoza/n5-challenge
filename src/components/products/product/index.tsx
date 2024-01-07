'use client'

import CartPlus from '@/components/icons/cart/plus'
import type { IProduct } from '@/types/products'
import { useState } from 'react'
import toast from 'react-hot-toast'

export interface IProductProps {
  product: IProduct
}

const Product = ({ product }: IProductProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)

  const handleCounter = (type: string): void => {
    if (type === 'add') {
      if (counter === product.amount) {
        toast.error('No puedes agregar más productos de los que hay en stock', {
          icon: '⚠️',
          duration: 3000
        })

        return
      }

      setCounter(counter + 1)
    } else {
      if (counter === 0) {
        return
      }

      setCounter(counter - 1)
    }
  }

  return (
    <div className="product"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="content">
        <div className="title">
          <h2>{product.name}</h2>
        </div>
        <div className="price">
          <span>$ {product.price}</span>
        </div>
        <div className="counter-container">
          <div className="counter">
            <button type="button" onClick={() => { handleCounter('') }}>-</button>
            <span>{counter} / {product.amount}</span>
            <button type="button" onClick={() => { handleCounter('add') }}>+</button>
          </div>
          <div className="cart-button-container">
            <button type="button" className="icon-button">
              <CartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
