import React from 'react'

function CustomBtn({text, myClass, myOnClick}) {
  return (
    <button onClick={myOnClick} className={`${myClass} py-[14px] font-semibold px-[24.5px] hover:bg-transparent hover:text-custom-sky transition-all duration-300 ease-linear border border-custom-sky rounded-[72px] bg-custom-sky`}>{text}</button>
  )
}

export default CustomBtn