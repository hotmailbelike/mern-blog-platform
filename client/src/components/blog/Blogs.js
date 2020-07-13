import React, { useContext } from 'react';

import BlogContext from '../../context/blog/blogContext';
import BlogItem from './BlogItem';

const Blogs = () => {
	const blogContext = useContext(BlogContext);
	const { blogs } = blogContext;

	return (
		<>
			{blogs
				.filter((blog) => blog.isPublic)
				.map((blog) => (
					<BlogItem key={blog._id} userBlog={false} blog={blog}></BlogItem>
				))}
		</>
	);
};

export default Blogs;
