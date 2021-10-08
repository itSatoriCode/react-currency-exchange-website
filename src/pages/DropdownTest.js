import React, { useState } from 'react';
import Dropdown from '../components/Hero/Dropdown/Dropdown';

const style = {
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#5f5f5f',
};

const DropdownTest = () => {
	const [show, setShow] = useState(false);
	const [buy, setBuy] = useState(false);

	return (
		<div style={style}>
			<Dropdown show={show} setShow={setShow}></Dropdown>
			<Dropdown show={buy} setShow={setBuy}></Dropdown>
		</div>
	);
};

export default DropdownTest;
