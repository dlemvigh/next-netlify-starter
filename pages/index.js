import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState, useCallback } from "react"

export default function Home() {
  console.log("hello ye who looks in consoles");
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount(x => x + 1), []);
  const decrement = useCallback(() => setCount(x => Math.max(0, x - 1)), []);
  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!!!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          count: ({count}) <button onClick={increment}>+++</button><button onClick={decrement}>---</button>
        </div>
    
      </main>

      <Footer />
    </div>
  )
}
