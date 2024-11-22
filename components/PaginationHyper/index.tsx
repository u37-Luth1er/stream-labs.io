'use client';

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import "./index.scss";

export default function PagHyper() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('pagina')) || 1;
  const itemsPerPage = 10;

  const [totalPages, setTotalPages] = useState(0);
  const [results, setResults] = useState<any[]>([]);

  // Função para buscar resultados simulados
  const fetchResults = async (page: number) => {
    const totalItems = 45; // Total de itens simulados
    const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);

    setTotalPages(calculatedTotalPages);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const fetchedResults = Array.from({ length: totalItems }).slice(start, end);

    setResults(fetchedResults);
  };

  // Função para tratar a paginação
  const handlePagination = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(`?pagina=${page}`);
  };

  const getPageRange = () => {
    const pagesToShow = 5;
    const halfRange = Math.floor(pagesToShow / 2);

    // Calcula o bloco de páginas a ser exibido com base na página atual
    const blockStartPage = Math.max(currentPage - halfRange, 1);
    const blockEndPage = Math.min(blockStartPage + pagesToShow - 1, totalPages);

    // Garante que o número de páginas exibidas nunca ultrapasse o total de páginas
    return Array.from(
      { length: blockEndPage - blockStartPage + 1 },
      (_, i) => blockStartPage + i
    );
  };

  // Atualiza os resultados quando a página muda
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
              className={`inline-flex size-8 items-center justify-center rounded border ${
                currentPage === 1
                  ? "border-gray-200 bg-gray-200 text-gray-500 pointer-events-none"
                  : "pagination-option"
              }`}
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
          {pageRange.map((page) => (
            <li key={page}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePagination(page);
                }}
                className={`block size-8 rounded border ${
                  currentPage === page
                    ? "border-blue-600 bg-blue-600 text-center leading-8 text-white"
                    : "pagination-option"
                }`}
              >
                {page}
              </a>
            </li>
          ))}

          {/* Botão "Próxima Página" */}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePagination(currentPage + 1);
              }}
              className={`inline-flex size-8 items-center justify-center rounded border ${
                currentPage === totalPages
                  ? "border-gray-200 bg-gray-200 text-gray-500 pointer-events-none"
                  : "pagination-option"
              }`}
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
