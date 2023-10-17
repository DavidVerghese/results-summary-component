
function Summary({categories}){
	return (
		<div>
			<h2>Summary</h2>
			{categories.map((category)=>(
				<div>
					<img src={category.icon} />
					{category.category}: {category.score}/100
				</div>
			))}
			<button>Continue</button>
		</div>
	)
}

export default Summary;