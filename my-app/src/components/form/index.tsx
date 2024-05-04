import React, {FormEvent, memo} from 'react';
import {UserProps} from "../memberCard/types";
import {Button} from "../button";
import {createUser} from "../../api/users";
import {getUserData, InputNames} from "./utils";
import './style.scss';


interface FormProps {
  onUserAddition: (user: UserProps) => void; // Принимаем функцию для обновления состояния верхнего компонента
}

const Form: React.FC<FormProps> = ({onUserAddition}) => {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = getUserData(event);
    user && createUser(user)
      .then((user) => onUserAddition(user));
  };

  return (
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>
            Username:
            <input name={InputNames.username} type="text"/>
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input name={InputNames.phone} type="text"/>
          </label>
        </div>
        <div>
          <label>
            Website:
            <input name={InputNames.website} type="email"/>
          </label>
        </div>
        <Button className="form-container__button" type="submit">Submit</Button>
      </form>
  );
};

export default memo<FormProps>(Form);
