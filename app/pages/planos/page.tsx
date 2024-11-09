'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movies';


export default function MovieList() {
    
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {   
        getMovies();
    }, []);

    const getMovies =  () => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/consultar/filmes'
        }).then(response => {
            setMovies(response.data);
            console.log(response.data);
        });
    }

    
    return(
        <div>
            hello world
        </div>
    );
}