import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className="flex flex-col items-center mt-40 gap-3">
        <p className='caption-1 text-n-3 uppercase'>{subtitle}</p>
        <h3 className='h2'>{title}</h3>
    </div>
  )
}

export default Title
