import React from 'react'
import { grid } from '../../assets'

const HeroTheme = () => {
  return (
    <img src={grid} alt="" className="hidden lg:block absolute -top-[1.125rem] left-0 z-0 w-full h-full object-contain object-top pointer-events-none opacity-50" />
  )
}

export default HeroTheme
