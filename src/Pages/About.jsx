import React, {useState} from 'react'

const About = () => {
  const [color, setColor] = useState("blue");

  
  const changeText = () =>{
    setColor("red")
      }
  return (
    <div>
      <p> i love {color}</p>
       <button onClick={changeText}>change Me!</button>
       
    </div>
  )
}

export default About