import {useState, useCallback} from 'react'

export const useLocalStorage=(keyName , defaultValue)=> {
    const [keyNameValue, setKeyNameValue] = useState(null);
    if (keyNameValue === null) {
        let tmp = JSON.parse(localStorage.getItem(keyName));
        if (tmp === null) {
            setKeyNameValue(defaultValue);
        } else {
            setKeyNameValue(tmp);
        }
    }
    const setWrapKeyNameValue = useCallback((value)=>{
        localStorage.setItem(keyName, JSON.stringify(value));
        setKeyNameValue(value);
    }, [localStorage, setKeyNameValue]);

    return [keyNameValue, setWrapKeyNameValue];
}