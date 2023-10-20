function Score({score,rank, percentile}){
	return (
		//<div className="bg-gradient-to-r from-indigo-600 to-indigo-500 ...">

		<div className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 text-white shadow-2xl">
			<p>Your result</p>
			<h2 className="bg-indigo-900 text-white">{score} out of 100</h2>
			<p>{rank}</p>
			<p>You scored higher than {percentile} of the people who have taken this test.</p>
		</div>)
}

export default Score;