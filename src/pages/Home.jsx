import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../apis/post/post.api.js';

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
                <h2>News </h2>
                <div className="container-fluid">
                    <div className="row mt-5">
                        {
                            posts.map((post) =>
                                <div key={post.id} className="col-8">
                                    <div>
                                        <h3>{post.title}</h3>
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
