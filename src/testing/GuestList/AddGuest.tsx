import { useState, useRef, useEffect } from "react";
import { Guest } from './models/Guest';

interface AddGuestProps {
    guests: Guest[],
    setGuests: (guests: Guest[]) => void;
}

const AddGuest: React.FC<AddGuestProps> = ({ setGuests, guests }) => {
    const inputNameRef = useRef<HTMLInputElement | null>(null);
    const [age, setAge] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const addGuest = () => {
        let guestExists = guests.find(g => g.name == name);
        if (!guestExists) {
            let newGuest: Guest = { name, age };
            setGuests([...guests, newGuest]);
        }
    }

    useEffect(() =>{
        inputNameRef.current?.focus();
    }, []);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value ? Number.parseInt(e.target.value) : 0);
    }

    return <div>
        <h1>Add Guest</h1>
        <div>
            <input className='form-control' ref={inputNameRef} value={name} type="text" onChange={onNameChange} />
        </div>
        <div>
            <input value={age} className='form-control' type="number" onChange={onAgeChange} />
        </div>
        <button type='button' className='btn btn-primary' onClick={addGuest}>Add</button>
    </div>
}

export default AddGuest;