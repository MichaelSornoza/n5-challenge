import Products from '@/components/products'
import Container from '@/components/layout/container'
import Header from '@/components/layout/header'

const Home = (): JSX.Element => {
  return (
    <main>
      <Header />
      <Container>
        <input type='text' placeholder='Texto' />
        <Products />
      </Container>
      {/* <div className="container">
        <h1>Home</h1>
      </div> */}
    </main>
  )
}

export default Home
