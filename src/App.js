import './App.css';
import Score from './Components/Score/Score';
import Summary from './Components/Summary/Summary';

function App() {

	const categories = [
		{
			"category": "Reaction",
			"score": 80,
			"backgroundColor" : "bg-red-300/25",
			"textColor": "font-bold text-red-800/70",
			"icon": "assets/images/icon-reaction.svg"
		},
		{
			"category": "Memory",
			"score": 92,
			"backgroundColor" : "bg-yellow-200/25",
			"textColor": "font-bold text-yellow-600/80",
			"icon": "assets/images/icon-memory.svg"
		},
		{
			"category": "Verbal",
			"score": 61,
			"backgroundColor" : "bg-green-200/25",
			"textColor": "font-bold text-green-900/70",
			"icon": "assets/images/icon-verbal.svg"
		},
		{
			"category": "Visual",
			"score": 72,
			"backgroundColor" : "bg-blue-200/25",
			"textColor": "font-bold text-indigo-900/90",
			"icon": "assets/images/icon-visual.svg"
		}
	]

	return (
		<div className="flex justify-center mt-5">
			<div className="flex flex-col sm:flex-row rounded-2xl shadow-2xl">
				<Score score={77} rank={"Great"} percentile={65} />
				<Summary categories={categories} />
			</div>
		</div>
	);
}

export default App;
