import { FaStar } from  "react-icons/fa6"
import { FaRegStar } from  "react-icons/fa6"
import './index.scss'

export interface Props{
    rating: number
} 

export default function StarRating(props: Props){
    const numStars = Math.round(props.rating / 2);
    const fullStarts = [];
    const emptyStarts = [];
    
    for (let i = 0; i < 5; i++){
        if(i < numStars){
            fullStarts.push(i)
        } else{
            emptyStarts.push(i)
        }
    }

    return (
        <div className="movie-rate">
            {fullStarts.map(index =>
                <FaStar key={index} />
            )}
            {emptyStarts.map(index =>
                <FaRegStar key={index} />
            )}
        </div>
    )
}