import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

// bootstrap list 
export default function BookList({ children }) {
    return (
        <ul className="list-group">{children}</ul>
    );
}

