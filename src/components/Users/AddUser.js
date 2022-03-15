import React, { useState } from 'react';
import './AddUser.css';
import Form from './Form';


const AddUser = (props) => {

  const AddUserHandler = (enteredUserDetail) => {
    const UserDetail = {
      ...enteredUserDetail,
      id: Math.random().toString()
    };
    props.onAddUser(UserDetail);
  };

  return (
    <>
     <Form onSaveUser={AddUserHandler} />
    </>
  );
};
export default AddUser;
