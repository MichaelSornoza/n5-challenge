import Products from '@/components/products'
import Container from '@/components/layout/container'
import Header from '@/components/layout/header'
import { Toaster } from 'react-hot-toast'

const Home = (): JSX.Element => {
  return (
    <main id="home-root">
      <Header />
      <Container>
        <Products />
      </Container>
      {/* <div className="container">
        <h1>Home</h1>
      </div> */}
      <Toaster />
    </main>
  )
}

export default Home
