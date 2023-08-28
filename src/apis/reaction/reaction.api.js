import { Delete, Get, Post } from '../baseApi';

export async function getReactionByIdPost(postId) {
    return Get(`/posts/${postId}/reactions`, null);
}

export async function addReaction(userId, postId, type) {
    return Post(`/posts/${postId}/reactions`, {userId, type});
}

export async function deleteReaction(userId, postId) {
    return Delete(`/posts/${postId}/reactions`, {userId})
}