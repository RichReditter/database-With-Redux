import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toAdd, toDelete, selectCount, addAsync} from "./features/usersSlice.js";
import './App.css';

function App() {
  const url = 'https://62a6c1e2bedc4ca6d7b9735c.mockapi.io/users'
  const dispatch = useDispatch();
  const users = useSelector(selectCount);
  console.log(users)
  useEffect(() => {
    dispatch(addAsync());
  }, [dispatch])
  
  
  return (
    <div className="App">
      {/* <Form/>
      <DataBase/> */}
    </div>
  );
}

export default App;
