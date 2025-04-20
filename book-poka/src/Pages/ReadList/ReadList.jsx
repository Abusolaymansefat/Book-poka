import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Root/Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("")

    const data = useLoaderData()
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData)
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
        // console.log(ConvertedStoredBooks)
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [])

    const handeSort = (type) => {
        setSort(type)

        if(type === "pages"){
            const sortedByPage= [...readList].sort((a,b) => a.totalPages- b.totalPages)
            setReadList(sortedByPage)
            console.log (sortedByPage)
        }
        if(type === "rating"){
            const sortedByRating = [...readList].sort((a,b) => a.rating- b.rating)
            setReadList(sortedByRating)
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sortt by : {sort? sort: ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handeSort("pages")}>pages</a></li>
                    <li><a onClick={() => handeSort("rating")}>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                <Tab>Read Book list</Tab>
                <Tab>My Wish List </Tab>
                </TabList>

                <TabPanel>
                <h2>Book i read {readList.length}</h2>
                {
                    readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                }
                </TabPanel>
                <TabPanel>
                <h2>My Wish list </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;