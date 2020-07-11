import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import BlogContext from '../../context/blog/blogContext';
import BlogItem from './BlogItem';

const MyBlogs = () => {
	const blogContext = useContext(BlogContext);
	let { userBlogs } = blogContext;

	if (!userBlogs || userBlogs.length === 0) {
		return (
			<Container>
				<h2>
					You have no blog posts! <br /> Hurry up and{' '}
					<Link to='/blog/PostBlog'>create one now!</Link>
				</h2>
			</Container>
		);
	}

	return (
		<>
			{userBlogs.map((blog) => (
				<BlogItem key={blog._id} blog={blog}></BlogItem>
			))}
		</>
	);
};

export default MyBlogs;
