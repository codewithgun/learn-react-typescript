import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/add">Add-Book</Link>
		</nav>
	);
};

export default Header;
