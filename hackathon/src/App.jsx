import React,{useState} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart'
import uuid from 'react-uuid'


export default function App() {
  const [money,setMoney] = useState("1000000000")
  const[total,setTotal] = useState("")
  const [products,setProducts] = useState([
    {
      name:"car1",
      id:uuid(),
      price:2000,
      quantity:0,
      img:"./img/car1.webp"
    },
    {
      name:"car2",
      id:uuid(),
      price:2500,
      quantity:0,
      img:"./img/car2.webp"
    },
    {
      name:"car3",
      id:uuid(),
      price:3000,
      quantity:0,
      img:"./img/car3.avif"
    },
    {
      name:"car4",
      id:uuid(),
      price:2800,
      quantity:0,
      img:"./img/car4.jpg"
    },
    {
      name:"car5",
      id:uuid(),
      price:4000,
      quantity:0,
      img:"./img/car5.webp"
    },
    {
      name:"car6",
      id:uuid(),
      price:3500,
      quantity:0,
      img:"./img/car6.webp"
    },
    {
      name:"car7",
      id:uuid(),
      price:4800,
      quantity:0,
      img:"./img/car7.webp"
    },
    {
      name:"car8",
      id:uuid(),
      price:10000,
      quantity:0,
      img:"./img/car8.jpg"
    },
    {
      name:"car9",
      id:uuid(),
      price:12000,
      quantity:0,
      img:"./img/car9.webp"
    },
    {
      name:"car10",
      id:uuid(),
      price:20000,
      quantity:0,
      img:"./img/car10.webp"
    },
    {
      name:"car1",
      id:uuid(),
      price:2000,
      quantity:0,
      img:"./img/car1.webp"
    },

  ])
    const [cart,setCart] = useState([])
  return (
    <div>
      <Header money={money}></Header>
      <Body 
      setMoney={setMoney}
      products={products}
      setProductS={setProducts}
      setCarT={setCart}
      cart={cart}
      money={money}
      total={total}
      setTotal={setTotal}
      ></Body>
      <Cart
      setMoney={setMoney}
      products={products}
      setProductS={setProducts}
      setCarT={setCart}
      cart={cart}
      money={money}
      total={total}
      setTotal={setTotal}
      ></Cart>
    </div>
  )
}

