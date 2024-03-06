import './App.css';
import React, { useState } from 'react';

function App() {
    const [carName, setCarName] = useState('');
    const [cars, setCars] = useState([]);

    const handleChange = (event) => {
        setCarName(event.target.value);
    };

    const deleteCar = (index) => {
        const updatedCars = [...cars]
        updatedCars.splice(index, 1)
        setCars(updatedCars)
    }
    const addCar = () => {
    setCars([...cars, carName]);
    setCarName('');
    }

    return(
        <div>
            <p>Enter car name: </p>
            <input className='car' value={carName} onChange={handleChange}/>
            <button onClick={addCar}>ADD</button>
            <ul>
            {cars.map((car, index) => (
                <li key={index}>
                    {car}
                    <button onClick={() => deleteCar(index)}>DELETE</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
