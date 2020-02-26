import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/login.css';
import Signup from './Signup';


function Login() {
	return (
	  
		  <form class="form-login border text-center">
			<div>
				<input type="text" placeholder="Username" className="form-control" />
		  </div>

		  <div>
				<input type="password" placeholder="Password" className="form-control" />

		  </div>
		  <div className="container">
			  <div className="col">
				  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
			  </div>
			  <div className="col">

				 <Link to="/Signup"><button class="btn btn-lg btn-primary btn-block">Sign Up</button></Link>
			  </div>
		  </div>
			</form>
  );
}

export default Login;
