import AddMovie from "./AddMovie";
import Delete from "../images/delete.png";
import Star from "../images/star.png";


function Movies({ movies, deleteMovie }) {

    return (
        <div>
            <h2>Filmer</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie.Title}{' '}
                        {Array.from({ length: parseInt(movie.Rating) }, (_, i) => (
                            <img key={i} src={Star.src} alt='star item' />
                        ))}
                        <img src={Delete.src} alt="ta bort knapp" onClick={() => deleteMovie(index)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;