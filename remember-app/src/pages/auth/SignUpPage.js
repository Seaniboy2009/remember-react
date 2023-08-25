import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import stylesApp from '../../styles/App.module.css'
import styles from '../../styles/SignUp.module.css'

import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';


const SignUpPage = () => {
  // Initialise the from data to empty strings
  const [formData, setFormData] = useState({username: '', password1: '', password2: ''})

  // Set the below to the form data
  const {username, password1, password2} = formData

  // Get any errors when submitting form and save them
  const [errors, setErrors] = useState({})

  // Navigate is used to divert user to another page
  const navigate = useNavigate();

  // Update the target event name with the target value when it is bveing changed by the user
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('https://app-remember-api-0c8e0548ec15.herokuapp.com/dj-rest-auth/registration/', formData)
      navigate.push("/home");
    } catch (err) {
      setErrors(err.response?.data)
    }
  }

  return (
    <>
      <div className={stylesApp.Container}>
        <h5>Please use the form below to create an account.</h5>
        <Row className={`${styles.FormHolder} justify-content-md-center`}>
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
                {errors.username?.map((message, index) =>
                    <Alert key={index}>{message}</Alert>
                )}
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
                {errors.password1?.map((message, index) =>
                    <Alert key={index}>{message}</Alert>
                )}
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
                {errors.password2?.map((message, index) =>
                    <Alert key={index}>{message}</Alert>
                )}
                </Form.Group>
                <Button type="submit">Sign up</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default SignUpPage