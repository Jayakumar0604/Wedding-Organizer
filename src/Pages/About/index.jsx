import React from 'react'
import ATwo from './ATwo'
import AThird from './AThird'
import Profile from '../../Components/Profile'
import Back from "../../assets/images/bride-and-groom-image.jpg";

const About = () => {
  return (
    <>
    <Profile Back={Back}/>
    <ATwo/>
    <AThird/>
    </>
  )
}

export default About