import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import styles from '../styles/Card.module.css'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { axiosReq, axiosRes } from '../api/AxiosDefaults'

const Card = (props) => {
  const { moviesDetail, id } = props
  const navigate = useNavigate()

  const handleDelete = async (event) => {
    try {
      console.log(`Delete task ${id}`)
      await axiosRes.delete(`/tasks/${id}`)
      navigate('/movies')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Container className={styles.Container}>
        <div className={styles.ImageContainer}>
            <img className={styles.Image} src={props.image} />
            
        </div>
        <div className={styles.TextContainer}>
            <p>{props.title}</p>
            <p>{props.created_on}</p>
            <p>{props.category}</p>
            <p>{props.completed}</p>
            <p>{props.owner}</p>
        </div>
        {moviesDetail ? (
          <>
            <Button className={styles.Button}>Update</Button>
            <Button className={styles.Button} onClick={handleDelete}>Delete</Button>
          </>
        ) : (
          <Link to={`/movies/${id}`}>Go to Movie Details:&nbsp;</Link>
        )}
    </Container>
    </>
  )
}

export default Card