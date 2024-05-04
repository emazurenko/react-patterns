import {FC} from "react";
import {MemberCard} from "../memberCard";
import {ButtonWithLabel} from "../buttonWithLabel";
import {User} from "../../types";
import "./style.scss";

interface UserListProps {
  users: User[];
  onClickMoreUsers: () => void;
}

export const UserList: FC<UserListProps> = ({users, onClickMoreUsers}) => {

  return (
      <div>
        <div className="user-list">
          {/*Ключом элемента коллекции использую порядковый индекс массива, так как происходит только последовательное добавление*/}
          {users.map((user, idx) => <MemberCard key={idx} {...user}/>)}
        </div>
        <ButtonWithLabel className="user-list__button-more" onClick={onClickMoreUsers}>more users</ButtonWithLabel>
      </div>
  );
}