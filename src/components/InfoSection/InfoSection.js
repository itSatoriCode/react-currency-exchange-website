import React from 'react';
import { GridItem, Section, Text } from '../../globalStyles';
import { InfoGrid, InfoImage, TextWrapper } from './InfoSectionStyles';

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
				{
					title: 'Lorem ipsum dolor sit.',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit consequatur laudantium eligendi, perspiciatis a molestiae porro dolore. Laborum nemo obcaecati saepe! Sit, culpa!',
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
				{
					title: 'Lorem ipsum dolor sit.',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit consequatur laudantium eligendi, perspiciatis a molestiae porro dolore. Laborum nemo obcaecati saepe! Sit, culpa!',
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
				{
					title: 'Lorem ipsum dolor sit.',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit consequatur laudantium eligendi, perspiciatis a molestiae porro dolore. Laborum nemo obcaecati saepe! Sit, culpa!',
				},
			],
		},
	];

	return (
		<>
			<Section padding="0px" white id="products">
				{content.map((el, index) => (
					<InfoGrid gtc="repeat(2,1fr)" key={index}>
						<GridItem
							className="textItem"
							order={index % 2 === 0 ? 1 : 2}
							padding="60px"
						>
							<TextWrapper>
								{el.content.map((text, textIndex) => (
									<div key={textIndex}>
										<Text
											as="h2"
											inverse
											bold
											mb="1.3rem"
											size="clamp(1.1rem, 2vw,2rem)"
										>
											{text.title}
										</Text>
										<Text inverse fontSize="clamp(0.9rem,1.5vw,1.3rem)">
											{text.description}
										</Text>
									</div>
								))}
							</TextWrapper>
						</GridItem>
						<GridItem className="imageItem" order={index % 2 === 0 ? 2 : 1}>
							<InfoImage width="100%" src={el.img} alt="" />
						</GridItem>
					</InfoGrid>
				))}
			</Section>
		</>
	);
};

export default InfoSection;
