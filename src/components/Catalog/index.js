
import React from 'react';
import CardHooks from '../CardHooks';

import {AuthContext} from '../../AuthContext';

class Catalog extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            cars: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/cars.json')
            .then((res) => res.json())
            .then((cars) => {
                this.setState({
                    cars: cars
                })
            });
    }

    deleteCar(index) {
        let cars = this.state.cars;
        cars.splice(index, 1);
        this.setState({ cars });
    }

    render() {
        let user = this.context.user;
        let cars = this.state.cars;
        return (
            <div className="list">
                {cars.map((car, index) => (
                    <div key={car.id}>
                        <CardHooks data={car}>
                            { user && <button onClick={() => this.deleteCar(index)}>Удалить</button> }
                        </CardHooks>
                    </div>
                ))}
            </div>
        )
    }
}

export default Catalog;