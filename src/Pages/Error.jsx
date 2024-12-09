import React from 'react'
import err from '../assets/undraw_page_not_found_re_e9o6.svg'

const Error = () => {
  return (
    <section className='error-page'>
      <img src={err} alt="err" />
      <h1>Trang bạn yêu cầu không tìm thấy</h1>
    </section>
  )
}

export default Error
