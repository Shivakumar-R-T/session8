import React from 'react'
import { Link,useOutletContext } from 'react-router-dom'

const BookList = (props) => {
    const context=useOutletContext()
    return (
        <div>
            {
                context.booklist.map((book) => {
                    return <div key={book.id}>
                        <h2>Name:{book.name} </h2>
                        <h4>Author :{book.author} </h4>
                        {/* <button onClick={()=>{
                            props.setSelectedBook(book)
                         }}><Link to={`/books/${book.id}`} >Show more Details</Link> </button> */}

                        <button ><Link to={`/books/${book.id}`} >Show more Details</Link> </button>
                    </div>
                })
            }
        </div>
    )
}

export default BookList