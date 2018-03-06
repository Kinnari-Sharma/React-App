import React from 'react';

export default class TodoText extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      text: this.props.text
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    this.props.setTitle(e.target.value, this.props.id);
  }

  render() {  
    let titles = this.props.todos.map((todo)=>{
      console.log(todo.text);
      return todo.text;
    });
    return(
      <div>
        <input type="text" value={this.state.text}  onChange={this.handleChange} placeholder="Title" className="title" list="titles"/>
        <datalist id="titles">
          {
            titles.map((title, index) => {
              return <option value={title} key={index}/>;
            })
          }
        </datalist>
      </div>
    );
  }
}
