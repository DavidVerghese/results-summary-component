function Score({score,rank, percentile}){
	return (
		<div className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 text-white shadow-2xl rounded-2xl flex flex-col items-center p-8 w-60 mr-2">
			<h2 className="font-bold text-slate-300">Your result</h2>
			<h2 className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white rounded-full h-20 w-20 text-center p-4 my-4">{score} out of 100</h2>
      <h2>{rank}</h2>
      <p className="text-slate-300/60">You scored higher than {percentile} of the people who have taken this test.</p>
		</div>)
}

export default Score;

