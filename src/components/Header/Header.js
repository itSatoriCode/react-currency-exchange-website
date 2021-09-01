import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';

import {
	Nav,
	NavContainer,
	NavIcon,
	NavLogo,
	MobileIcon,
	NavBtnLink,
	NavItem,
	NavMenu,
	NavLinks,
	NavItemBtn,
} from './HeaderStyles';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => {};

	const scrollTo = (id) => {
		setClick(false);

		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const headerData = [
		{
			to: '/',
			text: 'Phone Transfer',
			id: 'phone',
		},
		{
			to: '/services',
			text: 'Services',
			id: 'services',
		},
		{
			to: '/products',
			text: 'Products',
			id: 'products',
		},
		{
			to: '/help',
			text: 'Help',
			id: 'help',
		},
	];

	return (
		<>
			<Nav>
				<NavContainer>
					<NavLogo to="/" onClick={closeMobileMenu}>
						<NavIcon />
						XChange
					</NavLogo>

					<IconContext.Provider value={{ style: { color: '#fff' } }}>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
					</IconContext.Provider>

					<NavMenu onClick={handleClick} click={click}>
						{headerData.map((el, index) => (
							<NavItem key={index}>
								<NavLinks to={el.to} onClick={() => scrollTo(el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}

						{/* <NavItem>
							<NavLinks to="/" onClick={closeMobileMenu}>
								Money Transfer
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/services" onClick={closeMobileMenu}>
								Services
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/products" onClick={closeMobileMenu}>
								Products
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/help" onClick={closeMobileMenu}>
								Help
							</NavLinks>
						</NavItem> */}
						<NavItemBtn>
							<NavBtnLink to="/sign-up">
								<Button onClick={closeMobileMenu} fontBig>
									Join
								</Button>
							</NavBtnLink>
						</NavItemBtn>
						{/* <NavItemBtn>
							{button ? (
								<NavBtnLink to="/sign-up">
									<Button>Join</Button>
								</NavBtnLink>
							) : (
								<NavBtnLink to="/sign-up">
									<Button onClick={closeMobileMenu} fontBig>
										Join
									</Button>
								</NavBtnLink>
							)}
						</NavItemBtn> */}
					</NavMenu>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
