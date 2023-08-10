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
                            //             <p>{post.content}</p>
                            //         </div>
                            //     </div>
                            // )
                        }
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                        <div className="col-8">
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugit sit ullam cumque quaerat, veniam illo dolore cum unde,
                                vero exercitationem blanditiis repellendus optio illum voluptatem
                                expedita id sequi nam explicabo!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
