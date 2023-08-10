import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FA from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="d-flex justify-content-between w-100">
					<div className="w-25">
						<Link to="/user/home" className="navbar-brand">
								Logo
						</Link>
					</div>
					<div className="w-25">
						<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-primary" type="submit">Search</button>
						</form>
					</div>
					<div className="w-25">
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link to="/user/home" className="nav-link">
										<FontAwesomeIcon icon={FA.faPlusCircle} size="lg" />
									</Link>
								</li>	
								<li className="nav-item">
									<Link to="/user/message" className="nav-link">
										<FontAwesomeIcon icon={FA.faMessage} /> Chat
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/user/notification" className="nav-link">
										<FontAwesomeIcon icon={FA.faBell} /> Notification
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										<FontAwesomeIcon icon={FA.faSignOutAlt} /> Log Out
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;