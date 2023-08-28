import React, { useEffect, useState } from 'react'
import styles from '../styles/MoviesList.module.css'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Card from '../components/Card'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { axiosReq } from '../api/AxiosDefaults';
const MoviesDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({ results: [] })
    const [errors, setErrors] = useState({});

    // State for checking if the data has loaded or not
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        const getMovie = async () => {
            try {
                console.log('Get movie by id')
                console.log(id)
                const [{ data: movie }] = await Promise.all([
                    axios.get(`/tasks/${id}`),
                ])
                setMovie({ results: [movie]})
                setHasLoaded(true)
                console.log('Get movie by id sucesfull')
                console.log(movie)
            } catch (error) {
                setErrors(error.response?.data)
                console.log(error)
            }
        };

        setHasLoaded(false)
        const timer = setTimeout(() => {
            getMovie()
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

    }, [pathname])

  return (
    <Container className={styles.Container}>
    {hasLoaded ? (
        <>
        {movie ? (
            <>
            <Card key={movie.id} {...movie.results[0]} moviesDetail/>
            </>
            ) : (
                <p>No movies !! Sad face !!</p>
                )
        }
        </>
    ) : (
        <p>Loading....</p>
    )}
</Container>
  )
}

export default MoviesDetail