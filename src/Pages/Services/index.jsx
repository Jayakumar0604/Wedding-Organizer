import React from 'react'
import SSecond from './SSecond'
import Profile from '../../Components/Profile'
import Back from "../../assets/services-1.webp"

const Services = () => {
  return (
    <>
      <Profile Back={Back} title="Our Services" subtitle="What We Do" />
      <SSecond/>
    </>
  )
}

export default Services