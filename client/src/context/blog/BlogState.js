import React, { useReducer } from 'react';

import BlogContext from './blogContext';
import blogReducer from './blogReducer';

const temp =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem officia nostrum culpa architecto, eius labore deserunt optio. Facilis debitis, est maxime recusandae beatae quam doloremque, eaque ducimus, nihil sint saepe a sit vitae eligendi. Saepe, dolor? Recusandae impedit aliquid itaque alias voluptatibus corporis. Inventore ducimus consequuntur, dolores quam non architecto expedita, qui sit id exercitationem aliquid in! Reprehenderit unde ab et dolores animi inventore ut ad porro blanditiis voluptate quisquam repellat natus eaque soluta optio libero, culpa commodi consectetur delectus, consequuntur sed nostrum? Soluta accusamus vel nihil modi, inventore unde cum! Quae soluta fuga eaque. Adipisci ullam repellendus asperiores.';

const names = [
	'Micecetuhe',
	'Dadafiqusa',
	'Teqotiroci',
	'Pogejadaje',
	'Nocenemosi',
	'Torinerure',
];

const BlogState = (props) => {
	const initialState = {
		blogs: [
			{
				_id: '8547',
				title: 'Classic Cars Redesigned',
				imgFile:
					'https://images.unsplash.com/photo-1529426301869-82f4d98d3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
				isPublic: false,
				showName: false,
				body: temp,
				createdBy: 'Randa',
			},
			{
				_id: '4521',
				title: 'Squirrels are Smart!',
				imgFile:
					'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
				isPublic: true,
				showName: false,
				body: temp,
				createdBy: 'The Jackal',
			},
			{
				_id: '1',
				title: 'Christmas all Around the World',
				imgFile:
					'https://images.unsplash.com/photo-1514064982421-df8563d62bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
				isPublic: true,
				showName: true,
				body: temp,
				createdBy: 'The Jackal',
			},
			{
				_id: '2',
				title: 'The White Wolf and its Nature',
				imgFile:
					'https://images.unsplash.com/photo-1580298689915-73cb3035ae1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
				isPublic: true,
				showName: false,
				body: temp,
				createdBy: 'Brigid',
			},
		],

		singleBlog: {},
	};
	const [state, dispatch] = useReducer(blogReducer, initialState);

	//Get All Blogs

	//Get Logged in User's Blogs

	//Read Single Blog
	const readSingleBlog = (blogId) => {
		dispatch({ type: `READ_SINGLE_BLOG`, payload: blogId });
	};

	//Add Blog
	const addBlog = (blog) => {
		blog._id = (Math.floor(Math.random() * 1000) + 1).toString();
		blog.createdBy = names[Math.floor(Math.random() * names.length)];
		console.log('addBlog -> blog', blog);
		dispatch({ type: `ADD_BLOG`, payload: blog });
	};

	//Delete Blog
	const deleteBlog = (blogId) => {
		dispatch({ type: `DELETE_SINGLE_BLOG`, payload: blogId });
	};

	//Update Blog
	const updateBlog = (blog) => {
		dispatch({ type: `Update_Blog`, payload: blog });
	};

	return (
		<BlogContext.Provider
			value={{
				blogs: state.blogs,
				singleBlog: state.singleBlog,
				addBlog,
				readSingleBlog,
				deleteBlog,
				updateBlog,
			}}
		>
			{props.children}
		</BlogContext.Provider>
	);
};

export default BlogState;
