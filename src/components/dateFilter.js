import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class DateFilter extends React.Component {

	constructor (props) {
    super(props)
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
    if(date!=null){
    	let d = String(date._d).split(" ");
    	let formatted_date = d[1]+" "+d[2]+" "+d[3];
    	this.props.getDate(formatted_date);
  	}
    else{
    	this.props.getDate(date);
    }

  }

	render() {
		return(
			<DatePicker
		  	selected={this.state.startDate}
	  		onChange={this.handleChange }
	  		dateFormat="DD/MM/YYYY"
	  		isClearable={true}
	  		placeholderText="Date Filter"
	  		className = "date-filter"
	  		calendarClassName = "calender"
			/>

		);
	}
}