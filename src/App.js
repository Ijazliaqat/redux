import { mangoActions } from "./store/mangoSlice";
import { useDispatch, useSelector } from "react-redux";
import {cartActions} from './store/cartSlice';
import Child from "./components/Child";
import { useState } from "react";



function App() {
  const [savedData, setSavedData] = useState()
 
  const dispatch = useDispatch();
  const a = useSelector((state) => state.mango.name);
  const b = useSelector(state => state.cart.value);

  const updateHandler = () => {
    dispatch(mangoActions.upDateName('Date is UPdated'))

  }

  const increaseHandler = () => {
    dispatch(cartActions.increment(5))
  }

  const decrementHandler = () => {
    dispatch(cartActions.decerement())
  }

  const addInputHandler = data => {
    
    setSavedData(data)
  }
 

  
  return (
    <div className="App">
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={updateHandler} > Click</button>
      <button onClick={increaseHandler}>+5</button>
      <button onClick={decrementHandler}>-1</button>

      <br /> <br />
      <Child onAddInput= {addInputHandler} />
      {savedData}
    </div>
  );
}

export default App;
