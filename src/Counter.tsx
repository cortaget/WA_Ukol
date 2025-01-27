import React, { useState } from 'react';


const Counter: React.FC = () => {
    const [count, setCount] = useState(0); // Inicializace stavu s výchozí hodnotou 0

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Počítadlo</h1>
            <p>Aktuální hodnota: <strong>{count}</strong></p>
            <button
                onClick={() => setCount(count + 1)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Přidat
            </button>
            <button
                onClick={() => setCount(count - 1)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Odebrat
            </button>
        </div>
    );
};

export default Counter;
