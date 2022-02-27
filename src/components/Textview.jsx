import { useState } from 'react';
import getWords from '../funcs/getWords';

const Textview = () => {
	const [text, setText] = useState('');

	const getInput = (e) => {
		if (e.code.includes('Key')) {
			const word = getWords(e.key);
			setText(text + word);
		}
		if (e.code === 'Backspace') {
			setText(text.split(' ').slice(0, -1).join(' '));
		}
		if (e.code === 'Delete') {
			setText('');
		}
	};

	return (
		<textarea
			className="text-field"
			type="text"
			value={text}
			onChange={(e) => {
				//e
			}}
			onKeyDown={(e) => {
				getInput(e);
			}}
		/>
	);
};

export default Textview;
