
type tourprops={
    name:string
    Price:number,
    
} 
const Tour = (props:tourprops) => {
    
  return (
    <div>
      
      <h1>tourname{props.name}</h1>
      <p>price{props.Price}</p>
    </div>
  )
}

export default Tour
