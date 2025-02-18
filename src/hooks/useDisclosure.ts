import { useState, useEffect, useRef } from 'react';

type UseDisclosureProps = {
	initialState: boolean;
	onOpen?: () => void;
	onClose?: () => void;
};

const useDisclosure = ({ initialState }: UseDisclosureProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState);
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && ref.current && !ref.current.contains(event.target as Node))
				setIsOpen(false);
		};
		document.addEventListener('mousedown', handleClickOutside, true);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside, true);
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(initialState);
	}, [initialState]);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return { isOpen, toggle, ref };
};

export default useDisclosure;
