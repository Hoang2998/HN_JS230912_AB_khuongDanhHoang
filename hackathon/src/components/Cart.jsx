import React from 'react'
import './cart.css'

export default function Cart({products,setProductS,setMoney,setCarT,cart,money,total,setTotal}) {
    console.log(total);

    const addProduct = (id)=>{
        let index = products.findIndex((item)=>{
            return item.id == id
        })
       let arr = [...products]
       arr[index].quantity = arr[index].quantity + 1
        
       let indexCart = cart.findIndex((item)=>{
         return item.id == id
       })
       console.log(indexCart); 
       if(indexCart == -1){
        let obj = {
            name:arr[index].name,
            id:arr[index].id,
            quantity:arr[index].quantity,
            price:arr[index].price
           }
            let newMoney = money - arr[index].quantity*arr[index].price
            setMoney(newMoney)
            setCarT([...cart,obj])
            let total = cart.reduce((a,item)=>{
                return a+ item.price*item.quantity
               },0)
                setTotal(total)
       }else{
            let newArr = [...cart]
            newArr[indexCart].quantity = newArr[indexCart].quantity+1
            setCarT(newArr)
            let total = cart.reduce((a,item)=>{
                return a+ item.price*item.quantity
               },0)
                setTotal(total)
               let newMoney = money-total
               setMoney(newMoney)
       }
       let total = cart.reduce((a,item)=>{
        return a+ item.price*item.quantity
       },0)
        setTotal(total)
       setProductS(arr)
    //    console.log(cart);
  }  

    const interProduct = (id)=>{
        let index = products.findIndex((item)=>{
            return item.id == id
        })
       let arr = [...products]
       arr[index].quantity = arr[index].quantity - 1
       if(arr[index].quantity <0){
        arr[index].quantity = 0
       } 
       let indexCart = cart.findIndex((item)=>{
         return item.id == id
       })
       console.log(indexCart); 
            let newArr = [...cart]
            newArr[indexCart].quantity = newArr[indexCart].quantity - 1
            if(newArr[indexCart].quantity <0){
                newArr[indexCart].quantity = 0
                newArr.splice(indexCart,1)
            }
            setCarT(newArr)
            let total = cart.reduce((a,item)=>{
            return a+ item.price*item.quantity
                },0)
                setTotal(total)
            let newMoney = 1000000000 - total
            setMoney(newMoney)
            setProductS(arr)
    //    console.log(cart);
    }  
    const resetCart = ()=>{
        setCarT([])
    }
  return (
    <div className='cart'>
        <h2>My Cart</h2>
        <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        cart.map((item,index)=>{
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={()=>{addProduct(item.id)}}>+</button>
                                    <button onClick={()=>{interProduct(item.id)}}>-</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                <p>Total:{total}</p>
                <button onClick={resetCart}>RESET</button>
        </table>
    </div>
  )
}
