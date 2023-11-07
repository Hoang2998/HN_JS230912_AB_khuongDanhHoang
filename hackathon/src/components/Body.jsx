import React,{useState} from 'react'
import './Body.css'

export default function Body({products,setProductS,setMoney,setCarT,cart,money,total,setTotal}) {

    // const[total,setTotal] = useState("")
    // const[product,setProduct] = useState("")

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
  return (
    <div className='body'>
        {
            products.map((item,index)=>{
                return <div key={index} style={{width:'30vw',height:'20vw'}} className='sameItem'>
                    <div style={{width:'100%',height:'80%'}}>
                        <img src={item.img} alt="" width={'100%'} height={'90%'}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span>{item.name}</span>
                    <span>{item.price}$</span>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <button onClick={()=>{interProduct(item.id)}}>Interest</button>
                        <span>{item.quantity}</span>
                        <button onClick={()=>{addProduct(item.id)}}>Add</button>
                    </div>
                </div>
            })
        }
    </div>
  )
}
