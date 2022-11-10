
import Movies from './Movies'
import Search from './Search'




const Home = () => {
  return (
    <>
      <Search />
      <div className='container'>
        <Movies />
      </div>
    </>
  )
}

export default Home