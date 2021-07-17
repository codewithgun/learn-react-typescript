import React, { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [guests, setGuests] = useState<string[]>([]);

    const addGuest = () => {
        setName('');
        setGuests([...guests, name]);
    };

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(e => <li key={e}>{e}</li>)}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addGuest}>Add a guest</button>
    </div >
};

export default GuestList;