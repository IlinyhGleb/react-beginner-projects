import React from 'react'

import './index.scss';



function App() {
  //let count = 45;
  const [count, setCount] = React.useState(45); //состояние из хука useState из React, хранящее число
  //count - переменная, setCount - функция, которая будет менять эту переменную

  //стрелочная функция
  const onClickPlus = () => {
    //тело стрелочной функции
    //count++;
    setCount(count + 1) // меняет и значение count и сообщает React и JS, что изменение произошло
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
