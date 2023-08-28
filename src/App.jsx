import React from 'react';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/Login/SignUp';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Message from './pages/Message/Message';
import Notification from './pages/Notification/Notification';

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp/>} />
				<Route path='/user' element={<Header />}>
					<Route path='/user/home' element={<Home />} />
					<Route path='/user/message' element={<Message  />} />
					<Route path='/user/notification' element={<Notification />} />
					<Route path='/user/profil' element={<Profil />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
