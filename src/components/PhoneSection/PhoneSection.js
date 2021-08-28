import React from 'react';
import { Column, Container, Heading, Row, Text, Section } from '../../globalStyles';
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
		<Section white id="phone">
			<Container>
				<Row align="center" justify="center">
					<Heading textAlign="center" inverse>
						Available on your phone too
					</Heading>
					<Row>
						{data.map((el, index) => (
							<Column align="center" key={index} md={4} sm={10}>
								<img width="80%" src={el.img} alt="" />
								<Text textAlign="center" inverse bold fontSize="1.3rem">
									{el.title}
								</Text>
								<Text textAlign="center" inverse mb="auto" fontSize="0.9rem">
									{el.description}
								</Text>
							</Column>
						))}
					</Row>
				</Row>
			</Container>
		</Section>
	);
};

export default PhoneSection;
