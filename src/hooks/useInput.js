
import {useState} from 'react';

export const useInput = () => {

    let [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    };
}

export const mapInputValue = (value) => {
    if(Array.isArray(value)) {
        return value.map(v => v.value);
    }
    else if(typeof value == 'object') {
        let obj = {};
        Object.keys(value).forEach(key => obj[key] = value[key].value);
        return obj;
    }
    else {
        return value;
    }
}

export default useInput;
