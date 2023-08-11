import React, { useState } from 'react';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Header from './components/Header';
import Home from './pages/Home';
import Message from './pages/Message';
import Notification from './pages/Notification';

function App() {
	const [user, setUser] = useState({});
	console.log("User -> App : " + user);

	return (
		<>
			<Routes>
				<Route path='/' element={<Login user={user} setUser={setUser} />} />
				<Route path='/signup' element={<SignUp/>} />
				<Route path='/user' element={<Header user={user} />}>
					<Route path='/user/home' element={<Home user={user} />} />
					<Route path='/user/message' element={<Message  user={user} />} />
					<Route path='/user/notification' element={<Notification user={user} />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
