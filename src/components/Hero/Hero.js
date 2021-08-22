import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ConversionList, Features, GetStarted, Section, Title, Video } from './HeroStyles';
import CurrencyInput from './CurrencyInput';
import { Button, Container, Text } from '../../globalStyles';
import { AiOutlineRise } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import rates from '../../data/rates.json';

const Hero = () => {
	const [sellCur, setSellCur] = useState('NZD');
	const [buyCur, setBuyCur] = useState('USD');
	const [sellAmount, setSellAmount] = useState(1000);
	const [buyAmount, setBuyAmount] = useState(1000);
	const [showSellDrop, setShowSellDrop] = useState(false);
	const [showBuyDrop, setShowBuyDrop] = useState(false);

	const sellRef = useRef();
	const buyRef = useRef();

	const roundNumber = (number) => Math.round((number + Number.EPSILON) * 100) / 100;

	useEffect(() => {
		const rate = rates.conversion_rates[buyCur] / rates.conversion_rates[sellCur];
		// const amount = Math.round((sellAmount * rate + Number.EPSILON) * 100) / 100;
		setBuyAmount(roundNumber(rate * sellAmount));
	}, [buyCur, sellCur, sellAmount]);

	useEffect(() => {
		const handleMouseClick = (e) => {
			if (
				(showSellDrop || showBuyDrop) &&
				!sellRef.current.contains(e.target) &&
				!buyRef.current.contains(e.target)
			) {
				setShowBuyDrop(false);
				setShowSellDrop(false);
			}
		};

		window.addEventListener('click', handleMouseClick);

		return () => {
			window.addEventListener('click', handleMouseClick);
		};
	}, [showBuyDrop, showSellDrop]);

	// const handleDropdown = (sell) => {
	// 	if (sell) {
	// 		setShowSellDrop(true);
	// 		setShowBuyDrop(false);
	// 	} else {
	// 		setShowSellDrop(false);
	// 		setShowBuyDrop(true);
	// 	}
	// };

	return (
		<Section>
			<Container>
				<Row className="justify-content-center">
					<Col md={6} sm={10} className="d-flex flex-column align-items-start">
						<Title textColor>
							Cheapest currency
							<br />
							exchange Platform
						</Title>
						<Text notBold fontSize="0.9" space>
							Transfer money or spend abroad cheaper and faster <br />
							than old-school banks, and receive
							<br /> money around the world for free.
						</Text>
						<Video
							width="70%"
							src="/videos/Hero.mp4"
							type="video/mp4"
							// autoPlay
							muted
							loop
						></Video>
						<Features>
							<div>
								<img className="lock" src="./images/Lock.svg" alt="21" />
								<Text>Safest Platform</Text>
								<a href="localhost:3000">Find out why</a>
							</div>
							<div>
								<img className="reviews" src="./images/Reviews.svg" alt="21" />
								<Text>Millions of Happy Customers</Text>
								<a href="localhost:3000">See what they say</a>
							</div>
						</Features>
					</Col>

					<Col md={5} sm={10} className="d-flex flex-column">
						<Row className=" d-flex justify-content-end">
							<CurrencyInput
								sell={true}
								setValue={setSellAmount}
								value={sellAmount}
								currency={sellCur}
								inputRef={sellRef}
								show={showSellDrop}
								setShowSellDrop={setShowSellDrop}
								setShowBuyDrop={setShowBuyDrop}
								setCurrency={setSellCur}
							/>
							{/* <DropdownList
								sellRef={sellRef}
								show={showSellDrop}
								showDropdown={setShowSellDrop}
							/> */}
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
								<span>3222.20 USD</span>
								<span>Amount we convert</span>
								<div>=</div>
							</li>
							<li>
								<span className="rate">
									1.432{' '}
									<motion.span
										initial={{ x: '-100px' }}
										transition={{
											yoyo: Infinity,
											duration: 2,
										}}
										animate={{ opacity: 1, x: '0' }}
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
						<Row className=" d-flex justify-content-end">
							<CurrencyInput
								currency={buyCur}
								setValue={setBuyAmount}
								value={buyAmount}
								inputRef={buyRef}
								show={showBuyDrop}
								setShowSellDrop={setShowSellDrop}
								setShowBuyDrop={setShowBuyDrop}
								setCurrency={setBuyCur}
							/>
						</Row>
						<GetStarted>
							<div>
								<Text fontSize="0.9rem">
									You would save vs banks
									<br />
									<Text fontSize="1.1rem">6.32 USD</Text>
								</Text>
								<Text fontSize="0.9rem">
									Should arrive by
									<br />
									<Text fontSize="1.1rem">August 23</Text>
								</Text>
							</div>
							<Button>Get Started</Button>
						</GetStarted>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default Hero;
