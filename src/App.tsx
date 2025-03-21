// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LeftSide from './components/aside-left'
import RightSide from './components/aside-right'
import Card from './components/card-component'
import FooterSection from './components/footer-section'
import Header from './components/header'
import Img from './assets/images/img1.jpg';
import Img1 from './assets/images/img2.jpg';
import Img2 from './assets/images/img3.jpg';
import Tour from './components/Tour-component'
import data from './tour-data.json';
import { useEffect, useState } from 'react'
import FirstState from './components/Hook/first-state'
function App() {
  // const [count, setCount] = useState(0)
//state:- 
const [info,setInfo]=useState<{ name: string; Price: number; }[]>([]);//function:hook


//use state:
//to define value [variable]
useEffect(()=>{
  setInfo(data);
  
  //state updates in next render
  
},[])
//useeffect is a hook in react js
//it takes two argument
//1:callback function
//2:dependency array

//[]:blank:only page loades[mounting phase] it works

  return (
    <>
     
      {/* <header className='header_section'>
        <Header />
      </header>
      <div className='middle_section'>
        <aside className='left_side'>
          <LeftSide />
        </aside>
        <aside className='right_side'>
          <RightSide />
        </aside>
      </div>
      <footer>
      <FooterSection brand='ford' count={20} />
      <FooterSection brand='maruti' count={30} />
      </footer> */}

{/* <div className='container'>
<Card imgsrc={Img} topic='react js' description='react js is libary'/>
<Card  imgsrc={Img1}topic='angular js' description='angular js is framework'/>
<Card  imgsrc={Img2}topic='node js' description='node is a js environement'/>
</div> */}





{/* <div style={{display:'flex',gap:'2em'}}>
{
  info.map((e,index)=>
    <div key={index}>
    <Tour name={e.name} Price={e.Price}/>
    </div>
    
  )
}


</div> */}


<FirstState/>

      {/* <div> */}
      {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
