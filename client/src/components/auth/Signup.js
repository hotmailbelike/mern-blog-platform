import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Signup = () => {
	return (
		<Container fluid style={{ width: '40%' }}>
			<Form>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Enter name' />
				</Form.Group>
				<Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>

				<Button variant='primary' type='submit'>
					Sign Up!
				</Button>
			</Form>
		</Container>
	);
};

export default Signup;
