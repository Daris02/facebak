import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
  
	const toggleSidebar = () => {
	  	setIsOpen(!isOpen);
	};

    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
				<Button className="sidebar-toggle" variant="light" onClick={toggleSidebar}>
					Menu
				</Button>
				<Nav className="flex-column">
					<Nav.Link as={Link} to="/home" onClick={toggleSidebar}>Home</Nav.Link>
					<Nav.Link as={Link} to="/about" onClick={toggleSidebar}>About</Nav.Link>
					<Nav.Link as={Link} to="/message" onClick={toggleSidebar}>Message</Nav.Link>
				</Nav>
			</div>
        </div>
    );
}

export default Navbar;
