'use client'

// import Modal from '@/components/modal'
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
        {/* <div className="img-container">
          <img src={product.image} alt={product.name} />
        </div> */}
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

              <svg
                fill="#000000"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 4 7 C 3.449219 7 3 7.449219 3 8 C 3 8.550781 3.449219 9 4 9 L 6.21875 9 L 8.84375 19.5 C 9.066406 20.390625 9.863281 21 10.78125 21 L 23.25 21 C 24.152344 21 24.917969 20.402344 25.15625 19.53125 L 27.75 10 L 25.65625 10 L 23.25 19 L 10.78125 19 L 8.15625 8.5 C 7.933594 7.609375 7.136719 7 6.21875 7 Z M 22 21 C 20.355469 21 19 22.355469 19 24 C 19 25.644531 20.355469 27 22 27 C 23.644531 27 25 25.644531 25 24 C 25 22.355469 23.644531 21 22 21 Z M 13 21 C 11.355469 21 10 22.355469 10 24 C 10 25.644531 11.355469 27 13 27 C 14.644531 27 16 25.644531 16 24 C 16 22.355469 14.644531 21 13 21 Z M 16 7 L 16 10 L 13 10 L 13 12 L 16 12 L 16 15 L 18 15 L 18 12 L 21 12 L 21 10 L 18 10 L 18 7 Z M 13 23 C 13.5625 23 14 23.4375 14 24 C 14 24.5625 13.5625 25 13 25 C 12.4375 25 12 24.5625 12 24 C 12 23.4375 12.4375 23 13 23 Z M 22 23 C 22.5625 23 23 23.4375 23 24 C 23 24.5625 22.5625 25 22 25 C 21.4375 25 21 24.5625 21 24 C 21 23.4375 21.4375 23 22 23 Z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
