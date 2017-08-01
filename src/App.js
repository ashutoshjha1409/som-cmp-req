import React, { Component } from 'react';
import './App.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Grid, Cell} from 'react-mdl';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Search from './components/search';
import Request from './components/request';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: true
		}
		this.openLeftMenu = this.openLeftMenu.bind(this);
	}

	openLeftMenu(){
		let {open} = this.state;
		//this.setState({open: !open})
	}

	render() {
		let {open} = this.state;

		return (
			<Router>
				<div className="App">
					<AppBar
						title="Title"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						onLeftIconButtonTouchTap={this.openLeftMenu}
					/>
					<Grid className="demo-grid-ruler">
				        <Cell col={10} offset={2}>
				        	<Route path="/search" component={Search}/>
	      					<Route path="/request" component={Request}/>
				        </Cell>		        	        
				    </Grid>
					<Drawer open={open} containerStyle={{top: 64}}>
						<Link to="/search"><MenuItem>Search</MenuItem></Link>
						<Link to="/request"><MenuItem>Request</MenuItem></Link>
						<MenuItem>Profile</MenuItem>
					</Drawer>
				</div>
			</Router>
		);
	}
}

export default App;
