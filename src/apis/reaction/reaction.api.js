import axios from 'axios';
const baseURL = 'http://localhost:8080';

export async function getReactionByIdPost(idPost) {
    try {
        const { data } = await axios.get(`${baseURL}/${idPost}/reactions`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function changeReaction() {

}