import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import styles from '../../styles/SignUp.module.css'

import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import { axiosReq } from '../../api/AxiosDefaults';
import AuthContext from '../../contexts/AuthContext';

const SignInForm = () => {
    // Custom hook to set the signed in user
    const setCurrentUser = useSetCurrentUser()

    // Data that will be sent to the API
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = formData;
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    // Handle the changes made on the form
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleTestClick = (event) => {
        navigate('/')
    }

    // Send the formdata to the API and send user to homepage
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        // try {
        //     console.log('Try sign in')
        //     const { data } = await axios.post('/dj-rest-auth/login/', formData)
        //     setCurrentUser(data.user)
        //     console.log('Success sign in')
        //     console.log(data)
        //     navigate("/");
        // } catch (err) {
        //     setErrors(err.response?.data)
        // }
        // try {
        //     const response = await axios.post('/dj-rest-auth/login/', formData);
        //     const { token, refreshToken } = response.data;
        //     console.log(response.data)
        //     console.log(response.data.access)
      
        //     // Store the tokens in localStorage or secure cookie for later use
        //     localStorage.setItem('token', token);
        //     localStorage.setItem('refreshToken', refreshToken);
      
        //     // Redirect or perform other actions upon successful login
        //     navigate("/");
        //   } catch (error) {
        //     // Handle login error
        //   }
    }

    let {loginUser} = useContext(AuthContext)
    return (
        <>
            <div>
                <form onSubmit={loginUser}>
                    <input type="text" name="username" placeholder="Enter Username" />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <input type="submit"/>
                </form>
            </div>
            {/* <Row className={`${styles.Container} justify-content-md-center`}>
                <Col xs={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label>Name (Case sensitive)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                name='username'
                                value={username}
                                onChange={handleChange}
                            />
                            {errors?.username?.map((message, index) =>
                                <Alert key={index}>{message}</Alert>
                            )}
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                            {errors?.password?.map((message, index) =>
                                <Alert key={index}>{message}</Alert>
                            )}
                        </Form.Group>
                        <Button type="submit">
                            Sign in
                        </Button>
                        <Button onClick={handleTestClick}>
                            Test re-direct
                        </Button>
                        {errors?.non_field_errors?.map(error => <p>{error}</p>)}
                        {errors?.non_field_errors?.map((message, index) =>
                            <Alert key={index}>{message}</Alert>
                        )}
                    </Form>
                </Col>
            </Row> */}
        </>
    )
}

export default SignInForm