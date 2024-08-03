import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './index.css'


function App() {
  // const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
console.log("puppies: ", puppies)
const [featPupId, setFeatPupId] = useState(null)
const featuredPup = puppies.find((pup) => pup.id === featPupId)
console.log(featuredPup)
return (
    <div className="App">
  { 
    puppies.map((puppy) => {
     return (
     <p className='logo' onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
     );
    })}
    { featPupId && (
    <div>
      <h2 className='card'>{featuredPup.name}</h2>
      <ul>
        <li className='read-the-docs'>Age: {featuredPup.age}</li>
        <li className='read-the-docs'>Email: {featuredPup.email}</li>
        <li className='read-the-docs'>Owner Id: {featuredPup.ownerId}</li>
      </ul>
    </div>)}
    </div>
  )
}


export default App
