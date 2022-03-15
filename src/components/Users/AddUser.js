import React, { useState } from 'react';
import './AddUser.css';
import Form from './Form';


const AddUser = (props) => {

  const AddUserHandler = (enteredUserDetail) => {
    const UserDetail = {
      ...enteredUserDetail,
      id: Math.random().toString()
    };
    debugger
    props.onAddUser(UserDetail);
  };

  return (
    <div>
     <Form onSaveUser={AddUserHandler} />
    </div>

    );
};
export default AddUser;
