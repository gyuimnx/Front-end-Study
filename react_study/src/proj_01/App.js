import {useState, useEffect} from "react";
import Viewer from "./Viewer";
import Controller from "./Controller";
import './App.css';
import Even from "./Even";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    function handleSetCount(value) {
        setCount(count + value);
    };
    function handleSetText(e) {
        setText(e.target.value);
    };

    //count,text 변경되면 console창에 둘 다 표시
    // useEffect(()=> {
    //     console.log("count 업데이트", count, text);
    // }, [count, text]);

    // 의존성 배열에 빈 배열을 넣으면 state를 초기화할 때만 콜백함수 실행
    // useEffect(()=> {
    //     console.log("count 업데이트");
    // }, []);

    // 의존성 배열을 넣지 않으면, state가 업데이트될 때마다 콜백함수 실행
    // useEffect(()=> {
    //     console.log("count 업데이트");
    // });
    
    //컴포넌트가 제거될 때 특정 코드 실행
    useEffect(()=> {
        console.log("count 업데이트");
        return () => {
            console.log("count 제거")
        }
    }, [count]);

    return (
        <div className="App">
            <h1>Counter App</h1>
            <div>
                <input value={text} onChange={handleSetText}/>
                <p>{text}</p>
            </div>
            <div>
                <Viewer count={count}></Viewer>
                {count % 2 === 0 && <Even/>}
            </div>
            <div>
                <Controller handleSetCount={handleSetCount}></Controller>
            </div>
        </div>
    );
};

export default App;