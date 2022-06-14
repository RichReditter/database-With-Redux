import React from "react";
import Table from "react-bootstrap/Table";
import User from "./User.js";
import { toAdd, toDelete, selectCount, addAsync} from "./features/usersSlice.js";
import { useSelector, useDispatch } from "react-redux";


export default function DataBase(props) {
  let users;
  if (Array.isArray(props.users) && props.users.length >= 1) {
    users = props.users[0];
    function deleteTask(id) {
      delete users[id];
    }
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Amount of money</th>
              <th>Bitcoin Adress</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                user={user}
                key={Number.parseInt(user.id)}
                onUpdateTasks={deleteTask}
              />
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}
