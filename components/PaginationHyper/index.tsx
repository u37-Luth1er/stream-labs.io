'use client';

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import "./index.scss";

export default function PagHyper() {
  const router = useRouter(); // Para navegar programaticamente
  const searchParams = useSearchParams(); // Para obter os parâmetros da URL

  // Página atual, com valor padrão de 1 caso não exista na URL
  const currentPage = Number(searchParams.get('pagina')) || 1;
  const itemsPerPage = 10; // Definindo o número de itens por página

  const [totalPages, setTotalPages] = useState(0); // Número de páginas a ser calculado dinamicamente
  const [results, setResults] = useState<any[]>([]); // Resultados da busca ou da API

  // Função para simular a busca de resultados
  const fetchResults = async (page: number) => {
    // Simulei a obtenção de dados com uma API ou consulta, o totalItems seria retornado pela sua API
    const totalItems = 45; // Exemplo de número total de itens, substitua pela lógica da sua API
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    setTotalPages(totalPages);
    
    // Simulação de resultados, no caso, a página de resultados
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const fetchedResults = Array.from({ length: totalItems }).slice(start, end);
    
    setResults(fetchedResults);
  };

  // Função para navegar para outra página
  const handlePagination = (page: number) => {
    // Evita navegar para uma página menor que 1 ou maior que o número total de páginas
    if (page < 1 || page > totalPages) return;

    // Atualiza a URL com o número da nova página
    router.push(`?pagina=${page}`);
    fetchResults(page); // Recarrega os resultados da nova página
  };

  // Lógica para determinar a faixa de páginas visíveis
  const getPageRange = () => {
    const pagesToShow = 5;
    const startBlock = Math.floor((currentPage - 1) / pagesToShow); // Determina o bloco atual (0, 1, 2, ...)
    const startPage = startBlock * pagesToShow + 1; // Página de início do bloco
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages); // Página de fim do bloco
    
    // Ajusta a faixa se o início for muito próximo do início ou fim
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  // Efeito para carregar os resultados assim que a página for renderizada
  useEffect(() => {
    fetchResults(currentPage);
  }, [currentPage]);

  const pageRange = getPageRange();

  return (
    <div>
      {results.length === 0 ? (
        <p className="text-center">Nenhum resultado encontrado.</p>
      ) : (
        <ol className="flex justify-center gap-1 text-xs font-medium">
          {/* Botão "Página Anterior" */}
          <li>
            <a
              href="#"
              onClick={(e) => { 
                e.preventDefault(); 
                handlePagination(currentPage - 1); 
              }}
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white pagination-option"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          {/* Botões de Páginas */}
          {pageRange.map((page) => {
            const isActive = currentPage === page; // Verifica se a página é a ativa
            return (
              <li key={page}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePagination(page); // Navega para a página clicada
                  }}
                  className={`block size-8 rounded border ${isActive ? 'border-blue-600 bg-blue-600 text-center leading-8 dark:text-white' : 'border-gray-100 bg-white text-gray-900 text-center leading-8 dark:border-gray-800 dark:bg-gray-900 dark:text-white'} pagination-option`}
                >
                  {page}
                </a>
              </li>
            );
          })}

          {/* Botão "Próxima Página" */}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePagination(currentPage + 1); // Vai para a próxima página
              }}
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white pagination-option"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      )}
    </div>
  );
}
