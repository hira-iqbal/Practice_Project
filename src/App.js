import React, {useState} from 'react';
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
    <div>
      <AddUser onAddUser={UserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
