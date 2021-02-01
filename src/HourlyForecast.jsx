import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    margin: 0,
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(24),
      color: '#8c1561',
    },
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  const imgsrc0 = "http://openweathermap.org/img/w/" + props.icon0 + ".png";
  const imgsrc1 = "http://openweathermap.org/img/w/" + props.icon1 + ".png";
  const imgsrc2 = "http://openweathermap.org/img/w/" + props.icon2 + ".png";
  const imgsrc3 = "http://openweathermap.org/img/w/" + props.icon3 + ".png";
  const imgsrc4 = "http://openweathermap.org/img/w/" + props.icon4 + ".png";
  const imgsrc5 = "http://openweathermap.org/img/w/" + props.icon5 + ".png";
  const imgsrc6 = "http://openweathermap.org/img/w/" + props.icon6 + ".png";

  return (
    <div className={classes.root}>
      <Paper>
        <div className="text-center">
          <p>{props.time0}</p>
          <img src={imgsrc0} alt = {props.icon0} />
          <p>{props.description0}</p>
          <h3>{Math.round(props.temp0)}°</h3>
        </div>
      </Paper>
      <Paper>
        <div className="text-center">
          <p>{props.time1}</p>
          <img src={imgsrc1} alt = {props.icon1} />
          <p>{props.description1}</p>
          <h3>{Math.round(props.temp1)}°</h3>
        </div>
      </Paper>
      <Paper>
        <div className="text-center">
          <p>{props.time2}</p>
          <img src={imgsrc2} alt = {props.icon2} />
          <p>{props.description2}</p>
          <h3>{Math.round(props.temp2)}°</h3>
        </div>
      </Paper>
      <Paper>
        <div className="text-center">
          <p>{props.time3}</p>
          <img src={imgsrc3} alt = {props.icon3} />
          <p>{props.description3}</p>
          <h3>{Math.round(props.temp3)}°</h3>
        </div>
      </Paper>
      <Paper>
        <div className="text-center">
          <p>{props.time4}</p>
          <img src={imgsrc4} alt = {props.icon4} />
          <p>{props.description4}</p>
          <h3>{Math.round(props.temp4)}°</h3>
        </div>
      </Paper>
      <Paper>
        <div className="text-center">
          <p>{props.time5}</p>
          <img src={imgsrc5} alt = {props.icon5} />
          <p>{props.description5}</p>
          <h3>{Math.round(props.temp5)}°</h3>
        </div>
      </Paper>
      <Paper>
        <div className="text-center">
          <p>{props.time6}</p>
          <img src={imgsrc6} alt = {props.icon6} />
          <p>{props.description6}</p>
          <h3>{Math.round(props.temp6)}°</h3>
        </div>
      </Paper>
    </div>
  );
}