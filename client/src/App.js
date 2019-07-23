import React, { Component } from 'react';
import axios from 'axios';

import './App.css';


class App extends Component {
	state = {pets:[]}

	componentDidMount () {
		axios.get('api/pets')
			.then(res => {
				const pets = res.data.data;
				this.setState({pets});
			});
	}
	render(){

		const pets = this.state.pets.map(pet => {
			return <div key={pet.id}>
				{pet.name}
			</div>;
		});

		return (
			<div className="App">
			<h1> Pets</h1>
				{pets}
			</div>
		);
	}
}

export default App;
