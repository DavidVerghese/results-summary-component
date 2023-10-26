
function Summary({categories}){
return (
	<div className="sm:pl-5 pl-3 pr-3 w-full sm:max-w-sm">
		<div className="flex flex-col sm:pt-8">
			<h2 className="font-extrabold text-slate-700 text-xl my-2">Summary</h2>
			<div className="my-4">
				{ categories.map((category, index)=>(
					<div className={`flex justify-between ${category.backgroundColor} p-2 my-3 rounded-lg`} key={index}>
						<div>
							<img className="inline pr-2" src={category.icon} />
							<span className={ category.textColor }>{ category.category }</span>
						</div>
						<div>
							<span className="font-bold text-slate-600">{ category.score }</span><span className="text-slate-600"> / 100</span>
						</div>
					</div>
				))}
			</div>
			<button className="bg-dark-gray-blue hover:bg-background-gradient text-white rounded-full items-center p-2 my-2">Continue</button>
		</div>
	</div>
)
}

export default Summary;