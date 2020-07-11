import React, { useReducer } from 'react';

import BlogContext from './blogContext';
import blogReducer from './blogReducer';

const temp =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem officia nostrum culpa architecto, eius labore deserunt optio. Facilis debitis, est maxime recusandae beatae quam doloremque, eaque ducimus, nihil sint saepe a sit vitae eligendi. Saepe, dolor? Recusandae impedit aliquid itaque alias voluptatibus corporis. Inventore ducimus consequuntur, dolores quam non architecto expedita, qui sit id exercitationem aliquid in! Reprehenderit unde ab et dolores animi inventore ut ad porro blanditiis voluptate quisquam repellat natus eaque soluta optio libero, culpa commodi consectetur delectus, consequuntur sed nostrum? Soluta accusamus vel nihil modi, inventore unde cum! Quae soluta fuga eaque. Adipisci ullam repellendus asperiores.';

const BlogState = (props) => {
	const initialState = {
		userBlogs: null,
		blogs: [
			{
				_id: '1',
				title: 'Christmas all Around the World',
				imgURL:
					'https://images.unsplash.com/photo-1514064982421-df8563d62bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
				body: temp,
			},
			{
				_id: '2',
				title: 'The White Wolf and its Nature',
				imgURL:
					'https://images.unsplash.com/photo-1580298689915-73cb3035ae1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
				body: temp,
			},
		],
	};
	const [state, dispatch] = useReducer(blogReducer, initialState);

	//Get All Blogs

	//Get Logged in User's Blogs

	//Read Single Blog

	//Add Private Blog

	//Add Public Blog

	return (
		<BlogContext.Provider
			value={{
				blogs: state.blogs,
				userBlogs: state.userBlogs,
			}}
		>
			{props.children}
		</BlogContext.Provider>
	);
};

export default BlogState;
