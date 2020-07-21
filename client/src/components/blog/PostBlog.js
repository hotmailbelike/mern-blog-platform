import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import BlogContext from '../../context/blog/blogContext';

const PostBlog = () => {
	const history = useHistory();
	const blogContext = useContext(BlogContext);

	const { addBlog } = blogContext;

	const [blog, setBlog] = useState({
		title: '',
		imgURL: '',
		imgFile: null,
		isPublic: 'true',
		showName: 'true',
		body: '',
	});

	const { title, imgURL, imgFile, isPublic, body, showName } = blog;

	const clearForm = () => {
		setBlog({
			title: '',
			imgURL: '',
			imgFile: null,
			isPublic: 'true',
			showName: 'true',
			body: '',
		});
	};

	const handleImgUpload = (event) => {
		setBlog({ ...blog, ['imgFile']: URL.createObjectURL(event.target.files[0]) });
	};

	const onChange = (event) => {
		setBlog({ ...blog, [event.target.name]: event.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// if (!blog.imgURL)
		// 	blog.imgURL =
		// 		'https://www.pixelstalk.net/wp-content/uploads/2016/10/Image-of-Blank.jpeg';

		blog.isPublic === 'true' ? (blog.isPublic = true) : (blog.isPublic = false);
		blog.showName === 'true' ? (blog.showName = true) : (blog.showName = false);
		delete blog.imgURL;

		addBlog(blog);
		clearForm();
		blog.isPublic ? history.push('/') : history.push('/blogs/MyBlogs');
	};

	useEffect(() => {}, [blogContext]);

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
				{/* <Form.Group>
					<Form.Label>Image URL</Form.Label>
					<Form.Control
						type='url'
						placeholder='Paste Image URL here'
						name='imgURL'
						value={imgURL}
						onChange={onChange}
					/>
				</Form.Group> */}
				<Form.Group>
					<Form.File label='Choose Blog Picture' onChange={handleImgUpload} />
				</Form.Group>
				<div className='img-preview--middle'>
					<img
						className='img-preview'
						src={
							imgFile
								? imgFile
								: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Image-of-Blank.jpeg'
						}
						alt=''
					/>
				</div>
				<Form.Group>
					<Form.Label>Post blog as: </Form.Label>
					<br />
					<input
						type='radio'
						name='isPublic'
						value='true'
						checked={isPublic === 'true'}
						onChange={onChange}
					/>{' '}
					Public{' '}
					<input
						type='radio'
						name='isPublic'
						value='false'
						checked={isPublic === 'false'}
						onChange={onChange}
					/>{' '}
					Private
				</Form.Group>
				{isPublic === 'true' && (
					<Form.Group>
						<Form.Label>Show your Name when posting this blog? </Form.Label>
						<br />
						<input
							type='radio'
							name='showName'
							value='true'
							checked={showName === 'true'}
							onChange={onChange}
						/>{' '}
						Yes{' '}
						<input
							type='radio'
							name='showName'
							value='false'
							checked={showName === 'false'}
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
					Post your blog!
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

export default PostBlog;
