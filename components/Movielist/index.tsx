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

    const getMovies =  () => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/consultar/filmes',
            params: {
                pagina: 1}
        }).then(response => {
            setMovies(response.data);
            console.log(response.data);
        });
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