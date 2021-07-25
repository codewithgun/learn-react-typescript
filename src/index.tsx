import ReactDOM from 'react-dom';
import GuestList from './testing/GuestList';
import { GuestListClassComponent } from './testing/GuestListClassComponent';

const App = () => {
    return <div>
        <GuestList />
        {/* <GuestListClassComponent /> */}
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)