import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const TopNavbar = () => {
	return (
		<Container className='navbar--sticky-nav'>
			<Navbar fixed='top' /* expand='lg'  */ variant='dark' bg='info'>
				<Container>
					<Navbar.Brand>
						<Link className='nav__Link' to='/'>
							MERN BLOG
						</Link>
					</Navbar.Brand>
					<Nav>
						<Nav.Link>
							<Link className='nav__Link' to='/'>
								Home
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className='nav__Link' to='/blog/PostBlog'>
								Post Blog
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className='nav__Link' to='/blogs/MyBlogs'>
								My Blogs
							</Link>
						</Nav.Link>

						<Nav.Link>
							<Link className='nav__Link' to='/auth/Login'>
								Login
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className='nav__Link' to='/auth/Signup'>
								Signup
							</Link>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</Container>
	);
};

export default TopNavbar;
