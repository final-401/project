import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000';
const tokenUrl = baseUrl + '/api/v1/token/';

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

    async function login(email, password) {

        const response = await axios.post(tokenUrl, { email, password });

        const decodedAccess = jwt.decode(response.data.access);
        console.log(decodedAccess)
        const newState = {
            tokens: response.data,
            user: {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id,
                role: decodedAccess.role,
                firstname: decodedAccess.firstname,
                lastname: decodedAccess.lastname
            },
            login,
            logout,
        }

        setState(({prevState}) => ({ ...prevState, ...newState }));
    }

    function logout() {
        console.log('hiii')
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}
