import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import DeleteBlogModal from './DeleteBlogModal';

import BlogContext from '../../context/blog/blogContext';

const BlogItem = ({ blog }) => {
	const blogContext = useContext(BlogContext);
	const { deleteBlog } = blogContext;

	const [mouse, setMouse] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const deleteCurrentBlog = (blogId) => {
		deleteBlog(blogId);
	};

	return (
		<Container
			onMouseEnter={() => {
				setMouse(true);
			}}
			onMouseLeave={() => {
				setMouse(false);
			}}
			className='container-body'
		>
			<Card className='card'>
				<div className='hover-message'>
					<Link to={'/blogs/' + blog._id}>
						<a href={'/blogs/' + blog._id} title='Click to read this Blog'>
							{' '}
							<img
								id='card-img'
								className='card__image'
								fluid
								src={blog.imgURL}
								alt={blog.title}
							></img>
						</a>
					</Link>
				</div>

				{mouse && (
					<TransitionGroup>
						<CSSTransition timeout={500}>
							<Card.ImgOverlay className='card__imgOverlay'>
								{' '}
								<Link to={'/blogs/edit/' + blog._id}>
									<Button size='sm' variant='outline-primary'>
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
							</Card.ImgOverlay>
						</CSSTransition>
					</TransitionGroup>
				)}
				<Card.Body>
					<Card.Title className='card__title--large card__title--middle'>
						<div className='card__image--hover-message'>
							<Link className='link--no-decoration' to={'/blogs/' + blog._id}>
								<a
									className='link--no-decoration'
									href={'/blogs/' + blog._id}
									title='Click to read this Blog'
								>
									<b className='card-title--middle'>{blog.title}</b>
								</a>
							</Link>
						</div>
					</Card.Title>
					<Card.Subtitle className='mb-1 mt-1 text-muted'>
						Posted by: {blog.createdBy}
					</Card.Subtitle>
				</Card.Body>
			</Card>

			{/* Modal */}
			<DeleteBlogModal
				showModal={showModal}
				setShowModal={setShowModal}
				title={blog.title}
				blogId={blog._id}
				deleteCurrentBlog={deleteCurrentBlog}
			></DeleteBlogModal>
		</Container>
	);
};

export default BlogItem;
