'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movies';
//import { Pagination, Button } from "@nextui-org/react";
import {Pagination, Button, PaginationItem, PaginationCursor} from "@nextui-org/react";

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = 10; // Ajuste conforme o total de páginas disponíveis na API

    useEffect(() => {   
        getMovies(currentPage);
    }, [currentPage]);

    const getMovies = (page: number) => {
        setIsLoading(true);
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/discover/movie`,
            params: {
                api_key: '8d428052fe5236aa8d0e888175409ed4',
                language: 'pt-BR',
                page: page
            }
        })
        .then(response => {
            setMovies(response.data.results);
            setIsLoading(false);
        })
        .catch(error => {
            console.error("Erro ao buscar filmes:", error);
            setIsLoading(false);
        });
    };

    return (
        <div>
            <ul className='movie-list'>
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    movies.map((movie) => 
                        <MovieCard key={movie.id} movie={movie} />
                    )
                )}
            </ul>

            <div className="pagination-container flex flex-col gap-5">
                <p className="text-small text-default-500">Página Selecionada: {currentPage}</p>
                <Pagination
                    total={totalPages}
                    color="secondary"
                    page={currentPage}
                    onChange={setCurrentPage}
                    size="sm"
                />
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    >
                        Anterior
                    </Button>
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                    >
                        Próximo
                    </Button>
                </div>
            </div>
        </div>
    );
}
