import React, { useState } from 'react'
import uuid from 'react-uuid';
import './Form.scss'
import { addTasks } from './../../../redux/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../Api/index';


export default function Form(props) {
//redux useSelector hook
useSelector((state) => state.tasks.list);
//redux dispatch hook
const dispatch = useDispatch()
//setting state
const [description, setDescription] = useState('');
const [done, setDone] = useState(false);
const [errorMessage, setErrorMessage] = useState(null);
const [saving, setSaving] = useState(false);


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
    setSaving(true)
    if(description === "")  {
        setErrorMessage("Enter Description");
    }else{
       const newTask = {
       id: uuid(),
       description: description,
       done: done
    };
    api.post('/tasks', newTask)
    .then((res) => {
        if(res.status === 201) {
          dispatch(addTasks(newTask));
          setDescription('');
          setDone(false);
          setErrorMessage(null)
          setSaving(false)
        }
    }).catch(() => {
        alert(errorMessage);
    })


    }

};

  
    return (
      <div className='form-container'>
          <h2 className='task-h2'>Add a new task</h2>
          <div>
              {description === '' ? 'Enter a description' : 'description'}
              {saving && ( 
               <div className='saving'>Saving...</div> 
              )}
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

