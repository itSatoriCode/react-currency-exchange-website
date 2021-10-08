import React from 'react';
import { Container, Text } from '../../globalStyles';
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
			<Container>
				<FooterRow>
					<FooterColumn>
						<Text weight="700" size="1.5rem">
							XChange
						</Text>
						<Text maxWidth="360px" size="0.9rem">
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
							<Text weight="700" mb="0.3rem" size="1.05rem">
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
			</Container>
		</FooterSection>
	);
};

export default Footer;
