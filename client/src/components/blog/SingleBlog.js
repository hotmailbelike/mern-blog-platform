import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DeleteBlogModal from './DeleteBlogModal';

import BlogContext from '../../context/blog/blogContext';

const SingleBlog = ({ match }) => {
	const history = useHistory();
	const blogId = match.params.blogId;
	const blogContext = useContext(BlogContext);
	const { readSingleBlog, singleBlog, deleteBlog } = blogContext;

	const [showModal, setShowModal] = useState(false);

	const deleteCurrentBlog = (blogId) => {
		deleteBlog(blogId);
		history.push('/blogs/MyBlogs');
	};

	useEffect(() => {
		readSingleBlog(blogId);
	}, [singleBlog]);

	return (
		<Container className='mb-5'>
			<Row>
				<div className='content--center'>
					<img
						alt={singleBlog.title}
						className='img content--center'
						fluid
						src={singleBlog.imgFile}
					/>
				</div>
				<div className='button--position'>
					<Link to={'/blogs/edit/' + singleBlog._id}>
						<Button className='mr-2' size='sm' variant='outline-primary'>
							<i class='fas fa-pen'></i>
						</Button>
					</Link>
					<Button
						onClick={() => {
							setShowModal(true);
						}}
						size='sm'
						variant='outline-warning'
					>
						<i style={{ color: 'red' }} class='fas fa-trash-alt'></i>
					</Button>
				</div>
			</Row>
			<Row className='mt-2'>
				<div className='content--center'>
					<h2>{singleBlog.title}</h2>
				</div>
			</Row>
			<Row xs={12} className='lead'>
				<div className='content--center'>
					<p className='text-muted'>by {singleBlog.createdBy}</p>
				</div>
			</Row>
			<Row className='mt-3'>
				<div className='content--center'>
					<p className='blog-body'>{singleBlog.body}</p>
				</div>
			</Row>

			{/* Modal */}
			<DeleteBlogModal
				showModal={showModal}
				setShowModal={setShowModal}
				title={singleBlog.title}
				blogId={blogId}
				deleteCurrentBlog={deleteCurrentBlog}
			></DeleteBlogModal>
		</Container>
	);
};

export default SingleBlog;
