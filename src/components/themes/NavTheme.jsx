import React from 'react'
import { elipseBlueBlur } from '../../assets'

//Ce composant c'est le blur au dessus du logo

const NavTheme = () => {
  return (
    <div>
        <img src={elipseBlueBlur} alt="" className='absolute -top-[14rem] -left[9rem] z-0 pointer-events-none mix-blend-color-dodge' />
    </div>
  )
}

export default NavTheme
