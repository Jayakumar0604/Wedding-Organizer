import React from 'react'
import GTwo from './GTwo'
import Profile from '../../Components/Profile'
import Back from "../../assets/Gallery-1.webp"

const Gallery = () => {
  return (
    <>
    <Profile Back={Back} />
    <GTwo/>
    </>
  )
}

export default Gallery