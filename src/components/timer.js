import { useRef, useState } from "react";

function Timer () {

    let numRef = useRef(1);
    let intervalRef = useRef(null);
    let [timer, setTimer] = useState(0); 
    let [counter, setCounter] = useState(0); 

    const plus = () => {
        setCounter((prev) => prev + numRef.current);
    };

    const minus = () => {
        setCounter((prev) => prev - numRef.current);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            {counter}<br />
            <button onClick={minus}>Минус</button> <button onClick={plus}>Плюс</button><br /><br />
            {timer}<br />
            <button onClick={startTimer}>Старт</button> <button onClick={stopTimer}>Стоп</button><br /><br />
        </div>
    )
}

export default Timer;