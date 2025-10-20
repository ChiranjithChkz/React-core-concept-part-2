import { use, useState } from "react"

export default function BatsMan() {
    const[runs, setRuns] =  useState(0); //1.state declare

    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const[ball, setBall] = useState(0)

    const handleSingle=()=>{  // 2. add this  things
        const updateRuns = runs + 1;
        setRuns(updateRuns);

          const updateBall = ball + 1;
        setBall(updateBall);

    }

    // const handleBall = ()=>{
    //     const updateBall= sixes+fours+runs+  1;
    //     setBall(updateBall);
    // }

    const handleFours = () => {

          const updateBall = ball + 1;
        setBall(updateBall);
        const updateRuns= runs + 4;
        const updateFours = fours + 1;
        setFours(updateFours);
        setRuns(updateRuns);
    }
    const handleSix= () => {
        const updateBall = ball + 1;
        setBall(updateBall);
        
        const updateRuns = runs + 6;

        const updatedSixes = sixes + 1;

        setSixes(updatedSixes);
        setRuns(updateRuns);
    }

    return (
        <div>
            <h3>Player: Bangladesh</h3>
            <p><small>Six: {sixes}</small></p>
            <p><small>Four: {fours}</small></p>
          {
            runs >= 50 && <p> Your Score is : 50</p>

          } 
              <h1>Score: {runs}</h1>
          {
            ball >= 6 && <p>Your over finish</p>
          }
          <h6>Ball : {ball}</h6>

            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFours}>Four</button>
            <button onClick={handleSix} >Six</button>
        </div>
    )
}