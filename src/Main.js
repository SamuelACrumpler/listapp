//This needs to do activate update on CRUD
//Favorite food app. Needs
//Table Name:  Food
//DATA TYPES: int: ID, String Name, String(ComboBox) Type, int(Covert from string) = Rating


//Program Save Button to just trigger print function

import React, { Component } from 'react';
import './css/login.css';
import food from './js/classes/food.js';


//turn this into a class


class Main extends Component {
	constructor(props) {
		super(props)


		this.state = {
			list: [],
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<input type="text" placeholder="Username" className="form-control" />
					</div>
					<div className="col">

					</div>
					<div className="col">
					</div>
				</div>
				<div className="row">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Food</th>
								<th scope="col">Type</th>
								<th scope="col">Rating</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Apple</td>
								<td>Fruit</td>
								<td>3</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

function AddRow(i,n,t,r) {

	//get id, name, type, rating by ids
	//Push those values into states

	//https://www.robinwieruch.de/react-state-array-add-update-remove


	//https://reactjs.org/docs/faq-state.html for updating the state

	//https://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react info to properly add new elements by updating the state of react

	
	
	this.setState((state) => {
		// Important: read `state` instead of `this.state` when updating.
		return { list : state.count + 1 }
	});
}
 
function Main() {

	//https://codepen.io/cfmatre/pen/pgdLoR to install a proper combo box

	var apple = new food(1, "apple", "fruit", 5);
	apple.print();

	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<input type="text" placeholder="Username" className="form-control" />
				</div>
				<div className="col">

				</div>
				<div className="col">
				</div>
			</div>
			<div className="row">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Food</th>
                            <th scope="col">Type</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Apple</td>
                            <td>Fruit</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
			</div>
		</div>
		
		);
}

export default Main;

