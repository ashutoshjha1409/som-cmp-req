import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Select from 'react-select';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var options = [
  { value: 'first', label: 'One' },
  { value: 'second', label: 'Two' }
];

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default class Request extends Component{
	constructor(props){
		super(props);
		this.state = {
			filesSelected: []
		}
		this.handleChange = this.handleChange.bind(this);
	}

	menuItems(values) {
	    return names.map((name) => (
	      <MenuItem
	        key={name}
	        insetChildren={true}
	        checked={values && values.includes(name)}
	        value={name}
	        primaryText={name}
	      />
	    ));
	}

	handleChange(event, index, values){
		this.setState({filesSelected: values});
	}

	render(){
		let {filesSelected} = this.state;
		return(
			<div>
				<Grid>
					<Cell col={3} className="requestLabels"><b>Component Name</b></Cell>
					<Cell col={4}>
						<Select
						  name="form-field-name"
						  value="first"
						  options={options}						  
						/>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={3} className="requestLabels"><b>Files</b></Cell>
					<Cell col={4}>
						 <SelectField
					        multiple={true}
					        hintText="Select a name"
					        fullWidth={true}
					        value={filesSelected}
					        onChange={this.handleChange}
					      >
					        {this.menuItems(filesSelected)}
					      </SelectField>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={3} className="requestLabels"><b>From Date</b></Cell>
					<Cell col={4} className="left">
						<DatePicker 
							hintText="From Date"							
							autoOk={true}
						/>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={3} className="requestLabels"><b>To Date</b></Cell>
					<Cell col={4} className="left">
						<DatePicker 
							hintText="To Date"							
							autoOk={true}
						/>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={3} className="requestLabels"><b>Requestor Name</b></Cell>
					<Cell col={4}>
						<Select
						  name="form-field-name"
						  value="first"
						  options={options}						  
						/>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={3} offset={4}>
						<RaisedButton label="Request" primary={true} />
					</Cell>
				</Grid>
			</div>
		);
	}
}