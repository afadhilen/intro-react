import React from "react";
// import {ReactDOM} from "react";

function Todo() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState([]);
  const [msg, setMsg] = React.useState("");
  // const [status, setStatus] = React.useState("");

  function generateID() {
    return Date.now(); //menggunakan date sebagai unique id
  }

  // event handler agar submit form tidak menggunakan default eventnya (method GET dan auto reload page)
  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMsg("Produktif dikitlah bro :(");
    }

    //check apakah form memiliki data dari edit (edit.id)
    if (edit.id) {
      const updatedTodo = {
        ...edit, //ambil semua data pada array 'edit'
        activity: activity,
      };
      // console.log(updatedTodo);
      //cari index dari list yang diedit
      const findTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos]; //clone array yang lama ke array baru
      updatedTodos[findTodoIndex] = updatedTodo; //update array todo sesuai index dengan data baru (updated todo)
      // console.log(updatedTodos);

      setTodos(updatedTodos);
      // setActivity("");
      // setEdit([]);

      return cancelEditHandler();
    }

    //setTodos([activity]) = menyimpan value dari activity yang sudah di input
    setTodos([
      ...todos,
      {
        id: generateID(),
        activity: activity,
        status: false,
      },
    ]); //append array dengan data yang lama
    setActivity(""); //untuk reset form value
    setMsg("");
  }

  function removeTodoHandler(todoID) {
    //filter semua id ke array baru yang mana isinya adalah data yang TIDAK sama dengan perbandingan ID
    const filteredTodos = todos.filter(function (todo) {
      return todo.id != todoID;
    });
    console.log(filteredTodos);

    //setTodos([...filteredTodos]); // ,,, = append array
    //atau menggunakan
    setTodos(filteredTodos);
    cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity); //menaruh value 'activity' kedalam form
    setEdit(todo);
    //   console.log(todo);
  }

  function cancelEditHandler() {
    setEdit([]);
    setActivity("");
  }

  function statusTodoHandler(todo) {
    //   console.log(todo);
    const updatedStatus = {
      ...todo,
      status: todo.status ? false : true,
    };

    const findTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[findTodoIndex] = updatedStatus;

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Simple To-Do List</h1>
      {msg ? <div style={{color: "red"}}>{msg}</div> : ""}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Apa kegiatanmu?"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button className="btn-form" type="submit">
          {edit.id ? "Simpan" : "Tambah"}
        </button>
        {edit.id ? (
          <button className="btn-form-cancel" onClick={cancelEditHandler}>
            Batal
          </button>
        ) : (
          ""
        )}
      </form>
      <table class="styled-table">
        <tr>
          <th>Status</th>
          <th>Activity</th>
          <th>Action</th>
          <th></th>
        </tr>
        {todos.map(function (todo) {
          return (
            <>
              <tr key={todo.id}>
                <td>
                  <span>{todo.status ? "Beres" : "Belum"}</span>
                </td>
                <td>{todo.activity}</td>
                <td>
                  <button className="btn-form-edit" onClick={editTodoHandler.bind(this, todo)}>
                    Sunting
                  </button>
                  <button
                    className="btn-form-delete"
                    onClick={removeTodoHandler.bind(this, todo.id)}
                  >
                    Hapus
                  </button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={statusTodoHandler.bind(this, todo)}
                  />
                </td>
              </tr>
              {/* <li key={todo.id}>
                {todo.status ? "Done" : "Undone"} --
                {todo.activity}
                <button className="btn-form" onClick={editTodoHandler.bind(this, todo)}>
                  Edit
                </button>
                <button className="btn-form" onClick={removeTodoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={statusTodoHandler.bind(this, todo)}
                />
              </li> */}
            </>
          );
        })}
      </table>
    </>
  );
}

export default Todo;
