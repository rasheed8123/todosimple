
import { useState } from "react";
import "../App.css";
import { Main } from "./todolist.jsx"

export const Inventory = () => {
  const [arr,setarr] = useState([])
  const [text,settext] = useState("")
  const addcart = (val) =>{
    if(val==""){
      return
    }
    setarr([...arr,text])
  }
  return (
    <div id="main">
      <div><input type="text" onChange={(e)=>{
        settext(e.target.value)
      }}></input>
      <button type="submit" onClick={()=>addcart(text)}>ADD TO LIST</button></div>
      <Main arr={arr}/>
    </div>
  )
}
