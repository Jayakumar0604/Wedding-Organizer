import React from 'react'
import GTwo from './GTwo'
import Profile from '../../Components/Profile'
import Back from "../../assets/images/Gallery-1.jpg"

const Gallery = () => {
  return (
    <>
    <Profile Back={Back} />
    <GTwo/>
    </>
  )
}

export default Gallery