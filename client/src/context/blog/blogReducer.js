export default (state, action) => {
	switch (action.type) {
		case `ADD_PRIVATE_BLOG`:
			return { ...state, userBlogs: [action.payload, ...state.userBlogs] };
		case `ADD_PUBLIC_BLOG`:
			return {
				...state,
				publicBlogs: [action.payload, ...state.publicBlogs],
				userBlogs: [action.payload, ...state.userBlogs],
			};
		case `READ_SINGLE_BLOG`:
			let blog = state.publicBlogs.filter((blog) => blog._id === action.payload);

			if (!blog || blog.length === 0) {
				blog = state.userBlogs.filter((blog) => blog._id === action.payload);
			}
			return {
				...state,
				singleBlog: blog[0],
			};
		case `DELETE_SINGLE_BLOG`:
			return {
				...state,
				publicBlogs: state.publicBlogs.filter((blog) => blog._id !== action.payload),
				userBlogs: state.userBlogs.filter((blog) => blog._id !== action.payload),
			};
		case `Update_Blog`:
			const userBlogs = state.userBlogs.map((blog) =>
				blog._id === action.payload._id ? action.payload : blog
			);
			const publicBlogs = userBlogs
				.filter(
					(blog, index) => blog.type === `public` && state.publicBlogs[index] !== blog._id
				)
				.concat(state.publicBlogs.filter((blog) => blog.type === `public`));
			return {
				...state,
				userBlogs,
				publicBlogs,
			};

		default:
			return state;
	}
};
