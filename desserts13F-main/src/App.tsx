import { createContext, useEffect, useState } from "react"
import DessertCard from "./components/DessertCard"
import { getDesserts } from "./services/DessertServices"
import Cart from "./components/Cart"

export type Dessert = {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
  },
  name: string,
  category: string,
  price: number
}

type CartContextType = {
  addToCart: (d:Dessert) => void,
  inCart: Dessert[]
}

export const CartContext = createContext<CartContextType>({
  addToCart:()=>{},
  inCart:[]
})

const App = () => {
  const [desserts, setDesserts] = useState<Dessert[]>([])

  const [inCart, setInCart] = useState<Dessert[]>([])

  useEffect(()=>{
    getDesserts().then(data => {
      setDesserts(data)
    })
  }, [])

  const putToCart = (dessert:Dessert) => {
    setInCart(prev => [...prev, dessert])
  }

  return (
    <CartContext.Provider value={
      {addToCart: putToCart,
       inCart: inCart
      }}>
    <main>
      <section className="dessertsWrapper">
        { desserts.map(dessert => <DessertCard {...dessert} />) }
      </section>
      <Cart />
    </main>
    </CartContext.Provider>
  )
}

export default App