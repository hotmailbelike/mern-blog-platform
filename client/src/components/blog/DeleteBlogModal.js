import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteBlogModal = ({
	showModal,
	setShowModal,
	title,
	blogId,
	deleteCurrentBlog,
}) => {
	return (
		<Modal
			show={showModal}
			onHide={() => {
				setShowModal(false);
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Confirm Delete</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Are you sure you want to delete this blog titled as, <b>{title}</b>?{' '}
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='outline-info'
					onClick={() => {
						setShowModal(false);
					}}
				>
					No
				</Button>
				<Button
					variant='outline-danger'
					onClick={() => {
						deleteCurrentBlog(blogId);
					}}
				>
					Yes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteBlogModal;
