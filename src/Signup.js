import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/login.css';
import { Link } from 'react-router-dom';


function Signup() {
	return (

		<form class="form-login border text-center">
			<div>
				<input type="text" placeholder="Username" className="form-control" required />
			</div>
			<div>
				<input type="text" placeholder="Password" className="form-control" required />
			</div>
			<div>
				<input type="text" placeholder="Confirm Password" className="form-control" required />
			</div>
			<div className="container">
				<div className="col">
					<Link to="/Main"><button class="btn btn-lg btn-primary btn-block" type="submit">Confirm</button></Link>
				</div>
			</div>
		</form>
	);
}

export default Signup;
