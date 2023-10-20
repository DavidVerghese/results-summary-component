
function Summary({categories}){
	return (
		<div class="border-solid border-2 border-sky-500 shadow-2xl">
			<h2 className="font-bold text-slate-700">Summary</h2>
			{categories.map((category, index)=>(
				<div className={category.backgroundColor } key={index}>
					<img src={category.icon} />
					<span className={category.textColor}>{category.category}</span>: <span className="font-bold text-slate-600">{category.score}</span><span className="text-gray-700"> / 00</span>
				</div>
			))}
			<button className="bg-gray-700 text-white">Continue</button>
		</div>
	)
}

export default Summary;