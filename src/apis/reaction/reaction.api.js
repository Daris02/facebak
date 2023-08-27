import { Delete, Get, Post } from '../baseApi';

export async function getReactionByIdPost(idPost) {
    return Get(`/posts/${idPost}/reactions`, null);
}

export async function addReaction(idUser, idPost, reactionType) {
    return Post(`/posts/${idPost}/reactions`, {userId: idUser, type: reactionType});
}

export async function deleteReaction(idUser, idPost) {
    return Delete(`/posts/${idPost}/reactions`, {userId: idUser})
}