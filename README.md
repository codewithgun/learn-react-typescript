# Overview

## Create new project
```
npx create-react-app react-with-typescript --template typescript
```
## Types of component
- Functional
- Class

## Types of state
- useState
- setState

## Functional component
There was 2 ways of creating functional component

1st Way (using function)
```
interface ChildProps {
    color: string;
    onClick: () => void;
}
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        <div>Color: {color}</div>
        <button onClick={onClick}>Callback to parent</button>
    </div>
}
```
Advantages
- Shorter code

Disadvantages
- Typescript do not know it was functional component, therefore attributes like `contextTypes`, `displayName` will not be type-hinted.
- `children` props need to be manually specified in the interface.

2nd Way (using functional component)
```
interface ChildAsFCProps {
    color: string;
    onClick: () => void;
}

export const ChildAsFC: React.FC<ChildAsFCProps> = ({ color, onClick, children }) => {
    return <div>
        <div>{color}</div>
        <div>{children}</div>
        <button onClick={onClick}>Click with callback to Parent</button>
    </div>
}
```
Advantages
- Typescript know that it was a react functional component, therefore typescript can typehint for the default props.

Disadvantages
- Longer code

### Overview on functional component
- The return value is JSX
- State must be manage using `useState`
- Access state without using `this.state`
- Shorter and cleaner code

## Class component
- Use `render()` function to render JSX
- State can be manage using `useState` or `setState`
- If `setState` used, we must access state using `this.state`
- Accessing props require `this.props`
- Longer code
---

## useState
- For functional component
- Also known as react hook
- It is the state of the functional component

## setState
- For class component
- It is the state of the class component

---

## useRef
- For functional component
- Used to reference DOM from react component

## React.createRef()
- For class component
- Used to reference DOM from react component

---

## useEffect
- For functional component
- Fired after the component rendered
- Clean up effect by returning a `function` in the `useEffect` callback
- useEffect((() =>  {}), []), we pass `state` variable into `[]`, everytime the `state` passed change, the callback in useEffect will be fired. If it was empty (`[]`), it is same as `componentDidMount`
- useEffect(() => {}) is same as `componentDidUpdate`
- Unify lifecycles into one `useEffect`

## lifecycle
- For class component
- `componentDidMount` fired after first render
- `componentDidUpdate` fired after update render
- Clean up effect in `componentDidMount` using `componentWillUnmount`