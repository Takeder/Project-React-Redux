import {useEffect} from 'react';

function Card({data: {name, price, img}, children}) {

    useEffect(() => {
        // componentDidMount
        return () => {
            // componentWillUnmount
            console.log('Компонент удален');
        };
    }, []);

    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={img}
                    alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{price} $</p>
            {children}
        </div>
    )
}

export default Card;