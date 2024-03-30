
import './App.css';
// import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import Box from "./component/Box";

function App() {
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const id = useSelector(state => state.id)
    const pw = useSelector(state => state.pw)
    const increase = () => {
        dispatch({type:"INCREMENT",payload:{num:5}})
       // setCount(count + 1)
    }
    const decrease = () => {
        dispatch({type:"INCREMENT",payload:{num:-5}})
    }

    const login = () => {
        dispatch({type:"LOGIN",payload:{id:"admin",pw:"admin"}})
    }

  return (
    <div >
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
        <Box/>
        <h1>Id:{id}, Pw:{pw}</h1>
        <button onClick={login}>Login</button>


    </div>
  );
}

export default App;
