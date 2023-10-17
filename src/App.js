import './App.css';
import Score from './Components/Score/Score';
import Summary from './Components/Summary/Summary';

function App() {

	const categories = [
		{
			"category": "Reaction",
			"score": 80,
			"icon": "assets/images/icon-reaction.svg"
		},
		{
			"category": "Memory",
			"score": 92,
			"icon": "assets/images/icon-memory.svg"
		},
		{
			"category": "Verbal",
			"score": 61,
			"icon": "assets/images/icon-verbal.svg"
		},
		{
			"category": "Visual",
			"score": 72,
			"icon": "assets/images/icon-visual.svg"
		}
	]

	return (
		<div>
			<Score score={76} rank={"Great"} percentile={65} />
			<Summary categories={categories} />
		</div>
	);
}

export default App;
