import React, {useEffect, useState} from 'react';
import { getAllUsers } from "../apis/user/user.apis";

const Message = () => {
    const [friends, setFriends] =  useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllUsers();
                console.log(data);
                setFriends(data);
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        }

        fetchData();

    }, []);

    return (
        <div className="container my-5 mx-auto w-75">
            <h2 className="text-center">Message Page</h2>
            <div className="row">
                <div className="col-2 mx-2 border border-secondary">
                    <div className="container">
                        {
                            friends.map((friend) => (
                                <div key={friend.id}>
                                    <h4>{friend.username}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-8 mw-2 border border-secondary">

                </div>
            </div>
        </div>
    );
}

export default Message;
