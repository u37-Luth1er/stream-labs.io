'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movies';
import { useRouter, useSearchParams } from 'next/navigation';  // Importa os hooks necessários

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const router = useRouter();  // Hook para navegar entre páginas
    const searchParams = useSearchParams();  // Hook para acessar os parâmetros da URL
    
    // Pega o número da página atual a partir da URL, se não existir, usa o valor 1
    const currentPage = Number(searchParams.get('pagina')) || 1;

    useEffect(() => {
        getMovies(currentPage);  // Chama a função getMovies passando a página atual
    }, [currentPage]);  // Dependência do currentPage para refazer a requisição ao mudar

    const getMovies = (page: number) => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/consultar/filmes/busca',
            params: {
                genero: 'comédi',
                pagina: page,
                limite: 40,
                rating: true
            }
        }).then(response => {
            setMovies(response.data);
            console.log(response.data);
        });
    };

    const handlePagination = (page: number) => {
        // Altera a URL com o novo número da página
        router.push(`?genero=terror&pagina=${page}&limite=40&rating=true`);
    };

    return (
        <>
            <ul className='movie-list'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>

            {/* Paginação */}
            <div className="pagination">
                <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage <= 1}>
                </button>
                <button onClick={() => handlePagination(currentPage + 1)}>
                </button>
            </div>
        </>
    );
}
