import React from "react";
import "./TodoEditor.css";

function TodoEditor() {
    return (
        <div className="TodoEditor">
                <h3>새로운 Todo 작성하기</h3>
                <div className="editor_wrapper">
                    <input placeholder="새로운 Todo..." />
                    <button>추가</button>
                </div>
        </div>
    );
};

export default TodoEditor;