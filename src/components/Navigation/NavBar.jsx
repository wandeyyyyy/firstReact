import React from 'react'

const NavBar = () => {
    const showName = () =>{
        console.log("Yewande")
    }
  return (
    <React.Fragment>
    <h1>Hello World</h1>
    <button className='btn btn-success' onClick={showName}>Show Name</button>
        </React.Fragment>

  )
}

export default NavBar



