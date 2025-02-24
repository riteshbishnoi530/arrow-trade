import React from 'react'

function Description({pera, myClass}) {
  return (
    <p className={`${myClass} text-white opacity-80`}>{pera}</p>
  )
}

export default Description