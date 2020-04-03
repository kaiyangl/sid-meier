import { useEffect, useState } from "react"
import getRandomInt from '../../utils/rng';

const AnswerGenerator = () => {
	const [answer, setAnswer] = useState('Calculating');
	const answers = ['Maybe', 'I think so?', 'Go google yourself', '404', 'Duh', 'He\'s lives on in that AI you can\'t defeat', 'Who knows man, who knows', 'Wubba lubba dub d...wait wrong character', 'Possibly', 'Try again tomorrow'];

	let loadingDots;

	useEffect(() => {
		loadingDots = setInterval(() => {
			setAnswer((prevAns) => {
				const dots = prevAns.match(/\.*$/);
				if (dots[0].length === 3) {
					return prevAns.slice(0, -3);
				} else {
					return `${prevAns}.`;
				}
			})
		}, 500);

		setTimeout(() => {
			clearInterval(loadingDots);
			setAnswer(answers[getRandomInt(answers.length)]);
		}, 4000);
	}, [])

	return (
		<h2>{answer}</h2>
	)
}

export default AnswerGenerator;
