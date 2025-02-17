import { useState, useCallback, useLayoutEffect } from 'react';

type UseDisclosureProps = {
	initialState: boolean;
	onOpen?: () => void;
	onClose?: () => void;
};

const useDisclosure = ({
	initialState,
	onOpen,
	onClose,
}: UseDisclosureProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState);

	useLayoutEffect(() => {
		setIsOpen(initialState);
	}, [initialState]);

	const toggle = useCallback(() => {
		console.log('Кнопка нажата');
		setIsOpen((prevState) => {
			const newState = !prevState;
			if (newState) {
				onOpen?.();
			} else {
				onClose?.();
			}
			return newState;
		});
	}, [onOpen, onClose]);

	return { isOpen, toggle };
};

export default useDisclosure;
