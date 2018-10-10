import React from 'react';

export default class CardText extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      text: this.props.text
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    this.props.setTitle(e.target.value, this.props.id);
  }

  render() {  
    let titles = this.props.cards.map((card)=>{
      return card.text;
    });
    return(
      <div>
        <input type="text" value={this.state.text}  onChange={this.handleChange} placeholder="Title" className="title" list="titles"/>
        <datalist id="titles">
          {
            titles.map((title, index) => {
              console.log(title);        
              return <option value={title} key={index}/>;
            })
          }
        </datalist>
      </div>
    );
  }
}
