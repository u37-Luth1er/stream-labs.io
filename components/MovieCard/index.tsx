import { Movie } from "../../types/movies"
import StarRating from "../StarRating";
import './index.scss'

export interface Props{
    movie: Movie
}


export default function MovieCard(props: Props){
    const movie = props.movie;

    return(
        <li key={movie.id} className='movie-card'>
            <div className="movie-poster">
                <img 
                    src={movie.image} 
                    alt={movie.title}/>
            </div>

            <div className="movie-infos">
                <p className="movie-title">
                    {movie.title}
                </p>

                {movie.avarage_rating > 0 &&
                    <StarRating
                    rating={movie.avarage_rating}
                />
                }

                <div className="hidden-content">
                    {movie.sinopse &&
                    <p className="description">
                        {movie.sinopse.length > 100 
                        ? `${movie.sinopse.substring(0, 100)}...`
                        : movie.sinopse
                        }
                    </p>
                    }
                    <button className="btn-default" onClick={() => window.location.href = `${movie.stream_url}`}>
                        Ver mais
                    </button>
                </div>
            </div>
        </li>
    )
}
