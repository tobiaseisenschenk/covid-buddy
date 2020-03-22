import React, { useState, useRef } from 'react';
import 'react-chat-elements/dist/main.css';
import './ChatUI.css';
import { MessageBox, Button, Input } from 'react-chat-elements';

export const ChatUI = () => {
	const [messages, setMessages] = useState([]);
	const textInput = useRef(null);

	const submitText = () => {
		console.log('submitted: ', textInput.current.state.value);
		setMessages([...messages, { text: textInput.current.state.value }]);
		textInput.current.clear();
	};

	return (
		<div className="Chat-Box">
			<Messages messages={messages} />
			<Button text={'Clear Messages'} click={() => setMessages([])} />
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

const Messages = (props) => {
	return props.messages.map((message, index) => {
		return (
			<MessageBox
				key={index}
				position={'right'}
				titleColor={'gray'}
				type={'text'}
				text={message.text}
				textColor={'blue'}
				title={'You'}
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
