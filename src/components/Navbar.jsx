import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter } from 'cdbreact';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="d-flex vh-100">
      <CDBSidebar>
			<CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Menu</CDBSidebarHeader>
			<CDBSidebarContent>
			<CDBSidebarMenu>
				<Link to="/user/home" className="text-decoration-none">
					<CDBSidebarMenuItem icon="th-large">
						Home
					</CDBSidebarMenuItem>
				</Link>
				<Link to="/user/message" className="text-decoration-none">
					<CDBSidebarMenuItem icon="sticky-note">
						Message
					</CDBSidebarMenuItem>
				</Link>
				<Link to="/user/about" className="text-decoration-none">
					<CDBSidebarMenuItem icon="credit-card" iconType="solid">
						About Us
					</CDBSidebarMenuItem>
				</Link>
				<Link to="/" className="text-decoration-none">
					<CDBSidebarMenuItem icon="credit-card" iconType="solid">
						Log Out
					</CDBSidebarMenuItem>
				</Link>
			</CDBSidebarMenu>
			</CDBSidebarContent>

			<CDBSidebarFooter style={{ textAlign: 'center' }}>
			<div className="sidebar-btn-wrapper" style={{padding: '20px 5px'}}>
				facebak ChatApp
			</div>
			</CDBSidebarFooter>
		</CDBSidebar>
		<div className="container">
			<Outlet />
		</div>
    </div>
  );
};

export default Navbar;