import React from 'react';
// import DatePicker from 'react-datepicker';
import { SingleDatePicker } from 'react-dates';
// import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
// import 'react-datepicker/dist/react-datepicker.css';
import { format_date } from '../helpers/format_date';

export default class DateFilter extends React.Component {

	constructor (props) {
    super(props);
    this.state = {
      startDate: null,
      focused: null
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
			// <DatePicker
		 //  	selected={this.state.startDate}
	  // 		onChange={this.handleChange}
	  // 		dateFormat="DD/MM/YYYY"
	  // 		isClearable={true}
	  		// placeholderText="Date Filter"
	  		// className = "date-filter"
   //      clearButtonTitle = "Clear"
   //      ref={datePicker => {this.datePicker = datePicker}}
			// />
			
        <SingleDatePicker
        	// selected={this.state.startDate}
          showClearDate={true}
          small={true}
          block={false}
          numberOfMonths={1}
          // placeholderText="Date Filter"
	  			// className = "date-filter"
          onDateChange={this.handleChange}
          focused={this.state.focused}
          onFocusChange={({ focused }) =>
            this.setState({ focused })
          }
          hideKeyboardShortcutsPanel={true}
			/>
		);
	}
}