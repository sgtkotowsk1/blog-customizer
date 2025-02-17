import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import useDisclosure from 'src/hooks/useDisclosure';

export const ArticleParamsForm = () => {
	const { isOpen, toggle } = useDisclosure({ initialState: false });

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggle} />
			{isOpen && (
				<aside
					className={clsx(styles.container, isOpen && styles.container_open)}>
					<form className={styles.form}>
						<div className={styles.bottomContainer}>
							<Button title='Сбросить' htmlType='reset' type='clear' />
							<Button title='Применить' htmlType='submit' type='apply' />
						</div>
					</form>
				</aside>
			)}
		</>
	);
};
