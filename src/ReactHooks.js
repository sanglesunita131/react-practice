import React,{useState,useEffect} from 'react';

export default function ReactHooks(){
  const[count,setCount]=useState(0);
  useEffect(()=>{
    console.log(count==9);
  })
  return(
    <div>
      <h1>Welcome to React Hooks</h1>
      <h2>Number {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}