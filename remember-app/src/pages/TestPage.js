import React, { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import styles from '../styles/TestPage.module.css'
import Form from 'react-bootstrap/Form';

const TestPage = () => {

    const [hasLoaded, setHasLoaded] = useState(false);
    const [data, setData] = useState({ results: [] })
    const [query, setQuery] = useState("");


    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}`,
        params: {
            exact: 'false',
            titleType: 'movie'
        },
        headers: {
          'X-RapidAPI-Key': '2c53ff4e4fmshe49848acaec3f07p1e278ajsn6f3e8b171bbf',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };

    const testGet = () => {

        const getData = async () => {
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setData(response.data)
                setHasLoaded(true)
            } catch (error) {
                console.error(error);
            }
        }

        setHasLoaded(false)
        const timer = setTimeout(() => {
            getData()
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }
    
  return (
    <>
        <div>TestPage</div>
        <Form className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
              >
                <Form.Control
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type='text'
                  className='mr-sm-2'
                  placeholder='Search Movies'
                >
                </Form.Control>
        </Form>
        <button onClick={testGet}>TestGet</button>
        <div>
            {hasLoaded ? (
                <Table striped bordered className={styles.Table}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.results.map((data, index) => (
                        <tr>
                        <td key={index}>{index}</td>
                        <td key={data.id}>{data.titleText.text}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            ) : (<>Loading...</>)}
        </div>
    </>
  )
}

export default TestPage