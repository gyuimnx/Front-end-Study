import React, {useState} from "react";

function InputText() {
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input onChange={handleOnChange} />
            <div>{text}</div>
        </div>
    );
}

export default InputText;