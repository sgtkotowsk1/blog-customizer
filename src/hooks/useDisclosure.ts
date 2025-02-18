import { useState, useEffect } from 'react';

type UseDisclosureProps = {
	initialState: boolean;
	onOpen?: () => void;
	onClose?: () => void;
};

const useDisclosure = ({ initialState }: UseDisclosureProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState);

	useEffect(() => {
		setIsOpen(initialState);
	}, [initialState]);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return { isOpen, toggle };
};

export default useDisclosure;
