import React from 'react';

import { Input, Label } from './HeroStyles';
import styled from 'styled-components';
import Dropdown from './Dropdown/Dropdown';

const InputGroup = styled.div`
	display: flex;
	gap: 0;
`;

const CurrencyInput = ({ sell, currency, value, setValue, setCurrency }) => {
	return (
		<InputGroup>
			<Label absolute bold>
				{sell ? 'You Sell' : 'You Buy'}
			</Label>

			<Input type="number" onChange={(e) => setValue(e.target.value)} value={value} />
			{/* <InputGroup>
				<CurrencyDropdown ref={inputRef} onClick={() => handleDropdown(sell)}>
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
			</InputGroup> */}
			<Dropdown currency={currency} setCurrency={setCurrency} />
		</InputGroup>
	);
};

export default CurrencyInput;
