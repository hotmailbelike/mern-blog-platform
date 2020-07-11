import React, { Fragment } from 'react';
// import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../src/styles/styles.scss';
import TopNavbar from './components/layout/TopNavbar';
import Home from './components/pages/Home';
import PostBlog from './components/blog/PostBlog';
import MyBlogs from './components/blog/MyBlogs';
import SingleBlog from './components/blog/SingleBlog';
import EditBlog from './components/blog/EditBlog';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ScrollToTop from './components/routing/ScrollToTop';

import BlogState from './context/blog/BlogState';

function App() {
	return (
		<BlogState>
			<Router>
				<Fragment>
					<TopNavbar></TopNavbar>
					<ScrollToTop>
						<div>
							<Switch>
								<Route exact path='/' component={Home}></Route>
								<Route exact path='/blog/PostBlog' component={PostBlog}></Route>
								<Route exact path='/auth/Login' component={Login}></Route>
								<Route exact path='/auth/Signup' component={Signup}></Route>
								<Route exact path='/blogs/MyBlogs' component={MyBlogs}></Route>
								<Route exact path='/blogs/edit/:blogId' component={EditBlog}></Route>
								<Route exact path='/blogs/:blogId' component={SingleBlog}></Route>
							</Switch>
						</div>
					</ScrollToTop>
				</Fragment>
			</Router>
		</BlogState>
	);
}

export default App;
