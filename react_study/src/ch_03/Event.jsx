import React from "react";

function Event() {
    function handleOnClick(e) {
        console.log(e);
        console.log(e.target.name);
        alert(e.target.name + "버튼 클릭!");
    }
    return (
        <div>
            <button name="A" onClick={handleOnClick}>클릭</button>
        </div>
    )
}

export default Event;