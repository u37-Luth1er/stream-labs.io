import MovieList from "@/components/Movielist";
import LoggedNav from "@/components/LoggedNavBar";
import PagHyper from "@/components/PaginationHyper";

export default function DashboardPage() {
  return (
    <div>
      <LoggedNav />
      <MovieList />
      <PagHyper />
    </div>
  );
}
