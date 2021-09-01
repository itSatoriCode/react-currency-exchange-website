import React from 'react';
import { Heading, Text } from '../../globalStyles';
// import { Section } from '../Hero/HeroStyles';
import { ClientRow, ClientWrapper, InfoColumn, Section, TextWrapper } from './InfoSectionStyles';

const InfoSection = () => {
	const content = [
		{
			img: './images/team1.jpg',
			content: [
				{
					title: 'Shopping through overseas online stores',
					description:
						'If you’re shopping online, always choose to pay in the currency of the country you’re buying from.',
				},
				{
					title: 'Invest and make money',
					description:
						' If you don’t have it in your account, the card will automatically convert to it from the balance that’s cheapest for you. You’ll avoid Dynamic Currency Conversion fees.',
				},
			],
		},
		{
			img: './images/team2.jpg',
			content: [
				{
					title: 'Pay online securely with instant notifications.',
					description:
						'Authorise payments with 3-D Secure authentication. Receive instant notifications when you spend.',
				},
				{
					title: 'You’re always in control.',
					description:
						'Freeze and unfreeze your card whenever you like. And with PIN reminders and instant transaction notifications, you can stay in the know.',
				},
			],
		},
		{
			img: './images/team3.jpg',
			content: [
				{
					title: 'Receive money from around the world',
					description:
						'UK account number, Euro IBAN, US routing number, and more. All in one account',
				},
				{
					title: 'Invest and make money',
					description:
						'Receive your salary, invoice payments, pension and profit from shares',
				},
			],
		},
	];

	return (
		<>
			{/* <Section white>
				<Container>
					<InfoRow>
						<Heading textAlign="center" inverse>
							Available on your phone too
						</Heading>
						<InfoRow>
							{data.map((el, index) => (
								<InfoColumn key={index} md={4} sm={10}>
									<img width="80%" src={el.img} alt="" />
									<Text textAlign="center" inverse bold fontSize="1.3rem">
										{el.title}
									</Text>
									<Text textAlign="center" inverse mb="auto" fontSize="0.9rem">
										{el.description}
									</Text>
								</InfoColumn>
							))}
						</InfoRow>
					</InfoRow>
				</Container>
			</Section> */}

			{/* <Section>
				<Container>
					<InfoRow gap="1rem">
						<Heading textAlign="center" inverse>
							Amazing Features
						</Heading>
						{features.map((el, index) => (
							<Feature key={index} md={3} sm={10}>
								{el.icon}

								<Text inverse bold fontSize="1.3rem">
									{el.title}
								</Text>
								<Text mb="auto">{el.description}</Text>
							</Feature>
						))}
					</InfoRow>
				</Container>
			</Section> */}

			<Section noPadding white id="products">
				<ClientWrapper>
					{content.map((el, index) => (
						<ClientRow key={index}>
							<InfoColumn md={6} sm={10}>
								<TextWrapper>
									{el.content.map((text, ind) => (
										<div key={ind}>
											<Heading
												inverse
												bold
												mb="1.3rem"
												fontSize="clamp(1.1rem, 2vw,2rem)"
											>
												{text.title}
											</Heading>
											<Text inverse fontSize="clamp(0.9rem,1.5vw,1.3rem)">
												{text.description}
											</Text>
										</div>
									))}
								</TextWrapper>
							</InfoColumn>
							<InfoColumn md={6} sm={10}>
								<img width="100%" src={el.img} alt="" />
							</InfoColumn>
						</ClientRow>
					))}
				</ClientWrapper>
			</Section>
		</>
	);
};

export default InfoSection;
