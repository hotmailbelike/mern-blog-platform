export default (state, action) => {
	switch (action.type) {
		case `ADD_BLOG`:
			return { ...state };

		default:
			return state;
	}
};
