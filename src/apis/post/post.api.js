import { Get, Put } from '../baseApi';

export async function getAllPosts() {
    return Get(`/posts`);
}

export function addPost({title, content, userId}) {
    return Put(`/posts`, {title, content, userId})
}
