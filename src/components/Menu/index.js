import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/menu.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    menu: data
                })
            })
    }

    render () {
        let menu = this.state.menu;
        return (
            <ul>
                {menu.map((item, index) => (
                    <li key={index}><a href={item.url}>{item.name}</a></li>
                ))}
            </ul>
        )
    }
}

export default Menu;