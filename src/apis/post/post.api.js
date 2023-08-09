import axios from 'axios';
const baseURL = 'http://localhost:8080';

export async function getAllPosts() {
    try {
        const { data } = await axios.get(`${baseURL}/posts`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function addPost() {

}
