import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)

  useEffect(()=>{
    issue(page)
  },[page])

  const issue = (pageNumberHere)=>{
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`)
    .then(res=>res.json())
   .then(data=>{
    const issue = data.map(issuename=>issuename.title)
    setData(issue)
   })
  }

  console.log(page)
  
  const next=()=>{
    setPage(page +1)
  }
  const previous=()=>{
    if(page===1) return;
    setPage(page-1)
  }

  return (
    <div>
     <ul>
      {
        data.map((index,key)=>{
          return <li key={key}>{index}</li>
        })
      }
     </ul>
     <button className='btn' onClick={previous}>Previous</button>
     <button className='btn' onClick={next}>Next</button>
    </div>
  );
}

export default App;
