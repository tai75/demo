import React, { useContext } from 'react'
import { AppContext } from './Context'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from 'react-router-dom';

const CartTotal = () => {

  const { total_amount, total_items, loginWithRedirect, user, logout } = useContext(AppContext);

  return (
    <article className='cart-bill'>
      <p>Hóa Đơn</p>
      <h4>Tổng Số Sản Phẩm: {total_items}</h4>
      <h3>Tổng Hóa Đơn: &#8377; {total_amount}</h3>

      {user ?
        <div className='btn-logout'>
          <Link to='/checkout'>
            <button className='btn-checkout btn-pymnt'>Kiểm Tra</button>
          </Link>
          <PersonRemoveIcon className='btn-logout-icon' onClick={() => logout({ returnTo: window.location.origin })} />
        </div> :
        <button className='btn-checkout btn-login' onClick={loginWithRedirect}> < PersonAddIcon /></button>

      }


    </article>
  )
}

export default CartTotal
