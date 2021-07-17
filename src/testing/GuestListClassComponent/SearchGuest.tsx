import React from "react";
import { Guest } from "../GuestList/models/Guest";

interface SearchGuestProps {
    guests: Guest[];
}

interface SearchGuestState {
    searchName: string;
}

export default class SearchGuestClassComponent extends React.Component<SearchGuestProps> {
    state: SearchGuestState = {
        searchName: '',
    };

    searchGuest = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchName: e.target.value });
    }

    render() {
        return <div>
            <h1>Search Guest</h1>
            <input value={this.state.searchName} type="text" onChange={this.searchGuest} />
            <div>Result</div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.guests.filter(guest => this.state.searchName ? guest.name.startsWith(this.state.searchName) : true).map(foundGuest =>
                        <tr key={foundGuest.name}>
                            <td>{foundGuest.name}</td>
                            <td>{foundGuest.age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    }
}