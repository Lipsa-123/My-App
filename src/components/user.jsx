import React, {useState, useEffect} from "react";

const User = (props) =>{
    const [planet, setPlanet]=useState("earth");
    // console.log(planet);
    //useState returns first the value, then second the function to update the value. So we can put it that in an arra
    // setPlanet("Mars"); // -> It will give error of infinity loop
    //componentDidMount
    useEffect(()=>{
        //heavy computation
        console.log("Component mounting");
        
        //componentWillUnmount
        return console.log("bye bye");
    },[]);
    //component DId update
    //shouldcomponentUpdate
    useEffect(()=>{
        console.log("Planet changes");
    },[planet]);
   return(
       <div>
           <h1>{props.name}</h1>
           <h4>{props.description}</h4>
           <button onClick={()=> setPlanet("pluto")}>{planet}</button>
       </div>
   );
}

export default User;
