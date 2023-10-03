import React, { useState } from "react";
import ToDoList from "./toDoList";
import RandomID from "../tool/randomID";

export default function InputBox() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-[25px]">
        <p className="text-3xl mb-[20px]">
          <span className="text-[#0F4C75]">Simple</span>{" "}
          <span className="text-[#3282B8]">To</span>-
          <span className="text-[#1B262C]">Do App</span>
        </p>
        <div className="flex flex-col md:flex-row">
          <input
            className="w-[300px] md:w-[500px] h-[50px] border-4 border-slate-500 p-[10px]"
            placeholder="Enter your task here"
            value={item}
            onChange={function (e) {
              setItem(e.target.value);
            }}
          ></input>
          <button
            className="mt-[10px] ml-[0px] md:mt-[0px] md:ml-[10px] border border-gray-600 rounded-md p-[10px] hover:bg-[#0F4C75] bg-[#3282B8] text-white"
            onClick={function () {
              console.log("item->",item);
              if(item==="")
              {
                alert("You naughty naughty!"); 
              }
              else
              {
                setTodos([
                  ...todos,
                  { id: RandomID(), title: item, status: "INCOMPLETE" },
                ]);
              }
              setItem("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
      {todos.length > 0 ? (
        <div className="flex flex-col items-center">
          <ToDoList todoList={todos} setTodoList={setTodos}></ToDoList>
          <div className="flex items-center justify-center">
            <button className="bg-red-400 p-[10px] text-white rounded-md"
             onClick={function(){
              setTodos([]);
             }}
            >Reset All</button>
          </div>
        </div>
      ) : (
        <div className="md:w-[580px] flex border border-black m-[64px] items-center justify-center text-center">
          <div><p className="text-xl m-[20px]">You don't have any task to do!</p></div>
        </div>
      )}
    </div>
  );
}
