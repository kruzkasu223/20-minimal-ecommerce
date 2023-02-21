import { type NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>20/27 - Minimal Ecommerce</title>
      </Head>
      <main
        data-theme="night"
        className="flex min-h-screen flex-col gap-4 text-center"
      >
        <h1 className="m-6 text-4xl font-extrabold tracking-tight">
          20/27 - Minimal Ecommerce
        </h1>
      </main>
    </>
  )
}

export default Home
