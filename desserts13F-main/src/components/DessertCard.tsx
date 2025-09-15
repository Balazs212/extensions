import { useContext, useState } from 'react'
import { CartContext, type Dessert } from '../App'
import AddToCartBtn from './AddToCartBtn'

const DessertCard = (props: Dessert) => {
  const [count, setCount] = useState(0)

  const ctx = useContext(CartContext)

  const increase = () => {
    setCount(prev => prev + 1)
    ctx.addToCart(props)
  }
  const decrease = () => {setCount(prev => prev - 1)}

  return (
    <div className='dessertCard'>
        <img src={props.image.desktop}/>
        <AddToCartBtn
          count={count}
          increase={increase}
          decrease={decrease}
        />
        <h2 className='category'>{props.category}</h2>
        <h1 className='dessertName'>{props.name}</h1>
        <h3 className='price'>${props.price}</h3>
    </div>
  )
}

export default DessertCard