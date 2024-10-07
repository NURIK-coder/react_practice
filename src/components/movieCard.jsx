import '../App.css';
import {Link} from 'react-router-dom';
function MovieCard({movie}){
    
    return(
        <div className="movie_card" onClick={() => {<Link to={`/movies/${movie.id}`}></Link>}}>
            <img className='posters' src={movie.posterUrl} alt="" />
            <h1>{movie.nameOriginal?movie.nameOriginal: movie.nameRu}</h1>
            <h2>Country:{movie.countries.map((e) => (<p>{e.country}</p>))}</h2>
        </div>
    )
}
export default MovieCard;