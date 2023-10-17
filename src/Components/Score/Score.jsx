function Score({score,rank, percentile}){
	return (
		<div>
			<p>Your result</p>
			<h2>{score} out of 100</h2>
			<p>{rank}</p>
			<p>You scored higher than {percentile} of the people who have taken this test.</p>
		</div>)
}

export default Score;