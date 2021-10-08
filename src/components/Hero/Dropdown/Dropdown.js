import React, { useState, useRef, useEffect } from 'react';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import DropdownList from '../DropdownList';
import { CurrencyDropdown, DropdownContainer } from './DropdownStyles';

const Dropdown = ({ currency, setCurrency }) => {
	const ref = useRef();
	const listRef = useRef();
	const [show, setShow] = useState(false);

	const closeDropdown = (el) => {
		console.log(el);
		setCurrency(el.cur);
		setShow(false);
	};

	useEffect(() => {
		const handleMouseClick = (e) => {
			if (show && !listRef?.current?.contains(e.target)) {
				setShow(false);
			}
		};

		window.addEventListener('click', handleMouseClick);

		return () => {
			window.removeEventListener('click', handleMouseClick);
		};
	}, [show, ref]);

	useEffect(() => {
		if (show && window.innerWidth <= 960) {
			document.body.style.overflowY = 'hidden';
			return;
		}
		document.body.style.overflowY = 'scroll';
	}, [show]);

	return (
		<DropdownContainer>
			<CurrencyDropdown ref={ref} onClick={() => setShow(true)}>
				<Flag size={28} country={currency.slice(0, -1)} />
				<span>{currency}</span>
				<IconContext.Provider value={{ size: '1.3em', color: '#dfdfdf' }}>
					<AiOutlineCaretDown />
				</IconContext.Provider>
			</CurrencyDropdown>
			<DropdownList
				listRef={listRef}
				setCurrency={setCurrency}
				show={show}
				closeDropdown={closeDropdown}
			/>
		</DropdownContainer>
	);
};

export default Dropdown;
