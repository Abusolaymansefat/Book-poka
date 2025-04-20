import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStarHalfAlt } from "react-icons/fa";
import { addtoStoreDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const {id} = useParams()
    const bookId = parseInt(id)
    // console.log(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook)
    // console.log(typeof id, data)
    const {bookName, image, rating, category, tags, yearOfPublishing, review} = singleBook || {}

    const handleMarAsRead = id => {


        // MySwal.fire({
        //     title: <p>Hello World</p>,
        //     didOpen: () => {
        //       // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //       MySwal.showLoading()
        //     },
        //   }).then(() => {
        //     return MySwal.fire(<p>Shorthand works too</p>)
        //   })
        // Swal.fire({
        //     title: "Drag me!",
        //     icon: "success",
        //     draggable: true
        //   });
        toast("Wow so easy!")


        addtoStoreDB(id)

    }

    return (
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img 
                    src={image}
                    alt={bookName}
                    className="w-48 rounded-lg shadow-2xl"
                />
                <div className="space-y-4">
                    <div className='flex flex-wrap gap-2'>
                        {tags.map((tag, index) => (
                            <button key={index} className="btn btn-sm btn-outline">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <ToastContainer />
                    <h2 className="text-2xl font-bold">
                        {bookName}
                        <span className="ml-4 badge badge-secondary">{yearOfPublishing}</span>
                    </h2>

                    <p className="text-gray-700">Book by: <span className="font-semibold">{review}</span></p>

                    <hr className="border-t border-dashed border-gray-300 my-2" />

                    <div className="card-actions flex gap-4">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline flex items-center gap-1">
                            {rating} <FaStarHalfAlt />
                        </div>
                        
                    </div>
                    <div className=''>
                        <button onClick={() => handleMarAsRead(id)} className='btn btn-info  m-3'>Mar as Read</button>
                        <button className='btn btn-secondary  m-3'>Mar as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;