'use client'

import Products from '@/components/products'
import Container from '@/components/layout/container'
import { Toaster } from 'react-hot-toast'
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
    <main id="home-root">
      <Container>
        <Products />
      </Container>
      <Toaster />
    </main>
  )
}

export default Home
