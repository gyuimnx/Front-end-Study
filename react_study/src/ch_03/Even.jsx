import React from "react";

function Even(props){
    console.log(props.number)
    return(
        // <div>
        //     {props.number % 2 === 0
        //     ? <h3>짝수입니다</h3>
        //     : <h3>홀수입니다</h3>}
        // </div>
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
}

export default Even;