import React, { useState } from 'react'
import uuid from 'react-uuid';
import './Form.scss'
export default function Form(props) {
//setting state
const [description, setDescription] = useState('');
const [done, setDone] = useState(false);
const [errorMessage, setErrorMessage] = useState(null);

   

const handleDescription = e => {
    setDescription(e.target.value);
    console.log(e.target.value);

};

const handleDone = e => {
    setDone(e.target.value);
    console.log(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    if(description === "")  {
        setErrorMessage(alert("Enter Description"));
    }else{
       const newTask = {
       id: uuid(),
       description: description,
       done: done
    };
    console.log(newTask);
    props.addTask(newTask);

    setDescription('');
    setDone(false);
    }

};

  
    return (
      <div className='form-container'>
          <h2 className='task-h2'>Add a new task</h2>
          <div>
              {description === '' ? 'invalid entry: enter a description' : 'description'}
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" htmlFor="Description" placeholder="Enter Task Description Here" maxLength="150" value={description} onChange={handleDescription}/>
            <select className="form-drop"  value={done} onChange={handleDone}>
                <option className="form-btn" value={false}>Not Completed</option>
                <option className="form-btn" value={true}>Completed</option>
            </select>
            <button className="form-btn" type="submit" htmlFor="Add">Submit</button>
          </form>
      </div>
    )
  }

