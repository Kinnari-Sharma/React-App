import React from 'react';
import CardText from './CardText';
import CardDesc from './CardDesc';
import { Button } from 'react-bootstrap';

export default class CardItem extends React.Component{

	render() {	
		return(
			<div className="cardWrapper">
				<Button bsStyle="primary" bsSize="small" className="btn btn-primary btn-remove" onClick={(e)=>this.props.removeCard(this.props.id)}>
				x
				</Button>
				<CardText text = {this.props.card.text} setTitle = {this.props.setTitle} id = {this.props.id} cards = {this.props.cards}/>
				<CardDesc desc = {this.props.card.description} setDesc = {this.props.setDesc} id = {this.props.card.id}/>
				<span className="date">{this.props.card.date}</span>
			</div>
		);
	}
}