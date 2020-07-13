import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import BlogContext from '../../context/blog/blogContext';
import BlogItem from './BlogItem';

const MyBlogs = () => {
	const blogContext = useContext(BlogContext);
	let { blogs } = blogContext;

	const myBlogs = blogs.filter((blog) => blog.createdBy === `The Jackal`); //will be changed to whichever user is logged in

	if (!myBlogs || myBlogs.length === 0) {
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
			{myBlogs.map((blog) => (
				<BlogItem key={blog._id} userBlog={true} blog={blog}></BlogItem>
			))}
		</>
	);
};

export default MyBlogs;
