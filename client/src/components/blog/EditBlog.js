// import React, { useState, useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// import BlogContext from '../../context/blog/blogContext';

// const EditBlog = ({ match }) => {
// 	const history = useHistory();
// 	const blogId = match.params.blogId;
// 	const blogContext = useContext(BlogContext);
// 	const { updateBlog, readSingleBlog, singleBlog } = blogContext;

// 	const defaultPicture =
// 		'https://www.pixelstalk.net/wp-content/uploads/2016/10/Image-of-Blank.jpeg';

// 	const [blog, setBlog] = useState({
// 		title: '',
// 		imgURL: '',
// 		imgFile: null,
// 		isPublic: 'true',
// 		showName: 'true',
// 		body: '',
// 	});

// 	const { title, imgURL, imgFile, isPublic, body, showName } = blog;

// 	const clearForm = () => {
// 		setBlog({ title: '', imgURL: '', isPublic: 'true', showName: 'true', body: '' });
// 	};

// 	const handleImgUpload = (event) => {
// 		setBlog({ ...blog, ['imgFile']: URL.createObjectURL(event.target.files[0]) });
// 	};

// 	const onChange = (event) => {
// 		setBlog({ ...blog, [event.target.name]: event.target.value });
// 	};

// 	const onSubmit = (e) => {
// 		e.preventDefault();
// 		// if (!blog.imgURL) blog.imgURL = defaultPicture;

// 		blog.isPublic === 'true' ? (blog.isPublic = true) : (blog.isPublic = false);
// 		blog.showName === 'true' ? (blog.showName = true) : (blog.showName = false);

// 		updateBlog(blog);

// 		clearForm();
// 		history.push('/blogs/MyBlogs');
// 	};

// 	const removePicture = () => {
// 		setBlog({ ...blog, ['imgFile']: defaultPicture });
// 	};

// 	useEffect(() => {
// 		readSingleBlog(blogId);
// 		console.log(singleBlog);

// 		let currentBlog = { ...singleBlog };
// 		if (currentBlog.isPublic !== undefined && currentBlog.showName !== undefined)
// 			currentBlog = {
// 				...currentBlog,
// 				isPublic: currentBlog.isPublic.toString(),
// 				showName: currentBlog.showName.toString(),
// 			};

// 		console.log('EditBlog -> currentBlog', currentBlog);
// 		setBlog(currentBlog);
// 	}, [singleBlog]);

// 	return (
// 		<Container>
// 			<Form onSubmit={onSubmit}>
// 				<Form.Group>
// 					<Form.Label>Blog Title</Form.Label>
// 					<Form.Control
// 						className='form-input-title--large-font'
// 						size='lg'
// 						type='text'
// 						placeholder='Give your Blog post a meaningful Title'
// 						name='title'
// 						required='Please Give your Blog post a title'
// 						autoComplete='false'
// 						value={title}
// 						onChange={onChange}
// 					/>
// 				</Form.Group>
// 				{/* <Form.Group>
// 					<Form.Label>Image URL</Form.Label>
// 					<Form.Control
// 						type='url'
// 						placeholder='Paste Image URL here'
// 						name='imgURL'
// 						value={imgURL}
// 						onChange={onChange}
// 					/>
// 				</Form.Group> */}
// 				<Form.Group>
// 					<Form.File label='Choose Blog Picture' onChange={handleImgUpload} />
// 				</Form.Group>
// 				<div className='img-preview--middle'>
// 					<img className='img-preview' src={imgFile ? imgFile : defaultPicture} alt='' />
// 				</div>
// 				{imgFile && (
// 					<a href='#' onClick={removePicture}>
// 						Remove Picture
// 					</a>
// 				)}
// 				<Form.Group>
// 					<Form.Label>Post blog as: </Form.Label>
// 					<br />
// 					<input
// 						type='radio'
// 						name='isPublic'
// 						value='true'
// 						checked={isPublic === 'true'}
// 						onChange={onChange}
// 					/>{' '}
// 					Public{' '}
// 					<input
// 						type='radio'
// 						name='isPublic'
// 						value='false'
// 						checked={isPublic === 'false'}
// 						onChange={onChange}
// 					/>{' '}
// 					Private
// 				</Form.Group>
// 				{isPublic === 'true' && (
// 					<Form.Group>
// 						<Form.Label>Show your Name when posting this blog? </Form.Label>
// 						<br />
// 						<input
// 							type='radio'
// 							name='showName'
// 							value='true'
// 							checked={showName === 'true'}
// 							onChange={onChange}
// 						/>{' '}
// 						Yes{' '}
// 						<input
// 							type='radio'
// 							name='showName'
// 							value='false'
// 							checked={showName === 'false'}
// 							onChange={onChange}
// 						/>{' '}
// 						No
// 					</Form.Group>
// 				)}
// 				<Form.Group>
// 					<Form.Label>Blog Body</Form.Label>
// 					<Form.Control
// 						as='textarea'
// 						rows='20'
// 						placeholder='Put your Thoughts into Words...'
// 						name='body'
// 						value={body}
// 						onChange={onChange}
// 						required
// 						minLength={50}
// 					/>
// 				</Form.Group>

// 				<Button block className='button' size='lg' variant='success' type='submit'>
// 					Update Blog
// 				</Button>
// 			</Form>
// 			<br />
// 			<br />
// 			<br />
// 			<br />
// 			<br />
// 		</Container>
// 	);
// };

// export default EditBlog;

import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PostBlog from './PostBlog';
import BlogContext from '../../context/blog/blogContext';

const EditBlog = ({ match }) => {
	const history = useHistory();
	const blogId = match.params.blogId;
	const blogContext = useContext(BlogContext);
	const { updateBlog, readSingleBlog, singleBlog } = blogContext;

	const [blog, setBlog] = useState({
		title: '',
		imgURL: '',
		imgFile: null,
		isPublic: 'true',
		showName: 'true',
		body: '',
	});

	useEffect(() => {
		readSingleBlog(blogId);
		console.log(singleBlog);

		let currentBlog = { ...singleBlog };
		if (currentBlog.isPublic !== undefined && currentBlog.showName !== undefined)
			currentBlog = {
				...currentBlog,
				isPublic: currentBlog.isPublic.toString(),
				showName: currentBlog.showName.toString(),
			};

		console.log('EditBlog -> currentBlog', currentBlog);
		setBlog(currentBlog);
	}, [singleBlog]);

	return <PostBlog currentBlog={blog} edit={true}></PostBlog>;
};

export default EditBlog;
