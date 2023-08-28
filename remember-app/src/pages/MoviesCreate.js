import React, { useRef, useState } from 'react'
import styles from '../styles/MoviesList.module.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

const MoviesCreate = () => {
    
    const [ formData, setFormData ] = useState({
        title: '',
        category: '',
        image: '',
    })

    const { title, category, image } = formData
    const postURL = 'https://res.cloudinary.com/dgj9rjuka/image/upload/v1678359959/media/images/default_post_fr07hq.jpg'

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

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()

        formData.append('title', title)
        formData.append('category', category)
        formData.append('image', image)

        try {
            console.log('Try create task')
            const { data } = await axios.post('/tasks/', formData)
            console.log('Success create task')
            console.log(data)
        } catch (err) {
            
        }
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
                    <input
                        type="file"
                        onChange={handleChangeImage}
                    />
                    <Button type='submit'>Create</Button>
                    <Button onClick={showDetails}>Show details</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default MoviesCreate