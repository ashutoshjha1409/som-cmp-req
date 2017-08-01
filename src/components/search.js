import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Select from 'react-select';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

var products = [
	{id: '1', name: 'Ashutosh', files: 'JS, CSS', startDate: '31-07-2017 10:00', endDate: '31-07-2017 12:00', component: "first"},
	{id: '2', name: 'kumar', files: 'JS, CSS', startDate: '31-07-2017 10:00', endDate: '31-07-2017 12:00', component: "sec"},
	{id: '3', name: 'Jha', files: 'JS, CSS', startDate: '31-07-2017 10:00', endDate: '31-07-2017 12:00', component: "third"},
	{id: '4', name: 'Phelps', files: 'JS, CSS', startDate: '31-07-2017 10:00', endDate: '31-07-2017 12:00', component: "first"},	
];

export default class Search extends Component{
	constructor(props){
		super(props);
		this.state = {
			selectedCmp: "one",
		}
		this.onChangeCmpSelection = this.onChangeCmpSelection.bind(this);
	}

	onChangeCmpSelection(val){
		this.setState({selectedCmp: val.value})
	}

	render(){
		let {selectedCmp} = this.state;
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<DatePicker 
							hintText="From Date"
							floatingLabelText="From Date"
							autoOk={true}
						/>
					</Cell>
					<Cell col={4}>
						<DatePicker 
							hintText="To Date"
							floatingLabelText="To Date"
							autoOk={true}
						/>
					</Cell>
					<Cell col={4} style={{textAlign: 'left'}}>
						<RaisedButton label="Search" primary={true}/>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={4}><b>Or Search by Component: </b></Cell>
					<Cell col={4}>
						<Select
						  name="form-field-name"
						  value={selectedCmp}
						  options={options}
						  onChange={this.onChangeCmpSelection}
						/>
					</Cell>
					<Cell col={2} style={{textAlign: 'left'}}>
						<RaisedButton label="Search" primary={true}/>
					</Cell>
				</Grid>
				<Grid>
					<Cell col={12}>
						<BootstrapTable data={products} striped hover>
					      <TableHeaderColumn isKey dataField='id'>Sl No</TableHeaderColumn>
					      <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
					      <TableHeaderColumn dataField='component'>Component</TableHeaderColumn>
					      <TableHeaderColumn dataField='files'>Files</TableHeaderColumn>
					      <TableHeaderColumn dataField='startDate'>Start Date</TableHeaderColumn>
					      <TableHeaderColumn dataField='endDate'>End Date</TableHeaderColumn>
					  </BootstrapTable>
					</Cell>
				</Grid>
			</div>
		);
	}
}