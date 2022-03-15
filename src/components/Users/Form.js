import React, { useState } from 'react';
import './Form.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModel';
const Form = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const SubmitHandler = (event) => {
    event.preventDefault();

    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)'
      });
      return;
    }

    if(+enteredAge < 1){
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)'
      });
      return;
    }

    const UserDetail= {
      username: enteredUserName,
      age: +enteredAge
    };
    props.onSaveUser(UserDetail);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const NameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };


  return(
    [
      error && (<ErrorModal key='error-model' title={error.title} message={error.message} onConfirm={errorHandler}/>),
      <Card key='user-card' className="form">
        <form onSubmit={SubmitHandler}>
          <label htmlFor="username" >User Name</label>
          <input id="username" type="text" value={enteredUserName} onChange={NameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="username" type="number" value={enteredAge} onChange={AgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    ]
  );
};
export default Form;
