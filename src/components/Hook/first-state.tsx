
import { useEffect, useState } from "react"
const FirstState = () => {
    const [color,setColor]=useState('blue')
    const [state, setState] = useState(true); 
    const colorChangeHandler=()=>{
        // setcount(count+1);
        
        setState(prevState => {
            const newState = !prevState; // Get the updated value
            setColor(newState ? "blue" : "red"); // Use the updated state
            return newState; // Update the state
        });
    }
    const [count, setCount] = useState(0);
useEffect(() => {
   setCount(prev=>prev+1)
},[state]);
  return (
    <div>
        {count}
      <h1 style={{color:color}}>hello</h1>
      {/* {color} */}
      <button onClick={colorChangeHandler}>click</button>
     
    </div>
  )
}

export default FirstState
