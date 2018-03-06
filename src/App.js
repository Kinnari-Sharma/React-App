import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './components/header';
import CardInput from './components/add-card';
import TodoItem from './components/todo-item';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import DateFilter from './components/date-filter';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Captain America", description: "The first avenger and oldest of the team. Currently a nomad. -Chris Evans", date: "Mar 06 2018"},
        {id: 1, text: "Ironman", description: "Rich. Philanthropist. Genius. Playboy. -Robert downy Jr. ", date: format_date(Date())},
        {id: 2, text: "Black Panther", description: "He never Freezes. Except once. -Chadwick Boseman", date: "Mar 02 2018"},
        {id: 3, text: "Dr. Strange", description: "Not Mr. Strange. Currently a wizard like Loki. -Benedict Cumberbatch", date: format_date(Date())},
        {id: 4, text: "Black Widow", description: "Keeps looking after her teammates. -Scarlet Johannson", date: format_date(Date())},
      ],
      nextId: 5,
      date: null
    }

    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDesc = this.setDesc.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  

  addCard(){
    let todos = this.state.todos.slice();
    let nextId = this.state.nextId;
    for (var i = 0; i < todos.length; i++) {
      if(todos[i].text === ""){
        window.alert("Card Present");
        return;
      }
    }
    todos.push({id: this.state.nextId, text: "", description: "", date: format_date(Date())});
    this.setState({
      todos: todos,
      nextId: nextId+1,
    });
  }

  removeCard(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id )
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      todos: arrayMove(this.state.todos, oldIndex, newIndex),
    });
  };

  setTitle(text, id){
    let todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++) {
      if(todos[i].id === id){
        todos[i].text = text;
      }
    }
    this.setState({
      todos: todos
    });
  }

  setDesc(desc, id){
    let todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++) {
      if(todos[i].id === id){
        todos[i].description = desc;
      }
    }
    this.setState({
      todos: todos
    });
  }


  getDate(date){
    this.setState({
      date: date
    });
  }

  render() {
    let filteredTodos;
    if(this.state.date == null){
      filteredTodos = this.state.todos;
    }
    else{
      filteredTodos = this.state.todos.filter(
      (todo) => {
          
          return todo.date === this.state.date;
        });
    }
    
    return (
      <div className="App">
          <Header />
          <div className="controls">
            <CardInput addCard = {this.addCard} />
            <DateFilter getDate = {this.getDate} />
          </div>
        <hr />
        <SortableList items={filteredTodos} onSortEnd={this.onSortEnd} axis={'xy'} removeCard = {this.removeCard} setTitle = {this.setTitle} setDesc = {this.setDesc} todos={this.state.todos}/>
      </div>
    );
  }
}

const SortableItem = SortableElement(({value, removeCard, setTitle, setDesc, todos}) =>
  <Col sm={3}>
   <TodoItem todo = {value} key = {value.id} id={value.id} removeCard = {removeCard} setTitle = {setTitle} setDesc = {setDesc} todos={todos}/>
  </Col>
);

const SortableList = SortableContainer(({items, removeCard, setTitle, setDesc, todos}) => {

  return (
    <Grid>
    <Row>
      {
        items.map((value, index) => (
        <SortableItem key={value.id} index={index} value={value} removeCard = {removeCard} setTitle = {setTitle} setDesc = {setDesc} todos={todos}/>
      ))}
    </Row>
    </Grid>
  );
});


export default App;


function format_date(date){
  let d = String(date).split(" ");
  let formatted_date = d[1]+" "+d[2]+" "+d[3];
  return formatted_date;
}