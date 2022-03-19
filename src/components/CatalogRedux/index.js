import {useContext, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CardHooks from '../CardHooks';
import AddCarForm from '../AddCarForm';
import Modal from '../Modal';

import {AuthContext} from '../../AuthContext';
import {addCar, deleteCar, loadCars} from '../../store/actions/catalog-actions';

function CatalogRedux (props) {

    let dispatch = useDispatch();
    const {user} = useContext(AuthContext);
    const [isAdd, setIsAdd] = useState(false);
    let cars = useSelector((state) => state.catalog);

    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch]);

    const delCar = (car) => {
        dispatch(deleteCar(car));
    }

    const addingCar = (car) => {
        dispatch(addCar(car));
        setIsAdd(false);
    }

    return (
        <>
            { user && <div className='capalog-hooks__add-car'>
                <button onClick={() => setIsAdd(true)}>Добавить машину</button>
            </div> }
            <Modal show={isAdd} onModalClose={() => setIsAdd(false)}>
                <AddCarForm onCarAdd={addingCar} />
            </Modal>
            <div className="list">
                {cars.map((car) => (
                    <div key={car.id}>
                        <CardHooks data={car}>
                            { user && <button onClick={() => delCar(car)}>Удалить</button> }
                        </CardHooks>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CatalogRedux;