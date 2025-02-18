import { useState, CSSProperties } from 'react';
import { Article } from './components/article';
import { ArticleParamsForm } from './components/article-params-form';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';
import styles from './styles/index.module.scss';

const App = () => {
	const [option, setOption] = useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': option.fontFamilyOption.value,
					'--font-size': option.fontSizeOption.value,
					'--font-color': option.fontColor.value,
					'--container-width': option.contentWidth.value,
					'--bg-color': option.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onOptionChange={setOption} />
			<Article />
		</main>
	);
};

export default App;
