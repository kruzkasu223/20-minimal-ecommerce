import { type NextPage } from "next"
import Head from "next/head"
import { Header, ProductCard } from "~/components"
import { useCart } from "~/useCart"

const Home: NextPage = () => {
  const { cart, handleRemoveFromCart, handleUpdateQuantity } = useCart()
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
        <h1 className="m-5 text-3xl font-bold tracking-wide">Cart</h1>
        <div className="mb-8 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {cart.length === 0 && (
              <h1 className="text-2xl font-bold">cart is empty</h1>
            )}
            {cart.map((product) => (
              <ProductCard
                isCart
                key={product.productId}
                product={product.product}
                quantity={product.quantity}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
