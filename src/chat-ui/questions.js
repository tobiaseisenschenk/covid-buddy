export const questions = {
	age: {
		text: {
			de: 'Wie alt sind Sie?',
		},
		possibleAnswers: [
			{
				text: {
					de: 'jünger als 60',
				},
				severity: 0,
				nextQuestionId: 'cough',
			},
			{
				text: {
					de: 'älter als 60',
				},
				severity: 2,
				nextQuestionId: 'cough',
			},
			{
				text: {
					de: 'älter als 70',
				},
				severity: 3,
				nextQuestionId: 'cough',
			},
		],
	},
	cough: {
		text: {
			de: 'Haben Sie Husten?',
		},
		possibleAnswers: [
			{
				text: {
					de: 'Ja, mit Auswurf',
				},
				severity: 3,
				nextQuestionId: 'fever',
			},
			{
				text: {
					de: 'Nein',
				},
				severity: 0,
				nextQuestionId: 'fever',
			},
			{
				text: {
					de: 'Ja, trockenen Husten',
				},
				severity: 2,
				nextQuestionId: 'fever',
			},
		],
	},
	fever: {
		text: {
			de: 'Haben Sie Fieber?',
		},
		possibleAnswers: [
			{
				text: {
					de: 'Nein',
				},
				severity: 0,
				nextQuestionId: 'immuneSuppression',
			},
			{
				text: {
					de: 'Ja, seit einem Tag',
				},
				severity: 1,
				nextQuestionId: 'feverDetails',
			},
			{
				text: {
					de: 'Ja, seit zwei Tagen',
				},
				severity: 2,
				nextQuestionId: 'feverDetails',
			},
			{
				text: {
					de: 'Ja, seit mehr als zwei Tagen',
				},
				severity: 3,
				nextQuestionId: 'feverDetails',
			},
		],
	},
	feverDetails: {
		text: {
			de: 'Wie hoch ist Ihr Fieber?',
		},
		possibleAnswers: [
			{
				text: {
					de: '37.5',
				},
				severity: 1,
				nextQuestionId: 'immuneSuppression',
			},
			{
				text: {
					de: '38',
				},
				severity: 2,
				nextQuestionId: 'immuneSuppression',
			},
			{
				text: {
					de: '39',
				},
				severity: 2,
				nextQuestionId: 'immuneSuppression',
			},
			{
				text: {
					de: '>39',
				},
				severity: 3,
				nextQuestionId: 'immuneSuppression',
			},
		],
	},
	immuneSuppression: {
		text: {
			de: 'Haben Sie Imunsuppression?',
		},
		possibleAnswers: [
			{
				text: {
					de: 'Ja',
				},
				severity: 3,
				nextQuestionId: 'breathing',
			},
			{
				text: {
					de: 'Nein',
				},
				severity: 0,
				nextQuestionId: 'breathing',
			},
		],
	},
	breathing: {
		text: {
			de: 'Haben Sie Atemnot?',
		},
		possibleAnswers: [
			{
				text: {
					de: 'Ja',
				},
				severity: 3,
				nextQuestionId: 'done',
			},
			{
				text: {
					de: 'Nein',
				},
				severity: 0,
				nextQuestionId: 'done',
			},
		],
	},
	done: {
		text: {
			de: 'Ok, jetzt haben wir alle Informationen.',
		},
	},
};
