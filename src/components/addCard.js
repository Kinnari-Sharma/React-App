import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class CardInput extends Component {
	render() {

		return(
			<Button bsStyle="primary" bsSize="large" className="btn btn-primary btn-custom" onClick = {this.props.addCard}>
				Add Card
			</Button>

		);
	}
}