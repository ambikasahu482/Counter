
import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>   
      {/* { true ? <Counter CounterName = "Timer"> </Counter> : <AppleCounter/>} */}
      {/* { false ? <Counter CounterName = "Timer"> </Counter> : <AppleCounter/>} */}
      <Counter CounterName = "Timer">
        <AppleCounter/>
      </Counter> 
       {/* <AppleCounter /> */}
    </div>
  )
}

export default App