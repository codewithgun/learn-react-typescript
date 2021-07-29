import React from "react";
import { Guest } from "../GuestList/models/Guest";
import AddGuestClassComponent from "./AddGuest";
import SearchGuestClassComponent from "./SearchGuest";

interface GuestListState {
	guests: Guest[];
}

export class GuestListClassComponent extends React.Component {
	state: GuestListState = {
		guests: []
	};

	updateGuest = (guests: Guest[]): void => {
		this.setState({
			guests
		});
	};

	render() {
		return (
			<div>
				<h1>Guest list</h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{this.state.guests.map(guest => (
							<tr key={guest.name}>
								<td>{guest.name}</td>
								<td>{guest.age}</td>
							</tr>
						))}
					</tbody>
				</table>
				<AddGuestClassComponent guests={this.state.guests} updateGuest={this.updateGuest} />
				<SearchGuestClassComponent guests={this.state.guests} />
			</div>
		);
	}
}
