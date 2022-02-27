import { IconButton } from '@material-ui/core';
import { useState } from 'react';

const Textview = () => {
	const [text, setText] = useState('');

	const getWord = (letter) => {
		return `${letter}word `;
	};
	return (
		<input
			className="text-filed"
			type="text"
			value={text}
			onChange={(e) => {
				setText(getWord(e.target.value));
			}}
		/>
	);
};

export default Textview;
