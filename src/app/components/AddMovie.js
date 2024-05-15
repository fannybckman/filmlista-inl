import { useState } from "react";
import InputForm from "./Input";
import Button from "./Button"


const AddMovie = (props) => {
    const [newMovie, setNewMovie] = useState("");
    const [movieRating, setMovieRating] = useState("");
  
    const handleTitleChange = (event) => {
        setNewMovie(event.target.value);
    };

    const handleRatingChange = (event) => {
        setMovieRating(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (newMovie.trim() !== "" && movieRating !== "") { 
          props.addMovie({ Title: newMovie, Rating: movieRating }); 
          setNewMovie("");
          setMovieRating("");
        } else ( 
            alert("Skriv in både titel och betyg")
        )
    };

    return (
        <div>
            <h2>Lägg till film!</h2>
            <form onSubmit={handleSubmit}>
                <InputForm
                    newMovie={newMovie}
                    movieRating={movieRating}
                    onTitleChange={handleTitleChange}
                    onRatingChange={handleRatingChange}
                />
                <Button text="Lägg till" />
            </form>
        </div>
    );
};

export default AddMovie;