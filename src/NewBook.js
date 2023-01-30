import React,{useState} from 'react'
import { useOutletContext,useNavigate } from 'react-router'

const NewBook = () => {
  const context=useOutletContext();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
const navigate=useNavigate();

  const handleChange=()=>{
    const book={
      id:context.booklist.length+1,
      name:name,
      author:author
    }
    // const updatedlist=[...context.booklist];
    // updatedlist.push(book);
    // console.log(updatedlist)
    // props.setSelectedBook(updatedlist);
    context.booklist.push(book);
    console.log(context.booklist)
    navigate('/books')



  }
  
  return (
    <div>NewBook

      <input type='text' placeholder='Enter Book Name' value={name} onChange={(event)=>{setName(event.target.value)}} />
      <input type='text' placeholder='Enter Author Name' value={author} onChange={(event)=>{setAuthor(event.target.value)}} />
      <button onClick={handleChange}>Add Book to List</button>
    </div>
  )
}

export default NewBook