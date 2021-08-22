import React from 'react';
import Flag from 'react-flagkit';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { CurrencyDropdown, Input, Label } from './HeroStyles';
import DropdownList from './DropdownList';
import styled from 'styled-components';

const InputGroup = styled.div`
	display: flex;
	width: ${({ width }) => (width ? width : 'auto')};
`;

const CurrencyInput = ({
	sell,
	currency,
	value,
	setValue,
	inputRef,
	show,
	setShowSellDrop,
	setShowBuyDrop,
	setCurrency,
}) => {
	const handleDropdown = (sell) => {
		if (sell && !show) {
			setShowSellDrop(true);
			setShowBuyDrop(false);

			return;
		}

		if (!show) {
			setShowSellDrop(false);
			setShowBuyDrop(true);
		}
	};

	const closeDropdown = (el) => {
		console.log(el);
		setCurrency(el.cur);
		setShowSellDrop(false);
		setShowBuyDrop(false);
	};

	return (
		<InputGroup width="90%" className="gx-0 d-flex">
			<Label absolute bold>
				{sell ? 'You Sell' : 'You Buy'}
			</Label>

			<Input type="number" onChange={(e) => setValue(e.target.value)} value={value} />
			<InputGroup className="position-relative">
				<CurrencyDropdown
					ref={inputRef}
					onClick={() => handleDropdown(sell)}
					className="d-flex align-items-center justify-content-start"
				>
					<Flag size={28} country={currency.slice(0, -1)} />
					<span>{currency}</span>
					<IconContext.Provider value={{ size: '1.3em', color: '#dfdfdf' }}>
						<AiOutlineCaretDown />
					</IconContext.Provider>
					<DropdownList
						setCurrency={setCurrency}
						show={show}
						closeDropdown={closeDropdown}
					/>
				</CurrencyDropdown>
			</InputGroup>
		</InputGroup>
	);
};

export default CurrencyInput;
