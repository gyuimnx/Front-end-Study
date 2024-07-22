import React from "react";
import "./TodoItem.css";

function TodoItem() {
    return (
        <div className="TodoItem">
            <input className="checkbox_col" type="checkbox" />
            <div className="title_col">할 일</div>
            <div className="date_col">{new Date().toLocaleDateString()}</div>
            <button className="btn_co1">삭제</button>
        </div>
    );
};

export default TodoItem;