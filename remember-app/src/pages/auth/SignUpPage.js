import React from 'react'
import Button from 'react-bootstrap/esm/Button';
// import axios from 'axios';

const SignUpPage = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Button Clicked")
        try {
            // await axios.post("dj-rest-auth/registration/");
            // history.push("/signin");
        } catch (errors) {

        }
    }


  return (
    <div> <Button onClick={handleSubmit} /> Click here to sign up </div>
  )
}

export default SignUpPage