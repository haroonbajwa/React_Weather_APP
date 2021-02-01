import React from 'react';

const TodayTemp = (props) => {


    const imgsrc = "http://openweathermap.org/img/w/" + props.iconCode + ".png";

    return(
        <>
        <div>
            <h1>{props.city} , {props.country}</h1>
            <p>{props.date}</p>
        </div>
        <div className="d-inline-flex mt-3">
            <div className="todayTemp-logo">
                <img src={imgsrc} alt={props.description} />
            </div>
            <div className="today-temp ml-5">
                <h1>{props.temp}°</h1>
                <p>{props.description}</p>
            </div>
        </div>
        </>
    );
}

export default TodayTemp;