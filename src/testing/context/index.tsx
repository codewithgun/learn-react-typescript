import Header from './Header';
import BookList from './BookList';
import './index.css';
import { useState } from 'react';
import { Book } from './models/Book';

const BookComponent: React.FC = () => {
    
    const [books, setBooks] = useState<Book[]>([{ isbn: '12-33-11', name: 'Book 1'}]);

    return <div id='bookComponent'>
        <Header />
        <BookList setBooks={setBooks} books={books} />
    </div>
}

export default BookComponent;