

import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context'

const DetailsCard = () => {
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState("")

    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data);
            }
        } catch (error) {
            console.log(error)
        }

    }

    //get api details i (information)
    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`)

        }, 2000);
        return () => clearTimeout(timeOut)


    }, [id])

    if (isLoading) {
        return (
            <div className='loading_sec'>
                <div className='loading'>Loading...</div>
            </div>
        )
    }

    return (
        <>
            <section className='details_section'>
                <div className='left'>
                    <img src={movie.Poster} alt='poster' />
                </div>
                <div className='right'>
                    <h2> {movie.Title}</h2><br />
                    <h2><span>Actors:</span>  {movie.Actors}</h2><br />
                    <h2>Director: {movie.Director}</h2><br />
                    <h2>Language: {movie.Language}</h2><br />
                    <h2>Year :{movie.Year}</h2><br />
                    <h2>imdbRating: {movie.imdbRating}</h2><br />
                    <h2>Country: {movie.Country}</h2>
                </div>
                <div className='button'>
                    <NavLink to='/' className='btn'>Go Back</NavLink>
                </div>
            </section>
        </>

    )
}

export default DetailsCard;