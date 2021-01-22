import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: 'jtbc',
      checked: true,
    },
    {
      id: 2,
      text: 'go',
      checked: false,
    },
    {
      id: 3,
      text: 'go',
      checked: false,
    }
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;
