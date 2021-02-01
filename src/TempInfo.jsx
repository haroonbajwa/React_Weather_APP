import React from 'react';
// import Time from 'react-time-format';

const TempInfo = (props) => {
    return(
        <>
        <div className="row-cols-sm-3 row-cols-2 d-flex flex-wrap info-div">
            <div>
                <h3>{props.high}°</h3>
                <p>High</p>
            </div>
            <div>
                <h3>{props.wind}mps</h3>
                <p>Wind</p>
            </div>
            <div>
                <h3>{`${props.sunriseHours}:${props.sunriseMinutes}`}</h3>
                <p>Sunrise</p>
            </div>
            <div>
                <h3>{props.low}°</h3>
                <p>Low</p>
            </div>
            <div>
                <h3>{props.clouds}%</h3>
                <p>Clouds</p>
            </div>
            <div>
                <h3>{`${props.sunsetHours}:${props.sunsetMinutes}`}</h3>
                <p>Sunset</p>
            </div>
        </div>
        </>
    );
}

export default TempInfo;