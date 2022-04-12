import { useState } from "react";
import "../App.css";

export const Main = ({arr}) => {
    
    return (<div id="under">{arr.map((e)=>{
        return <div>{e}</div>
      })}</div>)
}