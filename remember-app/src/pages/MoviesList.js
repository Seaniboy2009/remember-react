import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { axiosReq } from '../api/AxiosDefaults';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
                const { data } = await axiosReq.get('/tasks/')
                setMovies(data)
                console.log(data)
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

  return (
    <div className={styles.Container}>
        <h2>Movies</h2>
        
        {hasLoaded ? (
            <>
            {movies ? (
                <>
                {/* Map over each of the movies */}
                    {movies.map((movie) => (
                        <>
                        <h3>Title</h3>
                        <p>{movie.title}</p>
                        <h3>Created on</h3>
                        <p>{movie.created_on}</p>
                        <h3>Category</h3>
                        <p>{movie.category}</p>
                        <h3>Completed</h3>
                        <p>{movie.completed}</p>
                        <h3>Owner</h3>
                        <p>{movie.owner}</p>
                        </>
                    ))}
                </>
                ) : (
                    <p>No movies !! Sad face !!</p>
                    )
            }
            </>
        ) : (
            <>
            <p>Loading....</p>
            </>

        )}
    </div>
  )
}

export default MoviesList