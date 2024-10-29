import { useState } from 'react'
import './App.css'
import { learnersArray } from './utilities/data.mjs'
import Learner from './components/Learner'

function App() {
  const [learnerData, setLearnerData] = useState(learnersArray)

  return (
    <main>
      {learnerData.learners.map((learner) => (
        <Learner key={learner.name} name={learner.name} bio={learner.bio} scores={learner.scores} />
      ))}
    </main>
  )
}

export default App
