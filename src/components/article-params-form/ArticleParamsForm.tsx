import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import useDisclosure from 'src/hooks/useDisclosure';
import { Select } from 'src/ui/select/Select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { FormEvent, useRef, useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { useClose } from 'src/hooks/useClose';

type ArticleParamsFormProps = {
	onOptionChange: (option: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	onOptionChange,
}: ArticleParamsFormProps) => {
	const { isOpen, toggle } = useDisclosure({ initialState: false });
	const [option, setOption] = useState<ArticleStateType>(defaultArticleState);

	const formRef = useRef<HTMLDivElement>(null);

	useClose({
		isOpen: isOpen,
		onClose: toggle,
		rootRef: formRef,
	});

	const handleFontChange = (selectedOption: OptionType) => {
		setOption((prev) => ({
			...prev,
			fontFamilyOption: selectedOption,
		}));
	};

	const handleFontSizeChange = (selectedOption: OptionType) => {
		setOption((prev) => ({
			...prev,
			fontSizeOption: selectedOption,
		}));
	};

	const handleColorChange = (selectedOption: OptionType) => {
		setOption((prev) => ({
			...prev,
			fontColor: selectedOption,
		}));
	};

	const handleBackgroundColorChange = (selectedOption: OptionType) => {
		setOption((prev) => ({
			...prev,
			backgroundColor: selectedOption,
		}));
	};

	const handleContentWidthChange = (selectedOption: OptionType) => {
		setOption((prev) => ({
			...prev,
			contentWidth: selectedOption,
		}));
	};

	const onCommit = (e: FormEvent) => {
		e.preventDefault();
		onOptionChange(option);
		toggle();
	};

	const onCancel = () => {
		setOption(defaultArticleState);
		onOptionChange(defaultArticleState);
		toggle();
	};

	return (
		<div ref={formRef}>
			<ArrowButton isOpen={isOpen} onClick={toggle} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={onCommit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={option.fontFamilyOption}
						onChange={handleFontChange}
						title='Шрифт'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={option.fontSizeOption}
						title='Размер шрифта'
						onChange={handleFontSizeChange}
					/>
					<Select
						options={fontColors}
						selected={option.fontColor}
						onChange={handleColorChange}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={option.backgroundColor}
						onChange={handleBackgroundColorChange}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={option.contentWidth}
						onChange={handleContentWidthChange}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={onCancel}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
