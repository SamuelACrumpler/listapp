//This needs to do activate update on CRUD
//Favorite food app. Needs
//Table Name:  Food
//DATA TYPES: int: ID, String Name, String(ComboBox) Type, int(Covert from string) = Rating


//Program Save Button to just trigger print function

import React, { Component } from 'react';
import './css/login.css';
import food from './js/classes/food.js';

function Main() {
	var apple = new food(1, "apple", "fruit", 5);
	apple.print();
}

export default Main;

