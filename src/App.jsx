import React from 'react';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Home from './pages/Home';
import Message from './pages/Message';
import About from './pages/About';

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp/>} />
				<Route path='/home' element={<Home />} />
				<Route path='/message' element={<Message />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
}

export default App;
