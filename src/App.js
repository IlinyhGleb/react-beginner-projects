import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json()) //ответ преобразуем в json
      .then((json) => {
        setUsers(json.data);
      }) //из полученного ответа берём json.data и используем в setUsers
      .catch(err => {
        console.log(err);
        alert('Ошибка при получении пользователей!');
      }); //ловим ошибку
  }, []);

  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
