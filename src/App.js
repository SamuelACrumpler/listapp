import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './css/App.css';
import Login from './Login';
import Signup from './Signup';
import Main from './Main';

//<Route path="/about" component={About} />

function App() {
	return (
		<main>
			<Switch>
				<Route path="/" component={Login} exact />
				<Route path="/Signup" component={Signup} />
				<Route path="/Main" component={Main} />
			</Switch>
		</main>
  );
}

export default App;
