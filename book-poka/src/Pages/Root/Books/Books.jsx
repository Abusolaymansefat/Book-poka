import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { data } from 'react-router';


const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("bookData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // }, [])

    // const bookPromise = fetch('./bookData.json').then(res => res.json())

    return (
        <div>
            <h2 className='text-3xl text-center p-6'>ami Books</h2>
            <Suspense fallback= {<span>Loading.....</span>}>
            {/* <Book data= {data}></Book> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                data.map((singleBook) => <Book
                 key={singleBook.bookId}
                  singleBook= {singleBook}>
                    
                  </Book>)
            }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;