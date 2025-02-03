import Button from "./Button"

import LeftArrow from '../assets/left-arrow.png'
import RightArrow from '../assets/right-arrow.png'
import AppleBasket from "./AppleBasket"
import './AppleCount.css'
import {createRoot} from 'react-dom/client'
import { useState,Fragment } from "react"




// let rightAppleCount = 0
// let leftAppleCount = totalAppleCount - rightAppleCount

console.log(Fragment);
console.log(Symbol.for('react.fragment'));

const AppleCounter = () => {
  const totalAppleCount = 10
  const [rightAppleCount,setRightAppleCount] = useState(0)
  const[leftAppleCount,setLeftAppleCount]= useState(totalAppleCount - rightAppleCount)
const leftClickHandler = ()=>{
  if (rightAppleCount > 0) {
    setRightAppleCount( rightAppleCount - 1)
    setLeftAppleCount(leftAppleCount +1)
  }
  }

  const rightClickHandler = ()=>{
    if (leftAppleCount > 0) {
      setRightAppleCount( rightAppleCount +1)
      setLeftAppleCount(leftAppleCount - 1)
     
    }
  }
  return (
    <>
    <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button clickHandler ={leftClickHandler} imageUrl={LeftArrow} buttonName= 'left-arrow'/>
        <Button clickHandler ={rightClickHandler} imageUrl={RightArrow} buttonName= 'right-arrow'/>
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
    </section>
    <p
    style={
      {
        textAlign: 'center',
        marginTop: '32px'
      }
    }>
      <button onClick={()=>{

      }}>Re-render</button>
    </p>
    </>
  )
}


{/* <Button
        clickHandler={leftClickHandler}
        imageUrl={LeftArrow}
        buttonName="left-arrow">
        LeftArrow
        </Button>
      
      <Button
        clickHandler={rightClickHandler}
        imageUrl={RightArrow}
        children="right-arrow"
      /> */}

export default AppleCounter