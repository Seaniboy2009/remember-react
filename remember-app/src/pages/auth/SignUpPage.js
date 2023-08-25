import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import stylesApp from '../../styles/App.module.css'
import styles from '../../styles/SignUp.module.css'


const SignUpPage = () => {
  // Initialise the from data to empty strings
  const [formData, setFormData] = useState({username: '', password1: '', password2: ''})

  // Set the below to the form data
  const {username, password1, password2} = formData

  // Update the target event name with the target value
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
    {console.log(username, password1, password2)}
        <div className={stylesApp.Container}>
          <h5>Please use the form below to create an account.</h5>
          <Row className={`${styles.FormHolder} justify-content-md-center`}>
            <Col xs={6}>
              <Form>
                  <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name='username'
                      value={username}
                      onChange={handleChange}
                  />
                  {/* {errors.name?.map((message, index) =>
                      <Alert key={index}>{message}</Alert>
                  )} */}
                  </Form.Group>
                  <Form.Group controlId="password1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      name='password1'
                      value={password1}
                      onChange={handleChange}
                  />
                  {/* {errors.name?.map((message, index) =>
                      <Alert key={index}>{message}</Alert>
                  )} */}
                  </Form.Group>
                  <Form.Group controlId="Password2">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name='password2'
                      value={password2}
                      onChange={handleChange}
                  />
                  {/* {errors.name?.map((message, index) =>
                      <Alert key={index}>{message}</Alert>
                  )} */}
                  </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
    </>
  )
}

export default SignUpPage