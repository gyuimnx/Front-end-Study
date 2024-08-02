import React, {useState,useRef,useEffect} from "react";
import "./App.css";
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

// const mockTodo = [
//     {
//         id: 0,
//         isDone: false,
//         content: "리액트 공부",
//         createDate: new Date().getTime(),
//     },
//     {
//         id: 1,
//         isDone: false,
//         content: "팀 구성",
//         createDate: new Date().getTime(),
//     },
//     {
//         id: 2,
//         isDone: false,
//         content: "프로젝트 계획서 작성",
//         createDate: new Date().getTime(),
//     },
// ]

function Home() {
    useEffect(()=>{
        const rawData = localStorage.getItem('todo');
        if (!rawData) {
            return;
        }
        const localData = JSON.parse(rawData);
        if (localData.length === 0) {
            return;
        }
        localData.sort((a,b) => Number(b.id)-Number(a.id));
        idRef.current = localData[0].id + 1;
        setTodo(localData);
    },[])
    
    const [todo, setTodo] = useState([]);
    const idRef = useRef(0);

    function onCreate(content) {
        const newItem = {
            id: idRef.current,
            isDone: false,
            content,
            createDate: new Date().getTime(),
        };
        const newTodo = [newItem, ...todo]
        setTodo(newTodo);
        localStorage.setItem('todo', JSON.stringify(newTodo))
        idRef.current += 1;
    };

    function onUpdate(targetId) {
        const newTodo = todo.map((item) =>
            item.id === targetId ? {...item, isDone: !item.isDone} : item
        )
        setTodo(newTodo)
        localStorage.setItem('todo', JSON.stringify(newTodo))
    };

    function onDelete(targetId) {
        const newTodo = todo.filter((item)=>item.id !== targetId)
        setTodo(newTodo)
        localStorage.setItem('todo', JSON.stringify(newTodo))
    };
    
    return (
        <div className="App">
            <Header></Header>
            <TodoEditor onCreate={onCreate}></TodoEditor>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
        </div>
    );
};

export default Home;