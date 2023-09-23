import React from 'react'
import "./Basket.css"
import { Link } from 'react-router-dom'


export const Basket = ({ basket }) => {


    

    return (
        <div className='basket-container'>
            {/* <div className='back-block'>
                <Link to={"/"}>
                    <p>Назад</p>
                </Link>
            </div> */}
            <div className='basket-card-block'>
                {basket.map((item, index) => {
                    return (
                        <div key={index} className='basket-card'>
                            <div className='basket-img-block'>
                                <img className='basket-img' src={item.img} />
                            </div>
                            <div className='basket-text-block'>
                                <p>{item.title}</p>
                                <p>Количество: <b>{item.count}</b></p>
                                
                            </div>
                            <div className='basket-price'>
                                <p style={{ fontWeight: 600 }}>{item.price * item.count} ₸</p>
                            </div>
                        </div>
                    )
                })}

                {basket.length === 0 ?
                    <div className='null-basket-block'>
                        <div>
                            <h3>В корзине пока пусто</h3>
                            <p style={{ fontSize: 14 }}>Загляните на главную, чтобы выбрать товары</p>
                        </div>
                        <Link to={"/"}>
                            <button className='btn-main'>Перейти на главную</button>
                        </Link>
                    </div>
                    :
                    ""
                }
            </div>

            {basket.length !== 0 ?
                <div>
                    <Link to={"/"}>
                        <button className='btn-back'>&#8592;</button>
                    </Link>
                    <Link to={"/confirmation"}>
                        <button className='btn-next-1'>Оформить заказ</button>
                    </Link>
                </div>
                :
                ""
            }

        </div>
    )
}