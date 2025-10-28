interface AppFrameProps {
	children: React.ReactNode;
}

export function AppFrame({ children }: AppFrameProps) {
	return (
		<div className="absolute inset-0 p-2 bg-neutral-950/70 flex gap-2">
			{children}
		</div>
	);
}
