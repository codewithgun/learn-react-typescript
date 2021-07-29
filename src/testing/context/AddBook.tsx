import React, { useState } from "react";
import { Book } from "./models/Book";

interface AddBookProps {
	books: Book[];
	setBooks: (books: Book[]) => void;
}

const AddBook: React.FC<AddBookProps> = ({ setBooks, books }) => {
	const [name, setName] = useState<string>("");
	const [isbn, setISBN] = useState<string>("");

	const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onISBNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setISBN(e.target.value);
	};

	const clearFields = () => {
		setName("");
		setISBN("");
	};

	const addBook = () => {
		if (name && isbn) {
			if (books.find(b => b.isbn == isbn)) {
				alert("Book exists !");
			} else {
				setBooks([...books, { isbn, name }]);
				clearFields();
			}
		} else {
			alert("All field required !");
		}
	};

	return (
		<div id="addBook">
			<h3>New book</h3>
			<div className="form-group">
				<label htmlFor="isbn">ISBN:</label>
				<input type="text" className="form-control" id="isbn" onChange={onISBNChange} value={isbn} />
			</div>
			<div className="form-group">
				<label htmlFor="name">Name:</label>
				<input type="text" className="form-control" id="name" onChange={onNameChange} value={name} />
			</div>
			<button type="button" className="btn btn-primary" onClick={addBook}>
				Add
			</button>
		</div>
	);
};

export default AddBook;
