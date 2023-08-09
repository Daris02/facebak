import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter, CDBIcon } from 'cdbreact';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	return (
			<>
				<CDBSidebar>
					<CDBSidebarHeader prefix={<i className="fa fa-bars" />} >FACEBAK</CDBSidebarHeader>
					<CDBSidebarContent>
						<CDBSidebarMenu>
							<Link to="/user/home" className="text-decoration-none">
								<CDBSidebarMenuItem icon="home">
									Home
								</CDBSidebarMenuItem>
							</Link>
							<Link to="/user/message" className="text-decoration-none">
								<CDBSidebarMenuItem icon="comments">
									Message
								</CDBSidebarMenuItem>
							</Link>
							<Link to="/user/about" className="text-decoration-none">
								<CDBSidebarMenuItem icon="info">
									About Us
								</CDBSidebarMenuItem>
							</Link>
							<Link to="/" className="text-decoration-none">
								<CDBSidebarMenuItem icon="user">
									Log Out
								</CDBSidebarMenuItem>
							</Link>
						</CDBSidebarMenu>
					</CDBSidebarContent>

					<CDBSidebarFooter style={{ textAlign: 'center' }}>
					<div className="sidebar-btn-wrapper" style={{padding: '20px 5px'}}>
						ChatApp
					</div>
					</CDBSidebarFooter>
				</CDBSidebar>
			</>
	);
};

export default Navbar;