import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../apis/post/post.api.js';
import Post from "../../components/Post";

const Home = () => {
    const [posts, setPosts] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllPosts();
                setPosts(data);
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        }

        fetchData();

    }, []);

    return (
        <>
            <div className="container mt-5">
                {/* <h2>News </h2> */}
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
