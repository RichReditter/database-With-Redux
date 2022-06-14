import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toAdd, toDelete, selectCount, addAsync} from "./features/usersSlice.js";
import './App.css';
import DataBase from './DataBase.js'; //
import FormInput from './FormInput.js';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectCount);
  
  useEffect(() => {
    dispatch(addAsync());
  }, [])
  console.log(users)
  
  return (
    <div >
      <FormInput/>
      <DataBase users={users}/> 
    </div>
  );
}

export default App;

// что за ошибка вылезает?
// как удалить что-то из моего массива в store?
// где и почему вызывается мой массив из store два раза? ( бывает три )
