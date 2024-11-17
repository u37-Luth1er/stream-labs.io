'use client';

import { useRouter, useSearchParams } from "next/navigation"; // Importando o hook correto para navegação no cliente
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "@/components/ui/pagination"; // Importando os componentes de paginação

export default function PaginationClient() {
  const router = useRouter();  // Navegação usando useRouter do 'next/navigation'
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('pagina')) || 1;

  const handlePagination = (page: number) => {
    router.push(`?genero=terror&pagina=${page}&limite=40&rating=true`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="pagination-item">
          <PaginationPrevious
            href="#"
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage <= 1}
          />
        </PaginationItem>
        <PaginationItem className="pagination-item">
          <PaginationLink
            href="#"
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            {currentPage - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination-item">
          <PaginationLink href="#" onClick={() => handlePagination(currentPage)}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination-item">
          <PaginationLink
            href="#"
            onClick={() => handlePagination(currentPage + 1)}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination-item">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="pagination-item">
          <PaginationNext
            href="#"
            onClick={() => handlePagination(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
