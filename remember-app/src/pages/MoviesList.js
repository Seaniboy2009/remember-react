import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { axiosReq } from '../api/AxiosDefaults';

const MoviesList = () => {

    useEffect(() => {
        const getMovies = async () => {
            try {
                const { data } = await axiosReq.get
            } catch (error) {
                
            }

        }
    })

  return (
    <div className={styles.Container}>Movies</div>
  )
}

export default MoviesList