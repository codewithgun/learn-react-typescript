interface ChildProps {
    color: string;
    onClick: () => void;
}
export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        <div>{color}</div>
        <div>{children}</div>
        <button onClick={onClick}>Click with callback to Parent</button>
    </div>
}