export default (state, action) => {
	switch (action.type) {
		case `ADD_BLOG`:
			return { ...state, blogs: [action.payload, ...state.blogs] };

		case `READ_SINGLE_BLOG`:
			return {
				...state,
				singleBlog: state.blogs.filter((blog) => blog._id === action.payload)[0],
			};
		case `DELETE_SINGLE_BLOG`:
			return {
				...state,
				blogs: state.blogs.filter((blog) => blog._id !== action.payload),
			};
		case `UPDATE_BLOG`:
			return {
				...state,
				blogs: state.blogs.map((blog) =>
					blog._id === action.payload._id ? action.payload : blog
				),
			};

		default:
			return state;
	}
};
