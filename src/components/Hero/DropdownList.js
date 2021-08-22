import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Flag from 'react-flagkit';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { currencies } from '../../data/Currency';
import data from '../../data/data.json';
import popular from '../../data/popular.json';
import { CountryInput, Label, List, ListItem } from './HeroStyles';
import { AnimatePresence } from 'framer-motion';

const DropdownList = ({ closeDropdown, show }) => {
	// console.log(JSON.parse(data));
	// console.log(data);

	const [search, setSearch] = useState('');

	const handleSearch = (searchText) => {
		setSearch(searchText);
	};

	return (
		<AnimatePresence>
			{show && (
				<List
					initial={{ opacity: 0, height: '0%' }}
					animate={{ opacity: 1, height: 'auto' }}
					transition={{ delay: 0.2 }}
					exit={{ opacity: 0 }}
					className="dropdown-list"
				>
					<Container>
						<ListItem padding="0" noHover className="d-flex align-items-center">
							<IconContext.Provider value={{ size: '2em', color: '#c9c9c9' }}>
								<AiOutlineSearch></AiOutlineSearch>
							</IconContext.Provider>
							<CountryInput
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
								className="ml-5"
								bc="#fff"
								type="text"
							/>
						</ListItem>
						{search.length === 0 && (
							<>
								<ListItem noHover noPointer>
									<Label bold>Popular Currencies</Label>
								</ListItem>

								{popular.map((el, index) => (
									<ListItem
										key={index}
										className="d-flex align-items-center"
										onClick={() => closeDropdown(el)}
									>
										<Flag size={28} country={el.cur.slice(0, -1)} />{' '}
										<span>{el.cur}</span>
										<Label fontSize="1em">{el.name}</Label>
									</ListItem>
								))}

								<ListItem noHover noPointer>
									<Label bold>All Currencies</Label>
								</ListItem>
							</>
						)}

						{data
							.filter((el) => {
								const searchText = search.trim().toLocaleLowerCase();

								const name = el.name
									.toLocaleLowerCase()
									.trim()
									.includes(searchText);
								const code = el.cur.toLocaleLowerCase().trim().includes(searchText);

								return code || name;
							})
							.map((el, index) => (
								<ListItem
									key={index}
									className="d-flex align-items-center"
									onClick={() => closeDropdown(el)}
								>
									<Flag size={28} country={el.cur.slice(0, -1)} />{' '}
									<span>{el.cur}</span>
									<Label fontSize="1em">{el.name}</Label>
								</ListItem>
							))}
					</Container>
				</List>
			)}
		</AnimatePresence>
	);
};

export default DropdownList;
