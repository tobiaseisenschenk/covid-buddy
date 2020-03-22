import React from 'react';
import './App.css';
import { ChatUI } from './chat-ui/ChatUI';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Covid19 Buddy.</h1>
				<p>A first responder chatbot.</p>
			</header>
			<ChatUI />
		</div>
	);
}

export default App;
