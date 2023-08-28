import { Get, Put } from "../baseApi";

export async function getCommentByIdPost(postId) {
    return Get(`/posts/${postId}/comments`, postId);
}

export async function putCommentByIdPost({postId, userId, content}) {
    return Put(`/posts/${postId}/comments`, {postId, userId, content});
}
