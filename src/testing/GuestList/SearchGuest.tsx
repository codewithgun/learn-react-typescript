import { useState } from "react";
import { Guest } from "./models/Guest";

interface SearchGuestProps {
	guests: Guest[];
}

const SearchGuest: React.FC<SearchGuestProps> = ({ guests }) => {
	const [searchName, setSearchName] = useState<string>("");
	const searchResult = guests
		.filter(guest => (searchName ? guest.name.startsWith(searchName) : true))
		.map(foundGuest => (
			<tr key={foundGuest.name}>
				<td>{foundGuest.name}</td>
				<td>{foundGuest.age}</td>
			</tr>
		));

	const searchGuest = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchName(e.target.value);
	};

	return (
		<div>
			<h1>Search Guest</h1>
			<input className="form-control" value={searchName} type="text" onChange={searchGuest} />
			<div> Result</div>
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>{searchResult}</tbody>
			</table>
		</div>
	);
};

export default SearchGuest;
