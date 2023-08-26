import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import styles from '../styles/Card.module.css'

const Card = (props) => {
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
    </Container>
    </>
  )
}

export default Card