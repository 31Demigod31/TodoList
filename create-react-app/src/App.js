import React, { useState, useEffect } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { Container } from 'react-bootstrap';


const App = () => {
  const [todo, setTodo] = useState([])
      useEffect(() => {
        const json = localStorage.getItem('todo')
        const todo = JSON.parse(json)
        setTodo(todo ? todo : [])
      }, [])
    
      useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
      }, [todo])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
