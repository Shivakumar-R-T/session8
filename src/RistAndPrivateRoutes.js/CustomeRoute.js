import React, { useState } from 'react';

import { Routes, Route, Link, useRoutes } from 'react-router-dom'; //v6
import Home from '../Home';
import BookList from '../BookList';
import Book from '../Book';
import NewBook from '../NewBook';
import NotFound from '../NotFound';
import BooksLayout from '../BooksLayout';
import RistrictedRoute from './RistrictedRoute';
import Login from './Login';
import ForgotPssword from './ForgotPssword';
import PrivateRoute from './PrivateRoute';

const booklist = [
    {
        id: 1,
        name: "O Parakeet, tell me !",
        author: "Kuvempu",
    },
    {
        id: 2,
        name: "Arms And The Man",
        author: "George Bernard Shaw",
    },
    {
        id: 3,
        name: "Merchant of Venice",
        author: "William Shakespeare",
    },
];

function CustomeRoute() {
    const isUserAthenticated=true;

    return (
        <div className="App">
    
    


            <Routes>
                <Route path='/' element={<RistrictedRoute isUserAthenticated={isUserAthenticated}/>}>
                    <Route  path='login' element={<Login />}/>
                    <Route  path='forgot-password' element={<ForgotPssword />}/>


                </Route>
                <Route path='/'  element={<PrivateRoute isUserAthenticated={isUserAthenticated}/>}>

                    <Route index element={<Home />} />


                    <Route path='/books' element={<BooksLayout booklist={booklist} />} >     {/**Router Nesting  and Shared Layout */}
                        <Route index element={<BookList />} />
                        <Route path=':id' element={<Book />} />
                        <Route path='new' element={<NewBook />} />
                    </Route>
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>


            <nav>
                <ul >
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/books' >BookList</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default CustomeRoute;
