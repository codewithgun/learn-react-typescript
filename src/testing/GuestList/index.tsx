import React, { useState } from 'react';
import AddGuest from './AddGuest';
import { Guest } from './models/Guest';

const GuestList: React.FC = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    return <div>
        <h1>Guest list</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    guests.map(guest => <tr key={guest.name}>
                        <td>{guest.name}</td>
                        <td>{guest.age}</td>
                    </tr>)
                }
            </tbody>
        </table>
        <AddGuest setGuests={setGuests} guests={guests} />
    </div>
}

export default GuestList;