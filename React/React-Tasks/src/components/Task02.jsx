import { useState } from "react"

const Task02 = () => {
    const [plantWidth , setPlantWidth] = useState(300);
   
  return (
    <div className="container">
        <h2 className="heading "> Task 2  </h2>
        <div className="center">
            <img onMouseOver={()=> setPlantWidth(380)} onMouseLeave={()=> setPlantWidth(300)} className="plant-img" style={{width:`${plantWidth}px`}} src="/plant-img.png" alt="" />
        </div>
    </div>
  )
}

export default Task02