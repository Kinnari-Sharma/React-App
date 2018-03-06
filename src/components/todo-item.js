import React from 'react';
import TodoText from './todo-text';
import TodoDesc from './todo-desc';
import {Button} from 'react-bootstrap';

export default class TodoItem extends React.Component{

	render() {	
		return(
			<div className="todoWrapper">
				<Button bsStyle="primary" bsSize="small" className="btn btn-primary btn-remove" onClick={(e)=>this.props.removeCard(this.props.id)}>
				x
				</Button>
				<TodoText text = {this.props.todo.text} setTitle = {this.props.setTitle} id = {this.props.id} todos = {this.props.todos}/>
				<TodoDesc desc = {this.props.todo.description} setDesc = {this.props.setDesc} id = {this.props.todo.id}/>
				<span className="date">{this.props.todo.date}</span>
			</div>
		);
	}
}