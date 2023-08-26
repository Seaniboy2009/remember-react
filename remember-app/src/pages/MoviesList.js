import React, { useEffect, useState } from 'react'
import styles from '../styles/MoviesList.module.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button';

const MoviesList = () => {
    // State for storing the movies and setting the movies
    const [movies, setMovies] = useState({ results: [] })
    const [errors, setErrors] = useState({});

    // State for checking if the data has loaded or not
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const getMovies = async () => {
            try {
                const { data } = await axios.get('/tasks/')
                setMovies(data)
                setHasLoaded(true)
            } catch (error) {
                setErrors(error.response?.data)
                console.log(error)
            }
        };

        setHasLoaded(false)
        const timer = setTimeout(() => {
            getMovies()
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

    }, [pathname])

    const handleCreate = (event) => {
        'hfdskajf'
    }

  return (
    <>
        <Container className={styles.Container}>
        {hasLoaded ? (
            <>
            {movies ? (
                <>
                    {/* Map over each of the movies */}
                    {movies?.map((movie) => (
                        <Card key={movie.id} {...movie} />
                    ))}
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
    <div>
        <Button onclick={handleCreate} >Create</Button>
    </div>
    </>
  )
}

export default MoviesList