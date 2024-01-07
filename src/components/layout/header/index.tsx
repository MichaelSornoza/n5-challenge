'use client'

import Cart from '@/components/icons/cart'

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="cart">
        <button type="button" className="">
          <Cart />
        </button>
      </div>
    </header>
  )
}

export default Header
