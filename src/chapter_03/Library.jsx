import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" nameOfpage={300}></Book>
            <Book name="처음 만난 AWS" nameOfpage={300}></Book>
            <Book name="처음 만난 리액트" nameOfpage={300}></Book>
        </div>
    );
}

export default Library;