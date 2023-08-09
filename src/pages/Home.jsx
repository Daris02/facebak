import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../apis/post/post.api.js';

const Home = () => {
    const [posts, setPosts] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllPosts();
                console.log(data);
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
                <h2>Home page : Post</h2>
                <div className="container-fluid">
                    <div className="row mt-5">
                        {
                            // posts.map((post) => 
                            //     <div key={post.id} className="col-8">
                            //         <div>
                            //             <h3>{post.title}</h3>
                            //         </div>
                            //     </div>
                            // )
                        }
                        <div className="col-8">
                            <div>
                                <h3>Title 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h3>Title 2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h3>Title 3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h3>Title 4</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h3>Title 5</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h3>Title 6</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h3>Title 7</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Rerum optio repellat accusantium, saepe sint harum obcaecati 
                                    aspernatur ad officiis itaque, repudiandae impedit. Enim,
                                    voluptate itaque asperiores cupiditate corporis rerum tempore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
