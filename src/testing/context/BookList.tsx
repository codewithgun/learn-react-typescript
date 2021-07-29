import { Book } from "./models/Book";

interface BookListProps {
    books: Book[],
    setBooks: (books: Book[]) => void;
}

const BookList: React.FC<BookListProps> = ({ setBooks, books }) => {
    return <div>
        <ul>
            {books.map(book => <li key={book.isbn}>{book.name}</li>)}
        </ul>
    </div>
}

export default BookList;