import React from 'react';
import { Container, Heading, Row, Text, Section } from '../../globalStyles';
import { PhoneColumn } from './PhoneSectionStyle';
// import { Section } from '../Hero/HeroStyles';

const PhoneSection = () => {
	const data = [
		{
			img: './images/phone1.jpg',
			title: 'Cheaper an easier',
			description: 'Send money at real exchange rates with no hidden fees',
		},
		{
			img: './images/phone2.jpg',
			title: 'Send money overseas',
			description: 'Send money to more than 200 countries and withdraw anywhere',
		},
		{
			img: './images/phone3.jpg',
			title: 'Convert and hold 54 currencies',
			description:
				'Holding multiple currencies is completely free, and we use the real exchange rate to convert',
		},
	];

	return (
		<Section white id="phone" padding="60px 0">
			<Container>
				<Row align="center" justify="center" wrap="wrap">
					<Heading mb="1rem" inverse>
						Available on your phone too
					</Heading>
					<Row justify="center" wrap="wrap">
						{data.map((el, index) => (
							<PhoneColumn align="center" key={index}>
								<img width="80%" src={el.img} alt="" />
								<Text as="h5" align="center" inverse bold fontSize="1.3rem">
									{el.title}
								</Text>
								<Text
									align="center"
									width="70%"
									inverse
									mb="auto"
									fontSize="0.9rem"
								>
									{el.description}
								</Text>
							</PhoneColumn>
						))}
					</Row>
				</Row>
			</Container>
		</Section>
	);
};

export default PhoneSection;
