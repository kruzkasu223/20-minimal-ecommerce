import { type NextPage } from "next"
import Head from "next/head"
import { Header, ProductCard } from "~/components"
import { PRODUCTS } from "~/data"
import { useCart } from "~/useCart"

const Home: NextPage = () => {
  const { handleAddToCart } = useCart()

  return (
    <>
      <Head>
        <title>20/27 - Minimal Ecommerce</title>
      </Head>
      <main
        data-theme="night"
        className="flex min-h-screen flex-col gap-4 text-center"
      >
        <Header />
        <h1 className="m-5 text-3xl font-bold tracking-wide">Products</h1>
        <div className="mb-8 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
