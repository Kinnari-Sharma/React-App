import React from 'react';

export default class TodoDesc extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			description: this.props.desc
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ description: e.target.value });
		this.props.setDesc(e.target.value, this.props.id);
	}

	render() {	
		return(
			<textarea type="text" value={this.state.description} onChange={this.handleChange} placeholder="Description" className="desc"/>
		);
	}
}