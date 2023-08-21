import React, {useEffect, useState} from 'react';
import { getAllUsers } from "../../apis/user/user.apis";
import { Container, Row, Col, ListGroup, Card, Form, Button } from 'react-bootstrap';

const Message = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleFriendSelect = (friend) => {
        setSelectedFriend(friend);
        setMessages([]); // Réinitialiser les messages lorsque l'ami sélectionné change
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        const newMessage = { text: message, sender: 'user' };
        setMessages([...messages, newMessage]);
        setMessage('');
    };


    const [friends, setFriends] =  useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllUsers();
                console.log(data);
                setFriends(data);
                setSelectedFriend(data)
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        }

        fetchData();

    }, []);

    return (
        <div className="container my-5 pt-5 mx-auto w-75">
            {/* <h2 className="text-center">Message</h2> */}
            {/* <div className="row">
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
            </div> */}

            <Container fluid className="app-container">
                <Row>
                    <Col md={4} className="friends-list">
                        <ListGroup>
                            {friends.map((friend) => (
                                <ListGroup.Item
                                    key={friend.id}
                                    action
                                    active={selectedFriend === friend}
                                    onClick={() => handleFriendSelect(friend)}
                                >
                                    {friend.username}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col md={8} className="message-area">
                        {selectedFriend ? (
                            <Card>
                                <Card.Header>{selectedFriend.username}</Card.Header>
                                <Card.Body>
                                    <div className="message-list">
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`message ${msg.sender}`}>
                                        {msg.text}
                                        </div>
                                    ))}
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                            type="text"
                                            placeholder="Votre message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" onClick={handleSendMessage}>
                                            Envoyer
                                        </Button>
                                    </Form>
                                </Card.Footer>
                            </Card>
                        ) : (
                            <div className="select-friend-message">Sélectionnez un ami pour commencer la discussion</div>
                        )}
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Message;
