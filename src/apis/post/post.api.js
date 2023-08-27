import { Get } from '../baseApi';

export async function getAllPosts() {
    return Get(`/posts`);
}

export function addPost() {

}
