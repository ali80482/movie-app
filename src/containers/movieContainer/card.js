import React from 'react';
import "./index.scss";

const Card = ({movie, handleShowPopupData}) => {
    return (
        <>
            <div className="cardContainerStyles">
                {   movie && Object?.keys(movie)?.map((movieData, key) => {
                        return (
                            <div key={movie[movieData].id} className="cardStyle" onClick={() => handleShowPopupData(movie[movieData])}>
                                <img src={movie[movieData].imageUrl} alt="" className="imageStyle" />
                                <div className="cardText">{movie[movieData].title}({movie[movieData].releaseDate})</div>
                            </div>
                        )
                })}
            </div>
        </>
    )
}

export default Card;