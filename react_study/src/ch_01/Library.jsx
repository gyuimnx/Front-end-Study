import React from "react";
import Book from "./Book";

function Library(){
    return(
        <div>
            <Book name="JavaScript 끝내기" price={30000}></Book>
            <Book name="React 시작하기" price={50000}></Book>
        </div>
    );
}

export default Library;