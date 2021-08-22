import React, { useState, useEffect } from 'react';
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
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 765) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);
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
						<NavItem>
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
						</NavItem>

						<NavItemBtn>
							{button ? (
								<NavBtnLink to="/sign-up">
									<Button nowrap>Join</Button>
								</NavBtnLink>
							) : (
								<NavBtnLink to="/sign-up">
									<Button onClick={closeMobileMenu} fontBig>
										Join
									</Button>
								</NavBtnLink>
							)}
						</NavItemBtn>
					</NavMenu>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
