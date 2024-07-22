import React from "react";
import "./App.css";
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <TodoEditor></TodoEditor>
            <TodoList></TodoList>
        </div>
    );
};

export default App;