'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movies';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
  const router = useRouter();
  const searchParams = useSearchParams();

  const genero = searchParams.get('genero') || 'aventura'; // Pega o gênero da query string, com 'crime' como valor padrão
  
  const currentPage = Number(searchParams.get('pagina')) || 1;

  // Função para verificar se o token é válido
  const checkAuthToken = async () => {
    const token = Cookies.get("authToken");

    if (!token) {
      console.error("Token não encontrado. Redirecionando para login...");
      router.push("/pages/login");
      return;
    }

    try {
      const response = await axios.get('http://localhost:8080/profile/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        console.warn("Token inválido. Redirecionando para login...");
        router.push("/pages/login");
      } else {
        setIsLoading(false); // Token válido, libera o carregamento da página
      }
    } catch (error) {
      console.error("Erro na validação do token:", error);
      router.push("/pages/login");
    }
  };

  useEffect(() => {
    checkAuthToken();
  }, [router]);

  useEffect(() => {
    if (!isLoading) {
      getMovies(currentPage, genero);
    }
  }, [currentPage, isLoading, genero]); // Atualiza os filmes ao mudar o gênero ou a página

  const getMovies = (page: number, genre: string) => {
    const token = Cookies.get('authToken');

    if (!token) {
      console.error("Token ausente. Não é possível buscar filmes.");
      return;
    }

    axios({
      method: 'get',
      url: 'http://localhost:8080/consultar/filmes/busca',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        genero: genre,  // Passa o gênero para a requisição
        pagina: page,
        limite: 40,
        rating: true,
      },
    })
      .then(response => {
        setMovies(response.data);
        console.log('Filmes carregados:', response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
  };

  const handlePagination = (page: number) => {
    if (page < 1) return; // Evita páginas negativas
    router.push(`?genero=${genero}&pagina=${page}&limite=40&rating=true`);
  };

  if (isLoading) {
    // Enquanto valida o token, retorna um carregamento ou tela em branco
    return <div className="loading">Validando sessão...</div>;
  }

  return (
    <>
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      {/* Paginação */}
      <div className="pagination">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Anterior
        </button>
        <button onClick={() => handlePagination(currentPage + 1)}>
          Próximo
        </button>
      </div>
    </>
  );
}
