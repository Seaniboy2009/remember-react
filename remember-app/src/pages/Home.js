import React, {useContext} from 'react'
import styles from '../styles/Home.module.css'
import AuthContext from '../contexts/AuthContext'

const Home = () => {
  let {user} = useContext(AuthContext)
  let {loginUser} = useContext(AuthContext)

  return (
    <div className={styles.Container}>
      <p>Home</p>
      <p>Hello {user ? user.username : ''}</p>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Home