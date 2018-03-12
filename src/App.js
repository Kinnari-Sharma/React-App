import React, { Component } from 'react';
import { arrayMove } from 'react-sortable-hoc';

import CardInput from './components/addCard';
import DateFilter from './components/dateFilter';
import { format_date } from './helpers/format_date';
import { SortableList } from './components/sortableList';
import { Header } from './components/header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
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
    let cards = this.state.cards.slice();
    let nextId = this.state.nextId;
    for (var i = 0; i < cards.length; i++) {
      if(cards[i].text === ""){
        window.alert("Card Present");
        return;
      }
    }
    cards.push({id: this.state.nextId, text: "", description: "", date: format_date(Date())});
    this.setState({
      cards: cards,
      nextId: nextId+1,
    });
  }

  removeCard(id){
    this.setState({
      cards: this.state.cards.filter((card, index) => card.id !== id )
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      cards: arrayMove(this.state.cards, oldIndex, newIndex),
    });
  };

  setTitle(text, id){
    let cards = this.state.cards.slice();
    for (var i = 0; i < cards.length; i++) {
      if(cards[i].id === id){
        cards[i].text = text;
      }
    }
    this.setState({
      cards: cards
    });
  }

  setDesc(desc, id){
    let cards = this.state.cards.slice();
    for (var i = 0; i < cards.length; i++) {
      if(cards[i].id === id){
        cards[i].description = desc;
      }
    }
    this.setState({
      cards: cards
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
      filteredTodos = this.state.cards;
    }
    else{
      filteredTodos = this.state.cards.filter(
      (card) => {
          return card.date === this.state.date;
        }
      );
    }
    
    return (
      <div className="App">
          <Header />
          <div className="controls">
            <CardInput addCard = {this.addCard} />
            <DateFilter getDate = {this.getDate} />
          </div>
        <hr />
        <SortableList items={filteredTodos} onSortEnd={this.onSortEnd} axis={'xy'} removeCard = {this.removeCard} setTitle = {this.setTitle} setDesc = {this.setDesc} cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
