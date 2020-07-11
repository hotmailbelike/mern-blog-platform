import React, { useContext } from 'react';

import BlogContext from '../../context/blog/blogContext';
import BlogItem from './BlogItem';

const Blogs = () => {
	const blogContext = useContext(BlogContext);
	const { publicBlogs } = blogContext;

	return (
		<>
			{publicBlogs.map((blog) => (
				<BlogItem key={blog._id} blog={blog}></BlogItem>
			))}
		</>
	);
};

export default Blogs;
