// import { useState } from 'react'
import "./style.css";
export default function Square({ value, onSquareClick }) {
  // const [value,setValue] = useState(null)
  // function handleClick(){
  //     setValue('X')
  // }
  //lifted state up
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}
