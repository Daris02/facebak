import axios from 'axios';
const baseURL = 'http://localhost:8080';

export async function getAllUsers() {
    try {
        const { data } = await axios.get(`${baseURL}/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function authUser({email, password}) {
    try {
        const { data } = await axios.post(`${baseURL}/users/auth`, {email, password});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function addUser({email, password, confirmPassword, username}) {
    try {
        const { data } = await axios.post(
            `${baseURL}/users`,
            {
                email,
                password,
                confirmPassword,
                username
            }
        );
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
