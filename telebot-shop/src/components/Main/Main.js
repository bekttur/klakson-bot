import React from 'react';
import './Main.css';
import axios from 'axios';

export const Main = ({ data, products, setProducts, basket, setBasket, counter, setCounter }) => {

  // console.log(products);
  console.log(data);

  const handleIncrement = (index) => {
    setProducts((prevProducts) => {
      const updatedMain = [...prevProducts.main];
      const updatedItem = { ...updatedMain[index] };

      updatedMain[index] = updatedItem;



      data.map((item) => {
        if (item.idproducts == updatedItem.id) {
          if (updatedItem.count < item.quantities) {
            console.log("quantity: ", item.quantities);

            const itemIndex = basket.findIndex((item) => item.id === updatedItem.id);

            if (itemIndex !== -1) {
              const updatedBasket = [...basket];
              updatedBasket[itemIndex] = updatedItem;
              setBasket(updatedBasket);
            } else {
              const updatedBasket = [...basket, updatedItem];
              setBasket(updatedBasket);
            }
            updatedItem.count += 1;



          }
        }
      })




      // Remove the previous counter increment logic
      // Instead, set the counter directly to the sum of counts in the basket
      const totalCountInBasket = basket.reduce((total, item) => total + item.count, 1);
      setCounter(totalCountInBasket);

      return { ...prevProducts, main: updatedMain };
    });
  };

  const handleDecrement = (index) => {
    setProducts((prevProducts) => {
      const updatedMain = [...prevProducts.main];
      const updatedItem = { ...updatedMain[index] };
      updatedItem.count -= 1;

      updatedMain[index] = updatedItem;

      const itemIndex = basket.findIndex((item) => item.id === updatedItem.id);

      if (itemIndex !== -1) {
        const updatedBasket = [...basket];

        if (updatedItem.count === 0) {
          updatedBasket.splice(itemIndex, 1);
        } else {
          updatedBasket[itemIndex] = updatedItem;
        }

        setBasket(updatedBasket);
      } else if (updatedItem.count !== 0) {
        const updatedBasket = [...basket, updatedItem];
        setBasket(updatedBasket);
      }


      // Remove the previous counter decrement logic
      // Instead, set the counter directly to the sum of counts in the basket
      const totalCountInBasket = basket.reduce((total, item) => total + item.count, -1);
      setCounter(totalCountInBasket);

      return { ...prevProducts, main: updatedMain };
    });
  };




  console.log(basket);


  return (
    <div>
      <div className='main-products-block'>
        <div className='main-text-block'>
          <h2>ЁЛОЧКИ</h2>
        </div>
        <div className='product-card-block'>
          {products.main.map((item, index) => {
            return (
              <div className='card' key={index}>
                {/* <span className={`${item.count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}>
                  {item.count}
                </span> */}
                <div className='image__container'>
                  {item.count !== 0 && (
                    <>
                      <div className='second-image-container'>
                        <img style={{ height: "80%" }} src={item.img} alt='Product' />
                        <p><span style={{color: "#a3a1a3"}}>Итого</span> <br/><span style={{fontWeight: 600}}>{item.price * item.count} ₸</span></p>
                      </div>
                    </>
                  ) || (
                      <img src={item.img} alt='Product' />
                    )}
                </div>
                <h4 className='card__title'>
                  {item.title}
                  {/* <span className='card__price'>{item.price} ₸</span> */}
                </h4>
                <div className='btn-container'>
                  {item.count !== 0 && (
                    <>
                      <div className='btn-active'>
                        <button className='btn-remove' onClick={() => handleDecrement(index)}>-</button>
                        <div className='count-active'>
                          <p>{item.count}</p>
                        </div>
                        <button className='btn-add' onClick={() => handleIncrement(index)}>+</button>
                      </div>
                    </>
                  ) || (
                      <div>
                        <button className='btn-price' onClick={() => handleIncrement(index)}>{item.price} ₸</button>
                      </div>
                    )}

                  {/* 2-variant */}
                  {/* {item.count !== 0 && (
                    <button className='btn-remove' onClick={() => handleDecrement(index)}>-</button>
                  )}
                  <button className='btn-add' onClick={() => handleIncrement(index)}>+</button> */}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
