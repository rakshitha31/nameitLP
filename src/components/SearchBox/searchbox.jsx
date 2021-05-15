import React from 'react';
import './searchbox.css';

/*
*Here the function onInputChange is passed as a prop and event.target.value is passed as a parameter to the function. 
This is one way of passing data from child to parent component
*/

const SearchBox =({onInputChange})=>{
    return(
        <div className="search-container">
            <input onChange={(event) => onInputChange(event.target.value)}
            placeholder="Type keywords" className="search-input"></input>

        </div>
    )
}
export default SearchBox;