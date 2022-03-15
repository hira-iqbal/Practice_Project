import React, {useState, Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const UserHandler = (Users)=> {
      setUsers((prevUsers) => {
        return [...prevUsers, Users];
      });
    };
  return (
    <Fragment>
      <AddUser onAddUser={UserHandler}/>
      <UsersList users={users}/>
    </Fragment>
  );
}

export default App;
