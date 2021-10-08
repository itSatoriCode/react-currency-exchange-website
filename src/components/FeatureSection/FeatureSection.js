import React from 'react';
import { Container, Heading, Row, Section, Text } from '../../globalStyles';
import { BsShieldLockFill, BsFillLightningFill } from 'react-icons/bs';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { IoIosOptions } from 'react-icons/io';
import { HiCubeTransparent } from 'react-icons/hi';
import { Feature } from './FeatureSectionStyles';
const FeatureSection = () => {
	const Icon = (IconComponent) => {
		return <IconComponent size={70} style={{ fill: '#35486F' }}></IconComponent>;
	};

	const features = [
		{
			icon: Icon(BsShieldLockFill),
			title: 'Secure',
			description:
				"Our system was designed to ensure that all the transactions are safe and private. Our customer's privacy is important to us",
		},
		{
			icon: Icon(BiSupport),
			title: '24/7 Support',
			description:
				'The tech support is available 24 hours, 7 days a week. If you have any questions just email or phone us',
		},
		{
			icon: Icon(BsFillLightningFill),
			title: 'Fast',
			description:
				'We have partnered with 100+ banks to make sure transaction are being processed fast and effective.',
		},
		{
			icon: Icon(BiDollar),
			title: 'Lowest Rates',
			description:
				'We offer the lowest exchange rates on the market, save 1-5% on conversion rates by joining us',
		},
		{
			icon: Icon(IoIosOptions),
			title: 'Easy',
			description:
				'Our UI/UX engineers have designed the system to be as simple as possible, so that our clients are satisfied',
		},
		{
			icon: Icon(HiCubeTransparent),
			title: 'Transparent',
			description:
				'We have no hidden fees, and all the transaction can be seen in your account history',
		},
	];

	return (
		<Section id="services" padding="60px 0">
			<Container>
				<Row wrap="wrap" justify="center" gap="1.4rem">
					<Heading mb="1rem" inverse>
						Amazing Features
					</Heading>
					{features.map((el, index) => (
						<Feature key={index} md={3} sm={10}>
							{el.icon}

							<Text inverse weight="700" size="1.3rem">
								{el.title}
							</Text>
							<Text mb="auto" size="1rem">
								{el.description}
							</Text>
						</Feature>
					))}
				</Row>
			</Container>
		</Section>
	);
};

export default FeatureSection;
