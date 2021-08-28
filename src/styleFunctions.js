const styleFunction = (property, value, defaultValue) => {

	
	if (defaultValue) {
		return `${property}: ${defaultValue}`;
	}

	if (value) {
		return `${property}: ${value}`;
	}

	return '';
};

export const calcWidth = (value, defaultValue) => {
	return styleFunction('width', value, defaultValue);
};
export const calcHeight = (value, defaultValue) => {
	return styleFunction('height', value, defaultValue);
};

export const calcGap = (value, defaultValue) => {
	return styleFunction('gap', value, defaultValue);
};

export const textAlignment = (value, defaultValue) => {
	return styleFunction('text-align', value, defaultValue);
};

export const calcColor = (value, defaultValue) => {
	return styleFunction('color', value, defaultValue);
};
export const calcMb = (value, defaultValue) => {
	return styleFunction('margin-bottom', value, defaultValue);
};

export const columnWidth = (width) => {
	if (width && width >= 1 && width <= 12) {
		return `width: ${(100 * width) / 12}% !important`;
	}

	return '';
};

export const justifyFlex = (value) => {
	switch (value) {
		case 'center': {
			return 'justify-content: center;';
		}
		case 'start': {
			return 'justify-content: flex-start;';
		}
		case 'end': {
			return 'justify-content: flex-end;';
		}
		case 'between': {
			return 'justify-content: space-between;';
		}
		case 'around': {
			return 'justify-content: space-around;';
		}
		default: {
			return '';
		}
	}
};

export const alignFlex = (value) => {
	switch (value) {
		case 'center': {
			return 'align-items: center;';
		}
		case 'start': {
			return 'align-items: flex-start;';
		}
		case 'end': {
			return 'align-items: flex-end;';
		}
		case 'stretch': {
			return 'align-items:stretch;';
		}
		default: {
			return '';
		}
	}
};
