// This one covers the addbility to add in. 
// React was installed already
import React from "react";
//  npm install axios and then use this to import it. 
import axios from "axios";
// do npm install bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// npm install --save react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// start the button to add it in
class AddBookBtn extends React.Component {
    postToDB = (book) => {
        console.log(book)
        var dbBook = {
            // based off the DB example in read me
            title: book.title,
            authors: book.authors,
            description: book.description,
            thumbnail: book.thumbnail,
            link: book.link
        }
        // check API. Having issues with this hook. 
        axios.post("/api/books", dbBook)
            .then(() => toast.success(`You added ${book.title}`))
            .catch(err => console.log(err))
    }
    // start the bring back
    render() {
        return (
            <div className="saveBtn">
                <button onClick={() => { this.postToDB(this.props) }
                } className="btn btn-lg">
                    Save Book
                </button>
            </div>
        );
    }
}

export default AddBookBtn;