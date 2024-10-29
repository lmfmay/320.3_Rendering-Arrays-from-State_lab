
import Score from "./Score"
//Code the <Learner> component so that it:

// Renders the learners's name & bio properties.
// Renders a <Score> component for each score object in the learner's scores property.

function Learner({name,bio,scores}){
    return (
        <section>
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className="scoreContain">
                {scores.map((score,index) => (
                    <Score key={index} date={score.date} score={score.score}/>
                ))}
            </div>
        </section>
        
    )
    
    // learnerData.learners.map((learner) => {
    //     <h1>{learner.name}</h1>
    //     })
}

export default Learner