import React from 'react'

const Loader = () => {
  return (
    <div className='absolute bg-slate-200/10 inset-0 backdrop-blur-sm flex items-center justify-center'>
      <div className='loader'></div>
    </div>
  )
}

export default Loader