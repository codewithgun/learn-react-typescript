import ReactDOM from 'react-dom';
import Parent from './testing/components/Parent';

const App = () => {
    return <div>
        <h1>Hello world</h1>
        <Parent />
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)