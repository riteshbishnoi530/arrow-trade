import React from 'react'

function Heading({title, myClass}) {
  return (
    <h2 className={`${myClass} text-white text-5xl`}>{title} <span className='text-custom-sky font-semibold'>{spanTitle}</span></h2>
  )
}

export default Heading