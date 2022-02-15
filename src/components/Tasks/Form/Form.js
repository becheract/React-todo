import React, { Component } from 'react'
import uuid from 'react-uuid';
import './Form.scss'
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
      <div className='form-container'>
          <h2 className='task-h2'>Add a new task</h2>
          <div>
              {this.state.description === '' ? 'invalid entry: enter a description' : 'description'}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" htmlFor="Description" placeholder="Enter Task Description Here" maxLength="150" value={this.state.description} onChange={this.handleDescription}/>
            <select className="form-drop"  value={this.state.done} onChange={this.handleDone}>
                <option className="form-btn" value={false}>Not Completed</option>
                <option className="form-btn" value={true}>Completed</option>
            </select>
            <button className="form-btn" type="submit" htmlFor="Add">Submit</button>
          </form>
      </div>
    )
  }
}
