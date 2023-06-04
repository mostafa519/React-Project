import { useState } from "react";

const ToDoApp = () => {
  const [todos, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    let task = document.getElementById("form1").value;
    console.log(task);
    const newTodos = {
      id: todos.length + 1,
      task: task,
      status: "Prossesing",
    };
    setTodo([...todos, newTodos]);
  };

  const deleteToDoApp = (taskId) => {
    setTodo(todos.filter((item) => item.id !== taskId));
  };
 
  const handleSubmit =(evt)=>{
    evt.preventDefault()

  }
  return (
    <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
              <div class="card rounded-3">
                <div class="card-body p-4">
                  <h4 class="text-center my-3 pb-3">To Do App</h4>

                  <form onSubmit={(e)=>{handleSubmit(e)}} class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div class="col-12" >
                      <div class="form-outline">
                        <input type="text" id="form1" class="form-control" />
                        <label class="form-label" for="form1">
                          Enter a task here
                        </label>
                      </div>
                    </div>

                    <div class="col-12">
                      <button onClick={addTodo} class="btn btn-primary">
                        Save
                      </button>
                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn btn-warning">
                        Get tasks
                      </button>
                    </div>
                  </form>

                  <table class="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos.map((todo) => (
                        <tr>
                          <th scope="row" key={todo.id}>
                            {todo.id}
                          </th>
                          <td>{todo.task}</td>
                          <td>{todo.status}</td>
                          <td>
                            <button onClick={() => deleteToDoApp(todo.id)} type="submit" class="btn btn-danger">
                              Delete
                            </button>
                            <button class="btn btn-success ms-1">
                              Finished
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToDoApp;
