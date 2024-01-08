'use client'

import CartPlus from '@/components/icons/cart/plus'
import { addToCart } from '@/store/slices/cart'
import type { IProduct } from '@/types/products'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export interface IProductProps {
  product: IProduct
}

const Product = ({ product }: IProductProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)

  const dispatch = useDispatch()

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

  const addItemToCart = (): void => {
    dispatch(addToCart({
      id: product.id,
      amount: counter
    }))
    toast.success('Producto agregado al carrito')
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
        <header>
          <div>
            <h2>{product.name}</h2>
            <span>$ {product.price}</span>
          </div>
        </header>
        <footer>
          <div className="counter-container">
            <div className="counter">
              <button type="button" className="primary" onClick={() => { handleCounter('') }}>-</button>
              <span>{counter} / {product.amount}</span>
              <button type="button" className="primary" onClick={() => { handleCounter('add') }}>+</button>
            </div>
            <div className="cart-button-container">
              <button type="button" disabled={counter === 0} className="icon-button success" onClick={addItemToCart}>
                <CartPlus />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Product
