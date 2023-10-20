
function Summary({categories}){
	return (
		<div class="border-solid border-2 border-sky-500">
			<h2>Summary</h2>
			{categories.map((category, index)=>(
				<div className={category.className } key={index}>
					<img src={category.icon} />
					{category.category}: {category.score}/100
				</div>
			))}
			<button className="bg-gray-700 text-white">Continue</button>
		</div>
	)
}

export default Summary;