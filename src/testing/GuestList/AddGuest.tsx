import { useState } from "react";
import { Guest } from './models/Guest';

interface AddGuestProps {
    guests: Guest[],
    setGuests: (guests: Guest[]) => void;
}

const AddGuest: React.FC<AddGuestProps> = ({ setGuests, guests }) => {
    const [age, setAge] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const addGuest = () => {
        let guestExists = guests.find(g => g.name == name);
        if (!guestExists) {
            let newGuest: Guest = { name, age };
            setGuests([...guests, newGuest]);
        }
    }
    return <div>
        <div>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <input value={age} type="number" onChange={(e) => setAge(e.target.value ? Number.parseInt(e.target.value) : 0)} />
        </div>
        <button onClick={addGuest}>Add</button>
    </div>
}

export default AddGuest;