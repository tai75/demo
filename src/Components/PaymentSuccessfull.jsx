import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AppContext } from './Context'
import success from '../assets/undraw_order_confirmed_re_g0if.svg'

const PaymentSuccess = () => {

    const { user, emptyCart } = useContext(AppContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const ref = searchParams.get('reference')


    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
            emptyCart();
        }, 5000);
    }, [])



    return (
        <section className='pytm-success'>
            <div>
                <img src={success} alt="success" />
                <div className='pytm-details'>
                    <h1>Đơn hàng của bạn đã được đặt thành công.</h1>
                    <span>ID đơn hàng: {ref}</span>
                </div>
            </div>
        </section>
    )
}

export default PaymentSuccess
