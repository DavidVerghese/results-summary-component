import './App.css';
import Score from './Components/Score/Score';
import Summary from './Components/Summary/Summary';
import { useEffect, useState } from 'react';

function App() {

  const [categoriesData, setCategoriesData] = useState([]);

  const getData=()=>{
    fetch('data.json',
      {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setCategoriesData(myJson)
    });
  }

  useEffect(()=>{
    getData()
  }, []);

  return (
    <div className="flex justify-center sm:mt-5">
      <div className="bg-white flex flex-col sm:flex-row sm:rounded-2xl shadow-2xl max-sm:w-full">
        <Score score={ 76 } rank={ "Great" } percentile={ 65 } />
        <Summary categoriesData={ categoriesData } />
      </div>
    </div>
  );
}

export default App;