import React from "react";
import { Guest } from "../GuestList/models/Guest";

interface AddGuestProps {
	guests: Guest[];
	updateGuest: (guests: Guest[]) => void;
}

interface AddGuestState {
	name: string;
	age: number;
}

export default class AddGuestClassComponent extends React.Component<AddGuestProps> {
	state: AddGuestState = {
		name: "",
		age: 0
	};

	addGuest = () => {
		let guestExists = this.props.guests.find(g => g.name == this.state.name);
		if (!guestExists) {
			let newGuest: Guest = { name: this.state.name, age: this.state.age };
			this.props.updateGuest([...this.props.guests, newGuest]);
		}
	};

	onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ name: e.target.value });
	};

	onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ age: e.target.value ? Number.parseInt(e.target.value) : 0 });
	};

	render() {
		return (
			<div>
				<h1>Add Guest</h1>
				<div>
					<input value={this.state.name} type="text" onChange={this.onNameChange} />
				</div>
				<div>
					<input value={this.state.age} type="number" onChange={this.onAgeChange} />
				</div>
				<button onClick={this.addGuest}>Add</button>
			</div>
		);
	}
}
