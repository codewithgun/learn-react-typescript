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

## Class component
- To be study

## useState
- For functional component

## setState
- For class component