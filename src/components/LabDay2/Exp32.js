// import React from "react"; 

// const TodoItem = ({ task, markAsDone, deleteTask }) => {
//   const handleMarkAsDoneClick = () => {
//     markAsDone(task.id);
//   };

//   const handleDeleteClick = () => {
//     deleteTask(task.id);
//   };
//   return (
//     <div className="d-flex justify-content-around align-items-center m-2">
//       <button
//         className={`mark-done-button ${
//           task.isDone ? "completed" : ""
//         } btn btn-danger`}
//         onClick={handleMarkAsDoneClick}
//       >
//         Complete
//       </button>
//       <button className="btn btn-warning" onClick={handleDeleteClick}>
//         Delete
//       </button>
//       {task.isDone && (
//         <p
//           className="Para"
//           style={{
//             textDecoration: "line-through",
//             color: "red",
//             marginTop: "5px",
//           }}
//         >
//           {task.text}
//         </p>
//       )}
//       {!task.isDone && <p className="text-dark mt-2">{task.text}</p>}
//     </div>
//   );
// };

// export default TodoItem;
// import React, { useState } from 'react';
// import TodoItem from './Exp32';

// function ToDoApp() {
//   const [Product, setProduct] = useState([]);
//   const [newApp, setNewApp] = useState('');

//   const handleInputChange = (event) => {
//     setNewApp(event.target.value);
//   };
//   const handleAddClick = () => {
//     let index =0;
//       const newTaskObj = { id: ++index, text: newApp, isDone: false };
//       setProduct([...Product, newTaskObj]);
//       setNewApp('');
    
//   };

//   const markAsDone = (taskId) => {
//     setProduct((prevTasks) => {
//       return prevTasks.map((task) => {
//         if (task.id === taskId) {
//           return { ...task, isDone: !task.isDone };
//         }
//         console.log(task);
//         return task;
//       });
//     });
//   };

//   const deleteTask = (taskId) => {
//     setProduct((prevTasks) => {
//       return prevTasks.filter((task) => task.id !== taskId);
//     });
//   };

//   return (
//     <>    <div className='bg-primary p-5 text-white d-flex flex-column w-50  '>
//       <h1>To-Do App!</h1>
//       <p>Add New To-Do</p>
//       <input
//         className='w-100  form-control'
//         type="text"
//         value={newApp}
//         onChange={handleInputChange}
//         placeholder='Enter Your Task'
//       />
//       <button className='btn btn-outline-light mt-3 w-25 mb-3' onClick={handleAddClick}>
//         Add
//       </button>
// </div>
// <div  className=' p-5 text-white d-flex flex-column w-50  ' style={{border:"3px solid black",backgroundColor:"gray"}}>
//       {Product.map((task) => (
//         <TodoItem
//           key={task.id}
//           task={task}
//           markAsDone={markAsDone}
//           deleteTask={deleteTask}
//         />
//       ))}
//     </div>
//     </>

//   );
// }

// export default ToDoApp;
