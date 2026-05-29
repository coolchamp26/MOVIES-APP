import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites() {
    const {favourites} = useMovieContext()

    if(favourites.length > 0) {
        return (
        <div className="favourites">
            <h3>Your Favourites</h3>
            <div className="movies-grid">
                {favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
        )
    }

    return <div className="favourites-empty">
        <h2>No Movies Yet!</h2>
        <p>Start adding movies to view them in favourites!</p>
    </div>
}

export default Favourites