import './App.css';
import Score from './Components/Score/Score';
import Summary from './Components/Summary/Summary';

function App() {

	const categories = [
		{
			"category": "Reaction",
			"score": 80,
			"backgroundColor" : "bg-red-300/20",
			"textColor": "text-light-red",
			"icon": "assets/images/icon-reaction.svg"
		},
		{
			"category": "Memory",
			"score": 92,
			"backgroundColor" : "bg-yellow-200/20",
			"textColor": "text-orangey-yellow",
			"icon": "assets/images/icon-memory.svg"
		},
		{
			"category": "Verbal",
			"score": 61,
			"backgroundColor" : "bg-green-200/25",
			"textColor": "text-green-teal",
			"icon": "assets/images/icon-verbal.svg"
		},
		{
			"category": "Visual",
			"score": 72,
			"backgroundColor" : "bg-pale-blue",
			"textColor": "text-cobalt-blue",
			"icon": "assets/images/icon-visual.svg"
		}
	]

	return (
		<div className="flex justify-center sm:mt-5">
			<div className="bg-white flex flex-col sm:flex-row sm:rounded-2xl shadow-2xl max-sm:w-full">
				<Score score={76} rank={"Great"} percentile={65} />
				<Summary categories={categories} />
			</div>
		</div>
	);
}

export default App;
