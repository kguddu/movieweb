import React,{useContext} from 'react'
import { ContextApi } from './context'

const Search = () => {
  
  const {query,setQuery,isError}=useContext(ContextApi);

  

  return (
    <>
    <section className='nav'>
     <h1>Cineflix</h1>
     <form  action="#" onSubmit={(event)=>event.preventDefault()}>
      <div>
        <input type='text' placeholder="search here"
         value={query} 
         onChange={(e) => setQuery(e.target.value)}/>
      </div>

     </form>

    </section>
     <div className='error'>
     <p>{isError.show && isError.msg}</p>

   </div>
   </>
  )
}

export default Search