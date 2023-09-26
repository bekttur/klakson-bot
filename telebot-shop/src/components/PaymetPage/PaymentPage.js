import React, { useState } from 'react'
import "./PaymentPage.css"
import { Link } from 'react-router-dom'

export const PaymentPage = ({ totalPrice, setTotalPrice, totalCount, setTotalCount, }) => {
    // const [webPageVisible, setWebPageVisible] = useState(true);
    // const closeWebPage = () => {
    //     setWebPageVisible(false);
    // };
    return (
        <div className='paymentPage-container'>
            <div className='order-number-block'>
                <div className='order-number'>
                    <div style={{width: "100%", height: "50px", textAlign: "center"}}>
                        <img src='../images/icons/success.png' width={40} style={{marginTop: 10}} />
                    </div>
                        <h4>Оплата заказа №13473</h4>
                    <p style={{ fontWeight: 600, fontSize: 12 }}>Stratton</p>
                </div>
                <div className='order-number'>
                    <div className='order-number-summary'>
                        <p>Итоговая сумма:</p>
                        <p style={{ fontWeight: 600 }}>{totalPrice} ₸</p>

                    </div>
                </div>
            </div>
            <div className='for-close-btn'>
                <button className='close-btn' onClick={() => { window.location.href = '/'}}>Перейти на главную</button>
            </div>
        </div>
    )
}
