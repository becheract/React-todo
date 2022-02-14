import React, { Component } from 'react'
import uuid from 'react-uuid';
export default class Form extends Component {
//setting state
constructor(props) {
    super(props);
    this.state = {
        description : '',
        done : false,
        errorMessage: null,
        
    }
    this.handleDescription = this.handleDescription.bind(this);

 
}
handleDescription = e => {
    this.setState({ description : e.target.value})
    console.log(e.target.value);

};

handleDone = e => {
    this.setState({ done : e.target.value})
    console.log(e.target.value);
};

handleSubmit = e => {
    e.preventDefault();

    if(this.state.description === "")  {
        this.setState({ errorMessage : alert("Enter Description")})
    }else{
       const newTask = {
       id: uuid(),
       description: this.state.description,
       done: this.state.done
    };
    console.log(newTask);
    this.props.addTask(newTask);

    this.setState({description : ''});
    this.setState({done : false });
    }

};

  render() {
    return (
      <div>
          <h2>Add a new task</h2>
          <div>
              {this.state.description === '' ? 'invalid entry: enter a description' : 'description'}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" htmlFor="Description" maxLength="150" value={this.state.description} onChange={this.handleDescription}/>
            <select value={this.state.done} onChange={this.handleDone}>
                <option value={false}>Not Completed</option>
                <option value={true}>Completed</option>
            </select>
            <button type="submit" htmlFor="Add">Submit</button>
          </form>
      </div>
    )
  }
}
