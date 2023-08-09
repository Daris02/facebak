import axios from 'axios';
const baseURL = 'http://localhost:8080';

export function getAllUsers() {
    
}

export function addUser() {

}

export async function authUser(loginData) {
    try {
        const { data } = await axios.post(`${baseURL}/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
