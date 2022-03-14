import React, { useState } from 'react';
import './Form.css';
import Card from '../UI/Card';
const Form = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const SubmitHandler = (event) => {
    event.preventDefault();

    const UserDetail= {
      username: enteredUserName,
      age: +enteredAge
    };
  };

  const NameChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return(
    <Card>
      <form className="form-control" onSubmit={SubmitHandler}>
        <label className="" htmlFor="username" > User Name</label>
        <input id="username" type="text" value = {enteredUserName} onChange={NameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="username" type="number" value = {enteredAge} onChange={AgeChangeHandler} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
export default Form;
