import {User} from "../types";

export const createUser = (user: User): Promise<User> =>
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json());

export const getUsers = (): Promise<User[]> =>
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json());
