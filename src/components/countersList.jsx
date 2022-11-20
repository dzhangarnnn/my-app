import React, {useState} from "react";
import Counter from "./counter";

const CounterList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'}, 
        {id: 1, value: 4, name: 'Ложка'}, 
        {id: 2, value: 5, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ];
   
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    const handleIncrement = (id) => {
        // counters[id].value += 1; 
        // setCounters(counters[id].value + 1)
        setCounters((prevState) => prevState[id].value + 1);
    };
    return (
        <>
            {counters.map((count) => (
                <Counter 
                    key={count.id} onDelete={handleDelete} onIncrement={handleIncrement} {...count}/>
            ))}
            <button 
                className="btn btn-primary btn btn-sm m-2" 
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};

export default CounterList;
