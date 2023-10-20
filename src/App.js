import './App.css';
import Score from './Components/Score/Score';
import Summary from './Components/Summary/Summary';

function App() {

	const categories = [
		{
			"category": "Reaction",
			"score": 80,
			"className" : "bg-red-300/25",
			"icon": "assets/images/icon-reaction.svg"
		},
		{
			"category": "Memory",
			"score": 92,
			"className" : "bg-yellow-200/25",
			"icon": "assets/images/icon-memory.svg"
		},
		{
			"category": "Verbal",
			"score": 61,
			"className" : "bg-green-200/25",
			"icon": "assets/images/icon-verbal.svg"
		},
		{
			"category": "Visual",
			"score": 72,
			"className" : "bg-blue-200/25",
			"icon": "assets/images/icon-visual.svg"
		}
	]

	return (
		<div className="flex">
			<Score score={77} rank={"Great"} percentile={65} />
			<Summary categories={categories} />
		</div>
	);
}

export default App;
