import { Get, Login, Post } from '../baseApi';

export function authUser({username, email, password}) {
    return Login('/users/login', {username, email, password});
}

export async function getAllUsers() {
    return Get('/users');
}

export async function addUser({email, password, confirmPassword, username}) {
    return Post('/users', {email, password, confirmPassword, username});
}
