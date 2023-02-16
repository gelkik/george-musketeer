import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


const TemperatureInput = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value);
        props.onTemperatureChange(e.target.value);
    }
    return (
        <div>
            <label htmlFor={props.scale}>Enter temperature in {scaleNames[props.scale]}</label>
            <br/>
            <input 
                id={props.scale}
                placeholder={props.scale}
                onChange={handleChange}
                value={props.temperature}
            />
        </div>
 )
}

export default TemperatureInput;