import React, { useState } from 'react';
// import './App.css';
import { Routes, Route, Link, useRoutes } from 'react-router-dom'; //v6
import Home from './Home';
import BookList from './BookList';
import Book from './Book';
import NewBook from './NewBook';
import NotFound from './NotFound';
import BooksLayout from './BooksLayout';

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

function Routing() {
  // const [selectedBook,setSelectedBook]=useState(null)

  // const element = useRoutes(
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/books',
  //     element: <BooksLayout booklist={booklist} />,
  //     children: [
  //       {
  //         index: true,
  //         element: <BookList />
  //       },
  //       {
  //         path: ':id',
  //         element: <Book />
  //       },
  //       {
  //         path: 'new',
  //         element: <NewBook />
  //       }

  //     ]
  //   }
  // )
  return (
    <div className="App">

      {/* {element} */}
     

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route  path='/books' element={<BookList booklist={booklist}  setSelectedBook={setSelectedBook}/>} />
        <Route  path='/books/:id' element={<Book selectedBook={selectedBook}/>} />  */}  {/*we have to pass set function here */}

          {/*} <Route  path='/books' element={<BookList booklist={booklist} />} /> */}  {/*here we don't need to pass setter function ,but making child to compute itself what it require by 'useParams' */}
          {/* <Route  path='/books/:id' element={<Book booklist={booklist}/>} />
        <Route path='/books/new' element={<NewBook />} /> */}

          <Route path='/books' element={<BooksLayout booklist={booklist} />} >     {/**Router Nesting  and Shared Layout */}
            <Route index element={<BookList />} />
            <Route path=':id' element={<Book />} />
            <Route path='new' element={<NewBook  />} />
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


export default Routing;
