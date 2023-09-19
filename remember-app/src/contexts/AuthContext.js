import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";
    
const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {

    const testURL = 'https://8000-seaniboy200-rememberapi-aahgjtzy025.ws-eu104.gitpod.io/api/token/'
    const herokuURL = 'https://app-remember-api-0c8e0548ec15.herokuapp.com/api/token/'

    console.log(localStorage.getItem('authTokens'))
    const navigate = useNavigate()
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let loginUser = async (event) => {
        event.preventDefault();
        console.log('form submitted')
        let response = await fetch(herokuURL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username': event.target.username.value, 'password': event.target.password.value})
        })

        let data = await response.json()
        console.log('Data:', data)
        console.log('User:', jwt_decode(data.access))
        console.log('Response:', response)
        

        if(response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log(localStorage.getItem('authTokens'))
            navigate('/')

        } else {
            alert('Something went wrong', response.status)
        }
    }

    let logoutuser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutuser:logoutuser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}