import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Blog from './Blog/Blog';
import Navbar from './Navigation/Navbar/Navbar';
// import Sidebar from './Navigation/Sidebar/Sidebar';
import Footer from './Navigation/Footer/Footer';



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
				<Navbar/>
			<h1> Pets</h1>
			<p> From PostgreSQL</p>
				{pets}

				<Blog/>
				<Footer/>
			</div>
		);
	}
}

export default App;
