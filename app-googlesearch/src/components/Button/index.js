// Creating the ability to search and remove - seperating these buttons out as they are more limited (and less likely to break.)
import React from "react";
// regular buttons from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export function SearchBtn(props) {
    return (
        <button onClick={props.searchBooks} type="submit" id="submit-search" className="btn btn-primary col-2">Search for Books</button>
    )
}

export function RemoveBookBtn(props) {
    return (
        <button onClick={props.searchBooks} type="danger" id="submit-search" tabIndex="0" className="btn delete-btn" {...props}>Delete</button>

    );
}
