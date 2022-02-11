import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();




//todoList.nuevoTodo( tarea );



//console.log( todoList );

//crearTodoHtml(tarea);

//localStorage.setItem('mi-key','AB123');
//sessionStorage.setItem('mi-key','AB123');


todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log('todos',todoList.todos);

//const newTodo = new Todo('Aprender JavaScript!!!');
//newTodo.imprimirClase();
//todoList.todos[0].imprimirClase();