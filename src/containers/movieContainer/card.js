import React from 'react';
import './index.scss';

const Card = (props) => {
  const { movie, handleShowPopupData } = props;
  return (
    <>
      <div className="cardContainerStyles">
        {movie &&
          Object?.keys(movie)?.map((movieData, key) => {
            return (
              <div
                className="cardStyle"
                key={movie[movieData].id}
                onClick={() => handleShowPopupData(movie[movieData])}
                data-testid={movie[movieData].id}
              >
                <div className="imageDiv">
                  <img
                    src={movie[movieData].imageUrl}
                    alt=""
                    className="posterImage"
                  />
                </div>
                <div className="imageDataDiv">
                  <div className="cardTitle">{movie[movieData].title}</div>
                  <div className="cardReleaseDate">
                    Release Date: {movie[movieData].releaseDate}
                  </div>
                  <div className="cardRank">Rank: {movie[movieData].rank}</div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="clearStyle" />
    </>
  );
};

export default Card;
