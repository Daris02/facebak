import axios from 'axios';
const baseURL = 'http://localhost:8080';

export async function getReactionByIdPost(idPost) {
    try {
        const { data } = await axios.get(`${baseURL}/posts/${idPost}/reactions`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function addReaction(idUser, idPost, reactionType) {
    try {
        const { data } = await axios.post(`${baseURL}/posts/${idPost}/reactions`, {
            userId: idUser,
            type: reactionType
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteReaction(idUser, idPost) {
    try {
        const { data } = await axios.delete(`${baseURL}/posts/${idPost}/reactions`, {
            userId: idUser
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}