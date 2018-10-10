import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
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

  isOutsideRange = () => false

	render() {
		return(
			 
        <SingleDatePicker
          date={this.state.startDate}
          showClearDate={true}
          small={true}
          block={false}
          numberOfMonths={1}
          enableOutsideDays={true}
          isOutsideRange = {this.isOutsideRange}
	  			id = "date-filter"
          placeholder = "Date Filter"
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