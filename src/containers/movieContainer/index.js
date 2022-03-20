import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from './redux/movieSlice';
import SetOrder from './setOrder';
import Card from './card';
import Popup from './popup';

const MovieApp = () => {
    const [movie, setMovie] = useState();
    const [orderSelect, setOrder] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [popUpData, setPopUpData] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovie({}))
    }, []);

    const movieLatestData = useSelector((state) => state?.movie?.recommendedMovie?.components);
    
    useEffect(() => {
        setMovie(movieLatestData?.[1]?.items);
        setOrder(movieLatestData?.[0]?.items);
    }, [movieLatestData]);

    const changeOrder = (e) => {
        const orderBy = e?.target?.value;
        if(orderBy) {
            const newMovieData = movie?.slice()?.sort((a, b) => a[`${orderBy}`] - b[`${orderBy}`]);
            setMovie(newMovieData);
        }
    }

    const handleShowPopupData = (cardData) => {
        setShowPopup(!showPopup);
        cardData && setPopUpData(cardData);
    }

    return ( 
        <>
            <div className="visibleStyle">
                <SetOrder 
                    changeOrder={changeOrder}
                    orderSelect={orderSelect}
                />
                <div className="clearStyle" />
                <Card 
                    movie={movie}
                    handleShowPopupData={handleShowPopupData}
                />
                <div className="clearStyle" />
            </div>
            <Popup 
                showPopup={showPopup}
                popUpData={popUpData}
                handleShowPopupData={handleShowPopupData}
            />
            <div className="clearStyle" />
        </>
    )
}

export default MovieApp;