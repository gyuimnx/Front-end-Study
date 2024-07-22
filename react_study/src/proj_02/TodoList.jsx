import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
    return (
        <div className="TodoList">
            <h3>Todo List</h3>
            <input className="searchbar" placeholder="검색어를 입력하세요." />
            <div>
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
            </div>
        </div>
    );
};

export default TodoList;