import React, {useState, useRef} from "react";
import "./TodoEditor.css";

function TodoEditor({onCreate}) {
    const [content, setContent] = useState("");
    const textRef = useRef();

    function onChangeContent(e) {
        setContent(e.target.value);
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter'){
            onSubmit();
        }
    };
    
    function onSubmit() {
        if (content.length <= 0) {
            textRef.current.focus();
        } else {
            onCreate(content);
            setContent("");
        }
    };

    return (
        <div className="TodoEditor">
                <h3>새로운 Todo 작성하기</h3>
                <div className="editor_wrapper">
                    <input ref={textRef} value={content} onChange={onChangeContent} onKeyDown={handleKeyDown} placeholder="새로운 Todo..." />
                    <button onClick={onSubmit}>추가</button>
                </div>
        </div>
    );
};

export default TodoEditor;