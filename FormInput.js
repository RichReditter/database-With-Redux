import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function FormInput() {
  const primary = "info";
  const [show, setShow] = useState(false);
  return (
    <>
      <Alert variant={primary}>
        <h1>DataBase for Binance Users</h1>
        <hr></hr>
        <p>If you want to add a new user you can click the button below</p>
        <div className="d-flex justify-content-start">
          <Button onClick={() => setShow(true)} variant="outline-success">
            Create a new user
          </Button>
        </div>
      </Alert>
      {show && (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
            <Form.Text className="text-muted">
              Don't type your nicknames!!!
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="d-flex justify-content-end">
            <Button variant="warning" onClick={() => setShow(false)}>
              Close all the inputs
            </Button>
          </div>
        </Form>
      )}
    </>
  );
}
