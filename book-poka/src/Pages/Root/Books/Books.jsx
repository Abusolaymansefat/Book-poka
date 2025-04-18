import React, { useEffect, useState } from 'react';


const Books = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("bookData.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h2>ami Books</h2>
        </div>
    );
};

export default Books;