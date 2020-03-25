import React, { useEffect,useState } from "react";

const Counter=(props)=>{

  const [state,stateFun]=useState({
      name:props.name
  });

    useEffect(()=>{

      console.log("useEffect execute");
      stateFun({
        name:props.name
      })

    },[props.name])

  return (<div>

      <p>I am student {state.name}</p>
  
  </div>)
}
export default Counter;
