import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import { ContextApi } from './context'

const imgUrl = "https://via.placeholder.com/200/200";


const Movies = () => {

  const { movie } = useContext(ContextApi);

  return (
    <>
      <section className='container'>
        <div className='grid grid-4-col'>
          {movie.map((e, idx) => {
            const { imdbID, Title, Poster, Type } = e;
            return (
              <NavLink to={`movies/${imdbID}`} key={idx}>

                <div className='card'>
                  <div className='card-info'>
                    <img src={Poster === 'N/A' ? imgUrl : Poster} alt='#' />
                    <h2>{Title}</h2>
                    <h2>{Type}</h2>
                  </div>
                </div>
              </NavLink>

            )

          })}

        </div>

      </section>

    </>
  )
}

export default Movies