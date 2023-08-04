import styles from '../src/styles/App.module.css'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom'
import SignUpPage from '../src/pages/auth/SignUpPage'
import Home from './pages/Home';
import MoviesList from './pages/MoviesList';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main} >
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/signup' element ={<SignUpPage />} />
          <Route path='/movies' element ={<MoviesList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
