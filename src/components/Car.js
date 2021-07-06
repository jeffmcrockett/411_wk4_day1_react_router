import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import cars from '../cars.json'
import './Car.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Container, Paper, Chip //

const Car = (props) => {
    let id = props.match.params.id;
    let carInfo = [];
    for (let i = 0 ; i < cars.length ; i++) {
        if (cars[i].id == id) {
            carInfo = [cars[i].id, cars[i].Name, cars[i].Miles_per_Gallon, cars[i].Horsepower, cars[i].Origin];
            console.log(carInfo);
        }
    }
    return (
        <div className="carsContainer">
            <Navigation />
            <Card className="carContainer">
                <Typography>Car Name : {carInfo[1]}</Typography>
                <Typography>Car MPG : {carInfo[2]}</Typography>
                <Typography>Car HP : {carInfo[3]}</Typography>
                <Typography>Car Origin : {carInfo[4]}</Typography>
                <Link to="/">
                    <Button className='carsButton' value='submit'>Return to List</Button>
                </Link>
            </Card>
        </div>
    )
}

export default Car;