import MovieList from "@/components/Movielist";
import LoggedNav from "@/components/LoggedNavBar";

export default function DashboardPage() {
  return (
    <div>
      <LoggedNav />
      <MovieList />
    </div>
  );
}
