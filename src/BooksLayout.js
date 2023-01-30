import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const BooksLayout = (props) => {
  
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/books/1'> Book 1</Link> </li>
                <li><Link to='/books/2'> Book 2</Link> </li>
                <li><Link to='/books/new'>New Book </Link> </li>
               
            </ul>
        </nav>
        <Outlet context={{booklist:props.booklist}} />  {/** After executing the parent route ,if any child route matches the path then place that child route componenet here*/}
    </div>
  )
}

export default BooksLayout