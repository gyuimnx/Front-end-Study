import React, {useState, useRef} from "react";

function InputText() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        if (text.length < 5) {
            textRef.current.focus();
        }else{
            setText("");
        }
    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}

export default InputText;