import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestingTaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Getting testing tasks')
    axios.get('https://8000-seaniboy200-rememberapi-aahgjtzy025.ws-eu104.gitpod.io/testingtasks/', {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer YOUR_JWT_TOKEN', // Replace with your user's token
      }
    })
    .then((response) => {
      if (response.status === 200) {
        setTasks(response.data);
      } else {
        console.error('Unexpected status code:', response.status);
      }
    })
    .catch((error) => {
      console.error('Error fetching tasks:', error);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('title', event.target.title.value)
    formData.append('description', event.target.description.value)
    console.log(formData)
    console.log(event.target.title.value)

    try {
        axios.post('https://8000-seaniboy200-rememberapi-aahgjtzy025.ws-eu104.gitpod.io/testingtasks/', formData, {
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': 'Bearer YOUR_JWT_TOKEN', // Replace with your user's token
            }
          })
    } catch (error) {
        
    }

    }

  return (
    <div>
      <h1>Task List</h1>
      <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Enter title" />
                <input type="text" name="description" placeholder="Enter description" />
                <input type="submit"/>
            </form>
        </div>
      <ul>
        {console.log(tasks)}
        {tasks?.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestingTaskList;