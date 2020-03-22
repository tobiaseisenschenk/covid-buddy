import React, { useState, useRef } from 'react';
import 'react-chat-elements/dist/main.css';
import './ChatUI.css';
import { MessageBox, Button, Input } from 'react-chat-elements';
import { questions } from './questions';

export const ChatUI = () => {
	const [currentQuestion, setCurrentQuestion] = useState(questions.age);
	const [overallSeverity, setOverallSeverity] = useState(0);
	const [messages, setMessages] = useState([
		{ text: currentQuestion.text.de, position: 'left' },
	]);
	const textInput = useRef(null);

	const submitText = () => {
		setMessages([...messages, { text: textInput.current.state.value }]);
		textInput.current.clear();
	};

	return (
		<div className="Chat-Box">
			<Messages messages={messages} />
			<AnswerButtons
				currentQuestion={currentQuestion}
				onAnswerGiven={(answer) => {
					const newSymptomSeverity =
						overallSeverity + answer.severity;
					if (newSymptomSeverity >= 5) {
						setMessages([
							...messages,
							{ text: answer.text.de, position: 'right' },
							{
								text: 'Sie haben ernst zu nehmende Symptome.',
								position: 'left',
							},
							{
								text:
									'Bitte suchen Sie umgehend einen Arzt auf.',
								position: 'left',
							},
						]);
						setCurrentQuestion(questions['done']);
					} else {
						setMessages([
							...messages,
							{ text: answer.text.de, position: 'right' },
							{
								text: questions[answer.nextQuestionId].text.de,
								position: 'left',
							},
						]);
						setCurrentQuestion(questions[answer.nextQuestionId]);
						setOverallSeverity(newSymptomSeverity);
					}
				}}
			/>
			<Input
				ref={textInput}
				className="ChatUI-input"
				placeholder="Type here..."
				multiline={false}
				onKeyUp={(event) => {
					// This filters for pressing the enter-key
					if (event.keyCode === 13) {
						submitText();
					}
				}}
				rightButtons={
					<Button
						color="white"
						backgroundColor="black"
						text="Send"
						onClick={() => submitText()}
					/>
				}
			/>
		</div>
	);
};

const AnswerButtons = (props) => {
	const showAnswerButtons =
		props.currentQuestion && props.currentQuestion.possibleAnswers;
	return (
		<div style={{ display: 'flex' }}>
			{showAnswerButtons
				? props.currentQuestion.possibleAnswers.map((answer, index) => {
						return (
							<Button
								key={index}
								text={answer.text.de}
								onClick={() => {
									console.log('answered', answer);
									props.onAnswerGiven(answer);
								}}
							/>
						);
				  })
				: null}
		</div>
	);
};

const Messages = (props) => {
	return props.messages.map((message, index) => {
		return (
			<MessageBox
				key={index}
				position={message.position || 'right'}
				titleColor={'gray'}
				type={'text'}
				text={message.text}
				textColor={'blue'}
				title={message.position === 'right' ? 'You' : 'Covid-Buddy'}
				data={{
					uri: 'https://facebook.github.io/react/img/logo.svg',
					status: {
						click: false,
						loading: 0,
					},
				}}
			/>
		);
	});
};
