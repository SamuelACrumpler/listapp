import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './css/App.css';
import Login from './Login';
import Signup from './Signup';
//<Route path="/about" component={About} />

function App() {
	return (
		<main>
			<Switch>
				<Route path="/" component={Login} exact />
				<Route path="/Signup" component={Signup} />
			
			</Switch>
		</main>
  );
}

export default App;
