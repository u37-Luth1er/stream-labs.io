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

  // Pega o número da página atual a partir da URL, ou usa 1 por padrão
  const currentPage = Number(searchParams.get('pagina')) || 1;
  const gener = searchParams.get('genero') || 'crime';

  useEffect(() => {
    if (!isLoading) {
      getMovies(currentPage, gener); // Inclui o gênero na chamada da função
    }
  }, [currentPage, gener, isLoading]); // Adiciona `gener` como dependência

  const getMovies = (page: number, gener: string) => {
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
        genero: gener, // Passa o gênero explicitamente como objeto
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
    router.push(`?pagina=${page}`); // Inclui o gênero na navegação
  };

  if (isLoading) {
    // Enquanto valida o token, retorna um carregamento ou tela em branco
    return <div className="loading"></div>;
  }

  return (
    <>
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
