import React, { useRef, useState, useContext } from 'react'
import styles from '../styles/MoviesList.module.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import FormLabel from 'react-bootstrap/esm/FormLabel'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'

const MoviesCreate = () => {
    
    let {user} = useContext(AuthContext)
    const [ formData, setFormData ] = useState({
        title: '',
        category: '',
        image: '',
    })

    const { title, category, image } = formData
    const postURL = 'https://res.cloudinary.com/dgj9rjuka/image/upload/v1678359959/media/images/default_post_fr07hq.jpg'
    const navigate = useNavigate()

    const handleChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const showDetails = (event) => {
        console.log(title, category, image )
    }

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            console.log(event.target.files[0])
            setFormData({
                ...formData,
                image: event.target.files[0],
            });
        }
    };

    const herokuURL = 'https://8000-seaniboy200-rememberapi-aahgjtzy025.ws-eu104.gitpod.io/tasks/'

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()

        formData.append('title', title)
        formData.append('category', category)
        formData.append('image', image)
        formData.append('user', user)
        console.log(formData)

        let response = await fetch('https://8000-seaniboy200-rememberapi-aahgjtzy025.ws-eu104.gitpod.io/tasks/', formData, {
            method: 'POST', // or 'GET', 'PUT', 'DELETE', etc. depending on your API request
            headers: {
              'Content-Type': 'application/json', // adjust the content type as needed
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1MTI5NjA2LCJpYXQiOjE2OTUxMjkzMDYsImp0aSI6ImJiMWRmNWJmM2ZjNDQ4NzU5ZDgwZWNhOWI3NWFlZjg3IiwidXNlcl9pZCI6MywidXNlcm5hbWUiOiJzZWFuIn0.ZSMRfDQeVVVM2tjGnKci2gFf1v1Gz5gkancxhEg5ctM'
              // Add any necessary headers, such as authentication tokens, here
            },
            body: JSON.stringify(''),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
              }
              return response.json(); // Parse the response body as JSON
            })
            .then((data) => {
              // Handle the response data here
              console.log('Response Data:', data);
          
              // You can update your React component's state with the data, display it, or perform any other actions based on the response.
            })
            .catch((error) => {
              // Handle any errors that occurred during the request
              console.error('Request Error:', error);
            });

        // try {
        //     let response = await fetch(herokuURL, formData, {
        //         method: 'PUT',
        //         headers:{
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1MTI5NjA2LCJpYXQiOjE2OTUxMjkzMDYsImp0aSI6ImJiMWRmNWJmM2ZjNDQ4NzU5ZDgwZWNhOWI3NWFlZjg3IiwidXNlcl9pZCI6MywidXNlcm5hbWUiOiJzZWFuIn0.ZSMRfDQeVVVM2tjGnKci2gFf1v1Gz5gkancxhEg5ctM'
        //         },
        //     })
    
        //     let data = await response.json()
            
        // } catch (error) {
            
        // }

        // try {
        //     console.log('Try create task')
        //     const { data } = await axios.post('/tasks/', formData,
        //     { headers:
        //         {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1MTI2NTk3LCJpYXQiOjE2OTUxMjYyOTcsImp0aSI6IjMzZjYwNjJlYmJhMzQzYWQ5NzA4ZTM5NDFiNGU4NmU5IiwidXNlcl9pZCI6MywidXNlcm5hbWUiOiJzZWFuIn0.b0RjRCAnHTrYVIgQOtRJedA2Wg0WrkQk6JiR1Vq-vEk',
        //         }
        //     },)
        //     console.log('Success create task')
        //     console.log(data)
        //     navigate('/movies/')
        // } catch (error) {
        //     console.error(error);
            
        // }
    }

  return (
    <Container className={styles.Container}>
        <Row>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type='text'
                        name='title'
                        value={title}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                        type='text'
                        name='category'
                        value={category}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <FormLabel>
                        <input
                            type="file"
                            onChange={handleChangeImage}
                        />
                    </FormLabel>
                    <Button type='submit'>Create</Button>
                    <Button onClick={showDetails}>Show details</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default MoviesCreate