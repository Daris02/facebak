import axios from 'axios';
const baseURL = 'http://localhost:8080';

export function getAllUsers() {
    
}

export async function addUser() {
    try {
        const { data } = await axios.post(`${baseURL}/users`);
        // Forme data :
        // {
        //     "email": "jane.smith@gmail.com",
        //     "password": "12345678",
        //     "confirmPassword": "12345678",
        //     "username": "Jane Smith",
        //     "joinedAt": "2023-08-10T14:40:53.853Z",
        //     "bio": null,
        //     "photo": null
        // }
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function authUser(loginData) {
    try {
        const { data } = await axios.post(`${baseURL}/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
