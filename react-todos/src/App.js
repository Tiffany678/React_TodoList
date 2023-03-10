import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 2, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User Three'}
  ])

const addTodo = (description, assigned) =>{
  let rowNumber =0;
  if(todos.length>0){
    rowNumber = todos[todos.length-1].rowNumber+1;
  }else{
    rowNumber=1;
  }
    const newTodo = {
        rowNumber: rowNumber, 
        rowDescription:description,
        rowAssigned:assigned
        };
    setTodos(todos=>[...todos, newTodo])

  }


  return (
    <div className='mt-5 containwer'>
      <div className="card">
        <div className = "card-header">
          Your Todo's 
          </div>
          <div className="card-body">
           <TodoTable todos={todos}/>
           <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
            </button>
            <NewTodoForm addTodo={addTodo}/>
          </div>
      </div>
    </div>  
  );
}

export default App;
