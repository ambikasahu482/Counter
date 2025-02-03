import { useState } from "react";
import { preconnect } from "react-dom";
import styles from'./Counter.module.css'

// const states = [0, "Ambika Sahu"];



export default function Counter({CounterName ,children}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(CounterName);
  // const count = myStateArray[0]
  // const setCount =  myStateArray[1]
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles.textXl}>{count}</h1>
      <h2>{name}</h2>
      <button
      className={[styles.button ,styles.textXl].at(' ')}
        onClick={() => {
          setName("Ambika Sahu");
          setCount((previousState) => previousState + 1);
          //  alert(count)
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase Count
      </button>
      {children}
    </div>
  );
}
