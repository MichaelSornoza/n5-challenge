'use client'

import Products from '@/components/products'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchStockSuccess } from '@/store/slices/stock'
import { fakeData } from '@/utils/fakeData'

const Home = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStockSuccess(fakeData))
  }, [])

  return (
    <main>
      <Products />
    </main>
  )
}

export default Home
