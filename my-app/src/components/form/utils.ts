import {FormEvent} from "react";
import {UserProps} from "../memberCard/types";

const EmptyUser = {username: "", phone: "", website: ""};

export const InputNames = {
  username: "username",
  phone: "phone",
  website: "website"
}

export const getUserData = (event: FormEvent<HTMLFormElement>) => {
  let user: UserProps = {...EmptyUser};

  //Отказался от EventSwitch и частных обработчиков на каждый инпут, так как не увидел смысла в их контролируемости
  const form = event.target as HTMLFormElement;
  for (let inputName in InputNames) {
    user = {...user, [inputName]: (form.elements.namedItem(inputName) as HTMLInputElement).value};
  }

  return JSON.stringify(user) !== JSON.stringify(EmptyUser) ? user : null;
}