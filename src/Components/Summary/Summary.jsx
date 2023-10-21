
function Summary({categories}){
	return (
		<div class="shadow-2xl rounded-2xl flex flex-col p-8">
      <h2 className="font-bold text-slate-700">Summary</h2>
      <div className="my-4">
          {categories.map((category, index)=>(
            <div className={category.backgroundColor } key={index}>
              <img className="inline" src={category.icon} />
              <span className={category.textColor}>{category.category}</span>: <span className="font-bold text-slate-600">{category.score}</span><span className="text-gray-700"> / 00</span>
            </div>
          ))}
      </div>
			<button className="bg-gray-700 text-white rounded-lg items-center p-1">Continue</button>
		</div>
	)
}

export default Summary;