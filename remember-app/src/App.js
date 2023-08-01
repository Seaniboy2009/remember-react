import styles from '../src/styles/App.module.css'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom'
import SignUpPage from '../src/pages/auth/SignUpPage'
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main} >
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/signup' element ={<SignUpPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
