import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBook from "./AddBook";
import BookList from "./BookList";
import Header from "./Header";
import "./index.css";
import { Book } from "./models/Book";

const BookComponent: React.FC = () => {
	const [books, setBooks] = useState<Book[]>([{ isbn: "12-33-11", name: "Book 1" }]);

	return (
		<Router>
			<div id="bookComponent">
				<Header />
				<Switch>
					<Route exact path="/">
						<BookList books={books} />
					</Route>
					<Route path="/add">
						<AddBook books={books} setBooks={setBooks} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default BookComponent;
