import ReactDOM from 'react-dom';
import BookList from './testing/context';
import GuestList from './testing/GuestList';
import { GuestListClassComponent } from './testing/GuestListClassComponent';

const App = () => {
    return <div>
        {/* <GuestList /> */}
        {/* <GuestListClassComponent /> */}
        <BookList />
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)