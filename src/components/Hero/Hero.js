import React, { useState, useEffect } from 'react';
import {
	RightColumn,
	ConversionList,
	Features,
	GetStarted,
	Title,
	Video,
	LeftColumn,
	HeroSection,
} from './HeroStyles';
import CurrencyInput from './CurrencyInput';
import { Button, Container, Text, Row } from '../../globalStyles';
import { AiOutlineRise } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import rates from '../../data/rates.json';

const Hero = () => {
	const [sellCur, setSellCur] = useState('NZD');
	const [buyCur, setBuyCur] = useState('USD');
	const [rate, setRate] = useState(1);

	const [sellAmount, setSellAmount] = useState(1000);
	const [buyAmount, setBuyAmount] = useState(1000);

	const roundNumber = (number, decimal) => {
		if (decimal) {
			return (
				Math.round((number + Number.EPSILON) * Math.pow(10, decimal)) /
				Math.pow(10, decimal)
			);
		}
		return Math.round((number + Number.EPSILON) * 100) / 100;
	};

	useEffect(() => {
		const curRate = rates.conversion_rates[buyCur] / rates.conversion_rates[sellCur];
		setBuyAmount(roundNumber((sellAmount - sellAmount * 0.0066) * curRate));

		setRate(roundNumber(curRate, 5));
	}, [buyCur, sellCur, sellAmount, rate]);

	return (
		<HeroSection id="hero">
			<Container>
				<Row justify="center">
					<LeftColumn width="50%">
						<Title bold textColor>
							Cheapest currency
							<br />
							exchange Platform
						</Title>
						<Text fontSize="0.9" space>
							Transfer money or spend abroad cheaper and faster <br />
							than old-school banks, and receive
							<br /> money around the world for free.
						</Text>
						<Video
							width="70%"
							src="/videos/Hero.mp4"
							type="video/mp4"
							autoPlay
							muted
							loop
						></Video>
						<Features>
							<div>
								<img className="lock" src="./images/Lock.svg" alt="21" />
								<Text bold>Safest Platform</Text>
								<a href="localhost:3000">Find out why</a>
							</div>
							<div>
								<img className="reviews" src="./images/Reviews.svg" alt="21" />
								<Text bold>Millions of Happy Customers</Text>
								<a href="localhost:3000">See what they say</a>
							</div>
						</Features>
					</LeftColumn>

					<RightColumn align="end" md={5} sm={10}>
						<div>
							<Row>
								<CurrencyInput
									sell={true}
									setValue={setSellAmount}
									value={sellAmount}
									currency={sellCur}
									setCurrency={setSellCur}
								/>
							</Row>

							<ConversionList>
								<li>
									<span>
										{roundNumber(sellAmount * 0.0016)} {sellCur}
									</span>
									<span>Bank Debit (ACH)</span>
								</li>
								<li>
									<span>
										{roundNumber(sellAmount * 0.005)} {sellCur}
									</span>
									<span>Our Fee</span>
								</li>
								<li className="total">
									<span>
										{roundNumber(sellAmount * 0.0066)} {sellCur}
									</span>
									<span>Total</span>
									<div>-</div>
								</li>
								<li>
									<span>
										{sellAmount - roundNumber(sellAmount * 0.0066)} {sellCur}
									</span>
									<span>Amount we convert</span>
									<div>=</div>
								</li>
								<li>
									<span className="rate">
										{rate}
										<motion.span
											initial={{ opacity: '0' }}
											transition={{
												yoyo: Infinity,
												duration: 2,
											}}
											animate={{ opacity: 1 }}
										>
											<IconContext.Provider
												value={{ size: '1.7rem', color: '#23ca8f' }}
											>
												<AiOutlineRise />
											</IconContext.Provider>
										</motion.span>
									</span>
									<span>Guaranteed rate (24 hrs)</span>
									<div>x</div>
								</li>
							</ConversionList>
							<Row>
								<CurrencyInput
									currency={buyCur}
									setValue={setBuyAmount}
									value={buyAmount}
									setCurrency={setBuyCur}
								/>
							</Row>
							<GetStarted>
								<div>
									<Text bold fontSize="0.9rem">
										You would save vs banks
										<br />
										<Text bold fontSize="1.1rem">
											6.32 USD
										</Text>
									</Text>
									<Text bold fontSize="0.9rem">
										Should arrive by
										<br />
										<Text bold fontSize="1.1rem">
											August 23
										</Text>
									</Text>
								</div>
								<Button color="white" hoverColor="#321321">
									Get Started
								</Button>
							</GetStarted>
						</div>
					</RightColumn>
				</Row>
			</Container>
		</HeroSection>
	);
};

export default Hero;
