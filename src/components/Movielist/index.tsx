'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movies';


export default function MovieList() {
    
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {   
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '8d428052fe5236aa8d0e888175409ed4',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
            console.log(response.data.results);
        })
    }
    
    return(
        <ul className='movie-list'>
            {movies.map((movie) => 
                
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
            
        </ul>
    );
}