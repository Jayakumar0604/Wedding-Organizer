import React from 'react'
import GTwo from './GTwo'
import Profile from '../../Components/Profile'
import Back from "../../assets/Gallery-1.webp"

const Gallery = () => {
  return (
    <>
      <Profile Back={Back} title="Event Gallery" subtitle="Moments of Joy" />
      <GTwo/>
    </>
  )
}

export default Gallery