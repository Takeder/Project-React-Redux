import useCounter from "../hooks/useCounter";

function Counter () {

    let {count, add, subtract} = useCounter(10);

    return (
        <div>
            {count}<br />
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    );
}

export default Counter;