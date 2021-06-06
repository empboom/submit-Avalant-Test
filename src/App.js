import logo from './logo.svg';
import './App.css';
import { Card, Button, Container, Row, Col, Form, Image, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import creditCard from './image/7.jpeg';
import chip from './image/chip.png';
import visa from './image/visa.png';

function App() {
	const [currentYear, setCurrentYaer] = useState([]);
	const [cardNumber, setCardNumber] = useState('');
	const [count, setCount] = useState(0);
	const [showMonth, setShowMonth] = useState('MM');
	const [showYaer, setShowYear] = useState('YY');
	const [isFlipped, setIsFlipped] = useState(false);
	//const [validated, setValidated] = useState(false);
	const [cvv, setCvv] = useState('');
	const [show, setShow] = useState(false);

	const [showNumber, setShowNumber] = useState([
		'#',
		'#',
		'#',
		'#',
		' ',
		' ',
		'#',
		'#',
		'#',
		'#',
		' ',
		' ',
		'#',
		'#',
		'#',
		'#',
		' ',
		' ',
		'#',
		'#',
		'#',
		'#',
	]);
	//console.log(showNumber.length);
	const [cardName, setCardName] = useState('AD SOYAD');
	let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	const getYear = () => {
		let year = new Date().getFullYear();
		//console.log(year);
		year = year - 1;
		var newYaer = [];
		//console.log(year);
		for (var i = 0; i < 10; i++) {
			year = year + 1;
			//console.log(year);
			newYaer.push(year);
			//console.log(newYaer);
		}
		setCurrentYaer(newYaer);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		handleShow();
		// const form = event.currentTarget;
		// if (form.checkValidity() === false) {
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// }
		//console.log(form.checkValidity());
		console.log(555);
		//setValidated(true);
	};
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const showCvv = (e) => {
		const re = /^[0-9\b]+$/;

		// if value is not blank, then test the regex

		if (e.target.value === '' || re.test(e.target.value)) {
			setCvv(e.target.value);
		}
	};

	const showMonthEX = (e) => {
		setIsFlipped(false);
		if (e.target.value === 'Month') {
			return setShowMonth('MM');
		}
		setShowMonth(e.target.value);
		console.log(e.target.value);
	};

	const showYearEX = (e) => {
		setIsFlipped(false);
		if (e.target.value === 'Year') {
			return setShowYear('YY');
		}
		let YY = e.target.value.slice(-2);
		setShowYear(YY);
		console.log(e.target.value);
	};

	const onChange = (e) => {
		setIsFlipped(false);
		var val = e.target.value;
		const valArray = val.split(' ').join('').split('');
		var valSpace = val.split('');

		if (valSpace[valSpace.length - 1] == ' ') {
			var valSpaceN = valSpace.slice(0, -2);
			val = valSpaceN.join('');
			setCardNumber(val);
			return;
		}

		if (isNaN(valArray.join(''))) return;
		if (valArray.length === 17) return;
		if (valArray.length % 4 === 0 && valArray.length <= 15) {
			setCardNumber(e.target.value + '  ');
		} else {
			setCardNumber(e.target.value);
		}

		const arrayShow = [...showNumber];
		if (val.length !== 0) {
			arrayShow[val.length - 1] = e.target.value.slice(e.target.value.length - 1);
		}
		setCount(valSpace.length - 1);
		setShowNumber(arrayShow);
		console.log(arrayShow);
		//console.log(count);
		//console.log(val.length);
	};
	const keyDown = (e) => {
		setIsFlipped(false);
		var val = e.target.value;
		var valSpace = val.split('');
		console.log(e.target.value);
		if (e.target.value === '') {
			return setShowNumber([
				'#',
				'#',
				'#',
				'#',
				' ',
				' ',
				'#',
				'#',
				'#',
				'#',
				' ',
				' ',
				'#',
				'#',
				'#',
				'#',
				' ',
				' ',
				'#',
				'#',
				'#',
				'#',
			]);
			console.log(555);
		}

		if (e.keyCode === 8 && e.target.value.slice(-1) === ' ') {
			const arrayShow = [...showNumber];
			arrayShow[val.length - 3] = '#';
			return setShowNumber(arrayShow);

			console.log(val.length - 1);
		}

		if (e.keyCode === 8) {
			const arrayShow = [...showNumber];
			arrayShow[val.length - 1] = '#';
			setShowNumber(arrayShow);
		}
		console.log(val.length - 1);
	};

	//console.log(cardNumber);
	const changeName = (e) => {
		setIsFlipped(false);
		console.log(e.target.value);
		setCardName(e.target.value);
	};

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	const refreshPage = () => {
		window.location.reload();
	};

	useEffect(() => {
		if (cardName === '') {
			setCardName('AD SOYAD');
		}
	}, [cardName]);
	//console.log(currentYear);
	useEffect(() => {
		getYear();
	}, []);

	return (
		<div style={{ backgroundColor: '#60B8DE', minHeight: '100vh', display: 'flex' }}>
			<Container>
				<Row style={{ marginTop: 100, justifyContent: 'center' }}>
					<div style={{ zIndex: 15 }}>
						<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
							<div className='container1' style={{ textAlign: 'center', marginBottom: -130 }}>
								<div>
									<Image src={creditCard} style={{ borderRadius: 10, width: '50%' }} />
								</div>
								<Row>
									<div>
										<Image
											src={chip}
											style={{ width: '50%', marginTop: '-400%', marginLeft: '195%' }}
										/>
									</div>
									<div>
										<Image
											src={visa}
											style={{ width: '30%', marginTop: '-200%', marginRight: '-270%' }}
										/>
									</div>
								</Row>
								<div className='centered' style={{ fontSize: 20 }}>
									{showNumber}
								</div>
								<p className='bottom-left2' style={{ fontSize: 13 }}>
									Card Holder
								</p>
								<div className='bottom-left'>
									<p style={{ fontSize: 15 }}>{cardName}</p>
								</div>
								<div className='bottom-right2' style={{ fontSize: 13 }}>
									Expires
								</div>
								<div className='bottom-right' style={{ fontSize: 15 }}>
									{showMonth}/{showYaer}
								</div>
							</div>

							<div className='container1' style={{ textAlign: 'center', marginBottom: -130 }}>
								<div>
									<Image src={creditCard} style={{ borderRadius: 10, width: '50%' }} />
								</div>
								<Row>
									<div>
										<Image
											src={visa}
											style={{ width: '30%', marginTop: '-50%', marginRight: '-380%' }}
										/>
									</div>
									<Col md={12}>
										<Row style={{ justifyContent: 'center' }}>
											<div
												style={{
													width: '43%',
													height: 40,
													backgroundColor: 'black',
													justifyContent: 'center',
													textAlign: 'center',
													marginTop: '-30%',
													borderRadius: 10,
												}}
											></div>
										</Row>
										<Row style={{ justifyContent: 'center' }}>
											<div
												style={{
													width: '43%',
													height: 40,
													backgroundColor: 'white',
													justifyContent: 'center',
													textAlign: 'center',
													marginTop: '-20%',
													borderRadius: 10,
												}}
											>
												<p
													style={{
														color: 'black',
														textAlign: 'right',
														marginTop: 10,
														marginRight: 10,
													}}
												>
													{cvv}
												</p>
											</div>
										</Row>
									</Col>
								</Row>
							</div>
						</ReactCardFlip>
					</div>
					<Card style={{ width: '30rem' }}>
						<Card.Body>
							<Form style={{ marginTop: 100 }} onSubmit={handleSubmit}>
								<Row>
									<Col md={12}>
										<Form.Group controlId='cardNumber'>
											<Form.Label>Card Number</Form.Label>
											<Form.Control
												type='text'
												required
												onChange={(e) => onChange(e)}
												onKeyDown={(e) => keyDown(e)}
												value={cardNumber}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col md={12} xs={12}>
										<Form.Group controlId='cardName'>
											<Form.Label>Card Name</Form.Label>
											<Form.Control
												type='text'
												required
												onChange={(e) => changeName(e)}
												maxLength={20}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col md={8} xs={12}>
										<Form.Row>
											<Form.Group as={Col}>
												<Form.Label>Expiration Date</Form.Label>
												<Form.Control
													as='select'
													defaultValue='Month'
													onChange={(e) => showMonthEX(e)}
													noValidate
												>
													<option>Month</option>
													{month.map((item, index) => (
														<option key={index} value={item}>
															{item}
														</option>
													))}
												</Form.Control>
											</Form.Group>

											<Form.Group as={Col}>
												<Form.Label>&nbsp;</Form.Label>
												<Form.Control
													as='select'
													defaultValue='Year'
													onChange={(e) => showYearEX(e)}
												>
													<option>Year</option>
													{currentYear.map((item, index) => (
														<option key={index} value={item}>
															{item}
														</option>
													))}
												</Form.Control>
											</Form.Group>
										</Form.Row>
									</Col>

									<Col md={4} xs={12}>
										<Row>
											<Col md={12} xs={12}>
												<Form.Group>
													<Form.Label>CVV</Form.Label>
													<Form.Control
														required
														onClick={handleClick}
														onChange={(e) => showCvv(e)}
														maxLength={4}
														type='text'
														pattern='[0-9]*'
														value={cvv}
													/>
												</Form.Group>
											</Col>
										</Row>
									</Col>
								</Row>

								<Button variant='primary' type='submit' block>
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Row>
				<Modal show={show} onHide={handleClose} backdrop='static' keyboard={false} animation={false}>
					<Modal.Header closeButton>
						<Modal.Title>Thank you for submit</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>your card number is {cardNumber}</p>
						<p>your card name is {cardName}</p>
						<p>
							your expiration is {showMonth}/{showYaer}
						</p>
						<p>your cvv is {cvv}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={refreshPage}>
							Confirm
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</div>
	);
}

export default App;
