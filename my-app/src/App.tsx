import "./App.scss";
import {MemberCard} from "../src/components/memberCard";
import {useCallback, useEffect, useState} from "react";
import {UserProps} from "./components/memberCard/types";
import Form from "./components/form";
import {Tabs} from "./components/tabs";
import {getUsers} from "./api/users";
import {UserList} from "./components/userList";
import {User} from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [addedUser, setAddedUser] = useState<UserProps | null>(null);
  const [isTabForm, setTabForm] = useState(true);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  const handleMoreUsers = () => {
    getUsers().then((res) => setUsers(prevUsers => [...prevUsers, ...res]))
  };

  const handleUserAddition = useCallback((user: UserProps) => {
    setAddedUser(user);
  }, []);

  return (
      <div className="App">
        <Tabs onChange={setTabForm}/>
        {isTabForm
            ? <Form onUserAddition={handleUserAddition}/>
            : <UserList users={users} onClickMoreUsers={handleMoreUsers}/>
        }
        {addedUser && <MemberCard {...addedUser}/>}
      </div>
  );
}
