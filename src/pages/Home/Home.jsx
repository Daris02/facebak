import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../apis/post/post.api.js';
import Post from "../../components/Post";

const Home = () => {
    const [posts, setPosts] = useState([{}]);

    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="container mt-5">
                <h2>Posts</h2>
                <div className="mt-5 container-fluid w-50">
                    <div className="row mt-5">
                        {
                            posts.map((post) => (
                                !post.user ? <div className="text-center text-primary">Loading...</div> : <Post key={post.id} post={post}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
