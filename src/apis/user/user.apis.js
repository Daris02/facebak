import axios from 'axios';

const baseURL = 'http://localhost:8080';

export async function authUser({username, email, password}) {
    try {
        const { data } = await axios.post(
                `${baseURL}/users/login`, 
                {
                    username,
                    email,
                    password
                }
            );
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllUsers() {
    try {
        const { data } = await axios.get(`${baseURL}/users`);
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
        //     "id": "3e52c217-d1da-4b1e-98fa-4ec7020d669f",
        //     "email": "johndoe@gmail.com",
        //     "username": "JohnDoe",
        //     "joinedAt": "2023-08-27T15:54:33.425Z",
        //     "bio": null,
        //     "photo": "https://images.pexels.com/photos/17759970/pexels-photo-17759970/free-photo-of-bois-lumineux-route-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        //   }
        return data;
    } catch (error) {
        console.log(error);
    }
}
