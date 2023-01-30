import React, { useEffect, useState } from 'react'
import { useParams,useOutletContext } from 'react-router-dom'

const Book = (props) => {
    const [selectedBook, setSelectedBook] = useState(null)
    const params = useParams();
    const context=useOutletContext()

    useEffect(() => {
        const fetchBook = context.booklist.filter((book) => book.id === parseInt(params.id));
        console.log(fetchBook[0])
        setSelectedBook(fetchBook[0]);

    }, [])
    return (
        <div>
            {
                <div>
                    <h1>Book Details</h1>
                    {/* <h3>Name :{props.selectedBook.name} </h3> 
            <h2>Book Id :{props.selectedBook.id}</h2>
            <h3>Author :{props.selectedBook.author}</h3> */}  <noscript>Doing computaion from the props</noscript>

                    <h3>Name :{selectedBook?.name} </h3>
                    <h2>Book Id :{selectedBook?.id}</h2>
                    <h3>Author :{selectedBook?.author}</h3>
                </div>

            }
        </div>
    )
}

export default Book