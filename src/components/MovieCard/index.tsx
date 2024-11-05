import { Movie } from "@/types/movies";
import StarRating from "../StarRating";
import './index.scss';

export interface Props {
    movie: Movie;
}

export default function MovieCard(props: Props) {
    const { movie } = props;

    return (
        <li key={movie.id} className='movie-card'>
            <div className="movie-poster">
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.title} 
                    className="poster-image"
                />
            </div>

            <div className="movie-infos">
                <p className="movie-title">{movie.title}</p>

                {movie.vote_average > 0 && (
                    <StarRating rating={movie.vote_average} />
                )}

                <div className="hidden-content">
                    {movie.overview && (
                        <p className="description">
                            {movie.overview.length > 100 
                                ? `${movie.overview.substring(0, 100)}...` 
                                : movie.overview
                            }
                        </p>
                    )}
                    <button 
                        className="btn-default" 
                        onClick={() => window.location.href = `http://localhost:3000/pages/films/${movie.id}`}
                    >
                        Ver mais
                    </button>
                </div>
            </div>
        </li>
    );
}
