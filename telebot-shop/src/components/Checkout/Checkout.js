import React, { useEffect, useState } from 'react'
import "./Checkout.css"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookies';
import axios from 'axios';




export const Checkout = ({ data, userId, totalPrice, setTotalPrice, totalCount, setTotalCount, products, setProducts, counter, setCounter, basket, setBasket }) => {

    const [inDelivery, setInDelivery] = useState(true)
    const [inPickup, setInPickup] = useState(false)
    const [inInstitution, setInInstitution] = useState(false)

    const [inOnline, setInOnline] = useState(true)
    const [inCash, setInCash] = useState(false)
    const [inCard, setInCard] = useState(false)

    const [inDeliverySum, setInDeliverySum] = useState(1000)


    useEffect(() => {
        if (inDelivery) {
            setTotalPrice(
                basket.reduce((acc, product) => acc + product.price * product.count, 0) + inDeliverySum
            );
            orderObject.summary.amount_delivery = 1000;

        } else {
            setTotalPrice(basket.reduce((acc, product) => acc + product.price * product.count, 0));
            orderObject.summary.amount_delivery = 0

        }
        setTotalCount(basket.reduce((acc, product) => acc + product.count, 0));
    }, [basket, inDelivery, inDeliverySum]);


    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")
    const [deliveryMethod, setDeliveryMethod] = useState("Доставка")

    const [orderObject, setOrderObject] = useState({
        "telegram_id": userId,
        "phone_number": "",
        "address_delivery": "",
        "comment": "",
        "delivery_method": "",
        "products": basket,
        "summary": {
            "amount_products": 0,
            "amount_delivery": 0,
            "total_amount": 0
        }
    });

    // 

    console.log(orderObject);
    console.log(basket);



    const wayReceivingFunction = (e) => {
        if (e.target.id == "delivery") {
            setInDelivery(true)
            setInPickup(false)
            setInInstitution(false)
            setDeliveryMethod("Доставка")
        } else if (e.target.id == "pickup") {
            setInDelivery(false)
            setInPickup(true)
            setInInstitution(false)
            setDeliveryMethod("Самовывоз")
        } else if (e.target.id == "institution") {
            setInDelivery(false)
            setInPickup(false)
            setInInstitution(true)
            setDeliveryMethod("В заведении")
        }
    }
    orderObject.delivery_method = deliveryMethod;



    const wayPaymentFunction = (e) => {
        if (e.target.id == "online") {
            setInOnline(true)
            setInCash(false)
            setInCard(false)
        } else if (e.target.id == "cash") {
            setInOnline(false)
            setInCash(true)
            setInCard(false)
        } else if (e.target.id == "card") {
            setInOnline(false)
            setInCash(false)
            setInCard(true)
        }
    }

    const [amountProducts, setAmountProducts] = useState(0)

    useEffect(() => {
        setAmountProducts(
            basket.reduce((acc, product) => acc + product.price * product.count, 0)
        );

    }, [basket]);

    orderObject.summary.amount_products = amountProducts;
    orderObject.summary.total_amount = totalPrice;
    console.log(amountProducts);


    /////////////////////////////////////////////////////////////////////////////////////////////////////

    const funcPhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    orderObject.phone_number = phoneNumber

    const funcAddress = (e) => {
        setAddress(e.target.value)
    }
    orderObject.address_delivery = address


    const funcComment = (e) => {
        setComment(e.target.value)
    }
    orderObject.comment = comment




    const click = (e) => {
        let residualQuantity = 0;


        data.map((item) => {
            basket.map((product) => {
                if (item.idproducts == product.id) {
                    residualQuantity = item.quantities - product.count;

                    axios.post('https://klakson.strattonit.ru/api/api/update-data', { id: product.id, residualQuantity: residualQuantity })
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            })
        })

        console.log(residualQuantity);





        fetch('http://193.162.143.130:8000/save_order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                orderObject
            )
        }
        )
            .then(response => response.json())
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////




    return (
        <div className='checkout-container'>
            {/* <div className='back-block'>
                <Link to={"/basket"}>
                    <p>Назад</p>
                </Link>
            </div> */}
            <div className='ways-block'>
                <div className='ways-item'>
                    <p className='ways-text'>Способ получения заказа</p>
                    <div style={{ width: "100%", backgroundColor: "#f4f4f5", borderRadius: 15 }}>
                        <div className='ways-flex'>
                            <input onChange={wayReceivingFunction} className='ways-input' name="ways" type='radio' id="delivery" />
                            <label className='ways-label' htmlFor='delivery'>
                                <div className={`ways ${inDelivery ? "active1" : ""}`}>
                                    <p>Доставка</p>
                                    {inDelivery ?
                                        <p>1000 ₸</p>
                                        :
                                        ""
                                    }
                                </div>
                            </label>
                        </div>
                        <div className='ways-flex'>
                            <input onChange={wayReceivingFunction} className='ways-input' name="ways" type='radio' id="pickup" />
                            <label className='ways-label' htmlFor='pickup'>
                                <div className={`ways ${inPickup ? "active1" : ""}`}>
                                    <p>Самовывоз</p>
                                </div>
                            </label>
                        </div>
                        {/* <div className='ways-flex'>
                            <input onChange={wayReceivingFunction} className='ways-input' name="ways" type='radio' id="institution" />
                            <label className='ways-label' htmlFor='institution'>
                                <div className={`ways ${inInstitution ? "active1" : ""}`}>
                                    <p>В заведении</p>
                                </div>
                            </label>
                        </div> */}
                    </div>
                </div>
            </div>


            {/* <div className='ways-block'>
                <div className='ways-item'>
                    <p className='ways-text'>Способ оплаты</p>
                    <div style={{ width: "100%", backgroundColor: "#f4f4f5", borderRadius: 15 }}>
                        <div className='ways-flex'>
                            <input onChange={wayPaymentFunction} className='ways-input' name="ways" type='radio' id="online" />
                            <label className='ways-label' htmlFor='online'>
                                <div className={`ways ${inOnline ? "active1" : ""}`}>
                                    <p>Онлайн</p>
                                </div>
                            </label>
                        </div>
                        <div className='ways-flex'>
                            <input onChange={wayPaymentFunction} className='ways-input' name="ways" type='radio' id="cash" />
                            <label className='ways-label' htmlFor='cash'>
                                <div className={`ways ${inCash ? "active1" : ""}`}>
                                    <p>Наличные</p>
                                </div>
                            </label>
                        </div>
                        <div className='ways-flex'>
                            <input onChange={wayPaymentFunction} className='ways-input' name="ways" type='radio' id="card" />
                            <label className='ways-label' htmlFor='card'>
                                <div className={`ways ${inCard ? "active1" : ""}`}>
                                    <p>Картой</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className='ways-block'>
                <div className='ways-item'>
                    <p className='ways-text'>Информация</p>
                    <div className='ways-flex'>
                        <input className='ways-text-input' type='text' placeholder='Номер телефона' onChange={(e) => funcPhoneNumber(e)} />
                    </div>
                    <div className='ways-flex'>
                        <input className='ways-text-input' type='text' placeholder='Адрес доставки' onChange={(e) => funcAddress(e)} />
                    </div>
                    <div className='ways-flex'>
                        <input className='ways-text-input' type='text' placeholder='Ваш комментарий' onChange={(e) => funcComment(e)} />
                    </div>
                </div>
            </div> */}


            <div className='ways-block'>
                <div className='ways-item'>
                    <p className='ways-text'>Сводка</p>
                    <div style={{ width: "100%" }}>
                        <div className='ways-summary'>
                            <p>Товаров</p>
                            <p style={{ color: "cornflowerblue", fontWeight: 600 }}>{totalCount} штук</p>
                        </div>
                        <div className='ways-summary'>
                            <p>Сумма</p>
                            {inDelivery ?
                                <p style={{ color: "cornflowerblue", fontWeight: 600 }}>{totalPrice - 1000} ₸</p>
                                :
                                <p style={{ color: "cornflowerblue", fontWeight: 600 }}>{totalPrice} ₸</p>
                            }
                            {/* <p style={{ color: "cornflowerblue", fontWeight: 600 }}>{totalPrice -1000} ₸</p> */}

                        </div>
                        {inDelivery ?
                            <div className='ways-summary'>
                                <p>Доставка</p>
                                <p style={{ color: "cornflowerblue", fontWeight: 600 }}>1000 ₸</p>
                            </div>
                            :
                            ""
                        }

                        <div className='ways-summary'>
                            <p>Итого</p>
                            <p style={{ color: "cornflowerblue", fontWeight: 600 }}>{totalPrice} ₸</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <Link to={"/basket"}>
                    <button className='btn-back'>&#8592;</button>
                </Link>
                <Link to={"/payment"}>
                    <button className='btn-next-1' onClick={click}>Продолжить</button>
                </Link>
            </div>
        </div>
    )
}



