import React, { useState } from 'react'

const Toogle = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button className='btn' onClick={() => setShow(!show)}>
        shoW_BTN
      </button>

      {show && <Item />}
    </div>
  )
}

const Item = () => {
  return (
    <div>
      <h1>https://api.github.com/users</h1>
    </div>
  )
}

export default Toogle
