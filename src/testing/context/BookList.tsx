import { Book } from "./models/Book";

interface BookListProps {
	books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
	return (
		<div id="bookList">
			<h3>List of books</h3>
			<table className="table">
				<thead>
					<tr>
						<th>ISBN</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{books.map(book => (
						<tr key={book.isbn}>
							<td>{book.isbn}</td>
							<td>{book.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default BookList;
