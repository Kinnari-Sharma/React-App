import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format_date } from '../helpers/format_date';

export default class DateFilter extends React.Component {

	constructor (props) {
    super(props);
    this.state = {
      startDate: null
    };
  }
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
   this.props.getDate(format_date(date));
  }

	render() {
		return(
			<DatePicker
		  	selected={this.state.startDate}
	  		onChange={this.handleChange}
	  		dateFormat="DD/MM/YYYY"
	  		isClearable={true}
	  		placeholderText="Date Filter"
	  		className = "date-filter"
        clearButtonTitle = "Clear"
        ref={datePicker => {this.datePicker = datePicker}}
			/>
		);
	}
}