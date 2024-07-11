import React from 'react'

const Write = () => {
  return (
    <div className='add'>
      <div className='content'>
        <input type="text" placeholder='Title' />
        <textarea placeholder='Tell your story...'></textarea>
      </div>
      <div className='publish'>
        Publish
      </div>
      <div className='publish'>
        Preview
      </div>
      <div className='menu'>
        <div className='item1'>i1</div>
        <div className='item2'>i2</div>
      </div>
    </div>
  )
}

export default Write