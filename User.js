import React, { useState } from "react";
import Button from "react-bootstrap/Button";
export default function User(props) {
    const user = props.user;
  const remove = () => {
    props.onUpdateTasks(Number.parseInt(user.id));
  };
  const [ifShown, setIfShown] = useState(false);
  return (
    <React.Fragment>
      <tr onClick={() => setIfShown(!ifShown)}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>
          <img src={user.avatar}></img>
        </td>
        <td>{user.amountOfMoney}$</td>
        <td>{user.bitcoinAdress}</td>
        <td>
          {user.description}
          <br></br>
          {ifShown ? (
            <Button variant="danger" onClick={remove}>delete user</Button>
          ) : (
            <div></div>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}
