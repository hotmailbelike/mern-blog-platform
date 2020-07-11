import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import BlogContext from '../../context/blog/blogContext';

const EditBlog = ({ match }) => {
	const history = useHistory();
	const blogId = match.params.blogId;
	const blogContext = useContext(BlogContext);
	const { updateBlog, readSingleBlog, singleBlog } = blogContext;

	const [blog, setBlog] = useState({
		title: '',
		imgURL: '',
		type: '',
		showName: '',
		body: '',
	});

	const { title, imgURL, type, body, showName } = blog;

	const clearForm = () => {
		setBlog({ title: '', imgURL: '', type: 'public', showName: 'yes', body: '' });
	};

	const onChange = (event) => {
		setBlog({ ...blog, [event.target.name]: event.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!blog.imgURL)
			blog.imgURL =
				'https://www.pixelstalk.net/wp-content/uploads/2016/10/Image-of-Blank.jpeg';

		if (type === `private`) blog.showName = `no`;

		updateBlog(blog);

		clearForm();
		history.push('/blogs/MyBlogs');
	};

	useEffect(() => {
		readSingleBlog(blogId);
		setBlog(singleBlog);
	}, [singleBlog]);

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>Blog Title</Form.Label>
					<Form.Control
						className='form-input-title--large-font'
						size='lg'
						type='text'
						placeholder='Give your Blog post a meaningful Title'
						name='title'
						required='Please Give your Blog post a title'
						autoComplete='false'
						value={title}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Image URL</Form.Label>
					<Form.Control
						type='url'
						placeholder='Paste Image URL here'
						name='imgURL'
						value={imgURL}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Post blog as: </Form.Label>
					<br />
					<input
						type='radio'
						name='type'
						value='public'
						checked={type === 'public'}
						onChange={onChange}
					/>{' '}
					Public{' '}
					<input
						type='radio'
						name='type'
						value='private'
						checked={type === 'private'}
						onChange={onChange}
					/>{' '}
					Private
				</Form.Group>
				{type === 'public' && (
					<Form.Group>
						<Form.Label>Show your Name when posting this blog? </Form.Label>
						<br />
						<input
							type='radio'
							name='showName'
							value='yes'
							checked={showName === 'yes'}
							onChange={onChange}
						/>{' '}
						Yes{' '}
						<input
							type='radio'
							name='showName'
							value='no'
							checked={showName === 'no'}
							onChange={onChange}
						/>{' '}
						No
					</Form.Group>
				)}
				<Form.Group>
					<Form.Label>Blog Body</Form.Label>
					<Form.Control
						as='textarea'
						rows='20'
						placeholder='Put your Thoughts into Words...'
						name='body'
						value={body}
						onChange={onChange}
						required
						minLength={50}
					/>
				</Form.Group>

				<Button block className='button' size='lg' variant='success' type='submit'>
					Update Blog
				</Button>
			</Form>
			<br />
			<br />
			<br />
			<br />
			<br />
		</Container>
	);
};

export default EditBlog;
