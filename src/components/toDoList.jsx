import React from "react";

export default function ToDoList(props) {
  return (
    <div className="border border-black m-[64px] w-[380px] md:w-[600px]">
      <ul className="space-y-3 text-xl p-[25px] flex flex-col justify-center">
        {props.todoList.map((todo) => (
          <div key={todo.id} className="flex justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                onChange={function (e) {
                  props.setTodoList(
                    props.todoList.map((el) => {
                      if (el.id === todo.id) {
                        return {
                          ...el,
                          status: e.target.checked ? "COMPLETED" : "INCOMPLETE",
                        };
                      }
                      return el;
                    })
                  );
                }}
                className="w-[30px] h-[15px]"
              ></input>
              <li className={todo.status === "COMPLETED" ? "line-through break-words flex-wrap" : "break-words flex-wrap"}>
                {todo.title}
              </li>
            </div>
            <button 
            className="border bg-[#da3e4e] p-[7px] text-white text-sm rounded-lg"
            onClick={function(){
              props.setTodoList(props.todoList.filter((el) => el.id != todo.id));
            }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
