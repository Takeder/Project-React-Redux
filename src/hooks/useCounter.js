import {useState} from "react";

function useCounter(initialState = 0) {
    const [count, setCount] = useState(initialState);
    return { 
        count, 
        add: () => {
            setCount(count + 1)
        }, 
        subtract: () => {
            setCount(count - 1)
        }
    };
};

export default useCounter;