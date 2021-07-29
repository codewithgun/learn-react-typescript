interface ChildAsFCProps {
	color: string;
	onClick: () => void;
}

interface ChildProps {
	color: string;
	onClick: () => void;
	children: string;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
	return (
		<div>
			<div>{color}</div>
			<div>{children}</div>
			<button onClick={onClick}>Click with callback to Parent</button>
		</div>
	);
};
export const ChildAsFC: React.FC<ChildAsFCProps> = ({ color, onClick, children }) => {
	return (
		<div>
			<div>{color}</div>
			<div>{children}</div>
			<button onClick={onClick}>Click with callback to Parent</button>
		</div>
	);
};
