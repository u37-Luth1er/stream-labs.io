'use client';

import { Suspense } from 'react';
import MovieList from "@/components/Movielist";
import LoggedNav from "@/components/LoggedNavBar";
import PagHyper from "@/components/PaginationHyper";

export default function DashboardPage() {
  return (
    <div>
      <LoggedNav />
      {/* Encapsula MovieList em Suspense se usar hooks do cliente */}
      <Suspense fallback={<div>Loading movies...</div>}>
        <MovieList />
      </Suspense>
      {/* Encapsula PagHyper em Suspense se usar hooks do cliente */}
      <Suspense fallback={<div>Loading pagination...</div>}>
        <PagHyper />
      </Suspense>
    </div>
  );
}
