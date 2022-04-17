import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const completeTodo = (id) => {
        let updatedTodoS = todos.map((todo) => {
            if (todo.id === id) todo.isComplete = !todo.isComplete;
            return todo;
        });
        setTodos(updatedTodoS);
    };

    const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const updateTodo = (todoId, newTodo) => {
        if (!newTodo.text || /^\s*$/.test(newTodo.text)) return;

        setTodos(todos.map((todo) => (todo.id === todoId ? newTodo : todo)));
    };

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
