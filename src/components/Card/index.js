import React from "react";

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Компонент создан');
    }

    componentWillUnmount() {
        console.log('Компонент удален');
    }

    render() {
        let {name, img, price} = this.props.data;
        return (
            <div className="card">
                <div className="card-img">
                    <img
                        src={img}
                        alt={name} />
                </div>
                <h3>{name}</h3>
                <p>{price} $</p>
            </div>
        )
    }
}

export default Card;