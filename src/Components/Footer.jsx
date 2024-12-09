import React from 'react'
import logo from '../assets/mylogo2.png'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom';
import ShortcutIcon from '@mui/icons-material/Shortcut';

const Footer = () => {

  const clickToTop = () => {
    window.scrollTo(0, 0)
  };

  return (
    <section>
      <div className='footer'>
        <div className='col-6'>
          <h1>Giữ Sức Khỏe.</h1>
          <span className='subs'>Đăng ký để biết thêm chi tiết.</span>
          <form action="https://formspree.io/f/mknaadbv" method="post">
            <input name='Email' id='email' autoComplete='true' type="email" placeholder='Enter your email here' />
            <button type='submit'><ShortcutIcon/></button>
          </form>

          <div className='footer-logo' onClick={clickToTop}>
            <img src={logo} alt="logo" />
            <span>Ăn Lành Mạnh!</span>
            <br />
            <div className='reserve'>
              &copy;2024, Ăn Lành Mạnh!
              <br />
              Toàn Bộ Bản Quyền Thuộc về Ăn Lành Mạnh.
            </div>
          </div>
        </div>

        <div className='col-6'>
          <ul>
            <Link to='/about'>
              <li> Ăn Lành Mạnh! Hoạt Động Như Thế Nào?</li>
            </Link>
            <Link to='/articles'>
              <li>Bài viết</li>
            </Link>
            <Link to='/shop'>
              <li>Menu</li>
            </Link>
            <Link to='/contact'>
              <li>Tương Tác Với Chúng Tôi</li>
            </Link>
          </ul>
          <div className='footer-info'>
            <ul>
              <Link to='/faq'>
                <li>FAQ</li>
              </Link>
            </ul>
            <div className='footer-sm'>
              <SocialMedia />
            </div>
          </div>
        </div>
        <span className='notice'>
        Trang web này chỉ dành cho mục đích học tập.
        </span>
      </div>
    </section>
  )
}

export default Footer
