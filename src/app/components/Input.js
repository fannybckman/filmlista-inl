import React from "react";

const InputForm = ({ newMovie, movieRating, onTitleChange, onRatingChange }) => {
    return (
        <div>
            <input onChange={onTitleChange} type='text' placeholder="Film" value={newMovie} />
            <input onChange={onRatingChange} type='number' placeholder="Betyg" value={movieRating} />
        </div>
    );
};

export default InputForm;