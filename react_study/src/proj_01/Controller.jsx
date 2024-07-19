import React from "react";

// function Controller(handleSetCount) {
function Controller(props) {
    return (
        <div>
            <button onClick={()=>props.handleSetCount(-1)}>-1</button>
            <button onClick={()=>props.handleSetCount(-10)}>-10</button>
            <button onClick={()=>props.handleSetCount(-100)}>-100</button>
            <button onClick={()=>props.handleSetCount(+100)}>+100</button>
            <button onClick={()=>props.handleSetCount(+10)}>+10</button>
            <button onClick={()=>props.handleSetCount(+1)}>+1</button>
        </div>
        // <div>
        //     <button onClick={()=>handleSetCount(-1)}>-1</button>
        //     <button onClick={()=>handleSetCount(-10)}>-10</button>
        //     <button onClick={()=>handleSetCount(-100)}>-100</button>
        //     <button onClick={()=>handleSetCount(+100)}>+100</button>
        //     <button onClick={()=>handleSetCount(+10)}>+10</button>
        //     <button onClick={()=>handleSetCount(+1)}>+1</button>
        // </div>
    );
};

export default Controller;
