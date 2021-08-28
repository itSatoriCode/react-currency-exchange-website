import React from 'react';
import { Column, Row, Text } from '../../globalStyles';
import { FooterColumn, FooterRow, FooterSection, IconRow, Link } from './FooterStyles';

import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Footer = () => {
	const footerData = [
		{
			title: 'Quick Links',
			column: ['Blog', 'FAQs', 'Support', 'About Us'],
		},
		{
			title: 'Product',
			column: ['Log In', 'Personal', 'Business', 'Team'],
		},
		{
			title: 'Legal',
			column: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
		},
	];

	return (
		<FooterSection id="help">
			<FooterRow>
				<FooterColumn md={4} sm={10}>
					<Text bold fontSize="1.5rem">
						XChange
					</Text>
					<Text fontSize="0.9rem">
						XChange program is sponsored by Community Federal Savings Bank, to which
						we're a service provider.
					</Text>
					<IconRow>
						<IconContext.Provider value={{ size: '1.4rem' }}>
							<FaTwitter />
							<FaFacebookF />
							<FaInstagram />
							<FaLinkedin />
						</IconContext.Provider>
					</IconRow>
				</FooterColumn>

				{footerData.map((el, index) => (
					<FooterColumn key={index} md={2} sm={4}>
						<Text bold fontSize="1.05rem">
							{' '}
							{el.title}
						</Text>

						{el.column.map((text, ind) => (
							<Text fontSize="0.9rem" key={ind}>
								<Link href="#">{text}</Link>
							</Text>
						))}
					</FooterColumn>
				))}
			</FooterRow>
		</FooterSection>
	);
};

export default Footer;