import ReactDOM from 'react-dom';
import GuestList from './testing/GuestList';

const App = () => {
    return <div>
        <GuestList />
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)