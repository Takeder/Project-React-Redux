
import './catalog.css';

import {useState, useEffect, useContext} from 'react';
import CardHooks from '../CardHooks';
import Modal from '../Modal';
import AddCarForm from '../AddCarForm';

import {AuthContext} from '../../AuthContext';

function CatalogHooks (props) {

    const {user} = useContext(AuthContext);
    const [isAdd, setIsAdd] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // componentDidMount
        fetch('http://localhost:3000/cars.json')
            .then((res) => res.json())
            .then((cars) => {
                setCars(cars);
            });
    }, []);

    function deleteCar (index) {
        cars.splice(index, 1);
        setCars([...cars]);
    }

    const addCar = (car) => {
        car.id = new Date().valueOf();
        cars.push(car);
        setCars([...cars]);
        setIsAdd(false);
    }

    return (
        <>
            { user && <div className='capalog-hooks__add-car'><button onClick={() => setIsAdd(true)}>Добавить машину</button></div> }
            <Modal show={isAdd} onModalClose={() => setIsAdd(false)}>
                <AddCarForm onCarAdd={addCar} />
            </Modal>
            <div className="list">
                {cars.map((car, index) => (
                    <div key={car.id}>
                        <CardHooks data={car}>
                            { user && <button onClick={() => deleteCar(index)}>Удалить</button> }
                        </CardHooks>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CatalogHooks;