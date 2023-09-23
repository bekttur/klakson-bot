import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';
import "./NewApp.css"
import { Main } from '../Main/Main';
import { Jar } from '../Jar/Jar';
import { Link as RouterLink } from 'react-router-dom';
import { Liquid } from '../Liquid/Liquid';
import { DisappearingBlock } from '../DisappearingBlock/DisappearingBlock';
import { Plastic } from '../Plastic/Plastic';
import { Gel } from '../Gel/Gel';
import { Ceramics } from '../Ceramics/Ceramics';
import { Rubber } from '../Rubber/Rubber';
import { Other } from '../Other/Other';


export const NewApp = ({ data, userId, products, setProducts, counter, setCounter, basket, setBasket }) => {

    const [newUserId, setNewUserId] = useState(0)

    useEffect(() => {
        setNewUserId(userId);
        localStorage.setItem('userId', userId);
    }, [userId]);



    const [trees, setTrees] = useState(true)
    const [jar, setJar] = useState(false)
    const [liquid, setLiquid] = useState(false)

    const navFunction = (e) => {
        if (e.target.id == "trees") {
            setTrees(true)
            setJar(false)
            setLiquid(false)
            console.log(trees);
        } else if (e.target.id == "jar") {
            setJar(true)
            setTrees(false)
            setLiquid(false)
        } else if (e.target.id == "liquid") {
            setLiquid(true)
            setTrees(false)
            setJar(false)
        }
    }




    // for Menu
    const menuRef = useRef(null);

    const [active, setActive] = useState("");

    const activeFunc = (e) => {
        console.log(e.target.innerText);
        setActive(e.target.innerText)
    }





    return (
        <div>
            <header>
                <div className="horizontal-menu">
                    <div className="menu-container" ref={menuRef}>
                        <ScrollLink  to="trees1" spy={true} smooth={true} offset={-100} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc}>
                                Ёлочки
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="jar1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc}>
                                В баночке
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="liquid1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc}>
                                Жидкостные
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="plastic1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc}>
                                Клипсы
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="gel1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc} >
                                Гелевый
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="ceramics1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc} >
                                3D
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="rubber1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc} >
                                В дефлектор
                            </div>
                        </ScrollLink >
                        <ScrollLink  to="other1" spy={true} smooth={true} offset={-50} duration={500} className='main-page-link'>
                            <div className={`menu-item`} onClick={activeFunc} >
                                Другие
                            </div>
                        </ScrollLink >
                    </div>
                </div>
            </header>
            {/* <DisappearingBlock /> */}

            <div className='scrollBlock'>
                <br />
                <br />
                <br />
                <div id='trees1'>
                    <Main data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <div id='jar1'>
                    <Jar data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <div id='liquid1'>
                    <Liquid data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <div id='plastic1'>
                    <Plastic data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <div id='gel1'>
                    <Gel data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>

                <br />
                <div id='ceramics1'>
                    <Ceramics data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <div id='rubber1'>
                    <Rubber data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <div id='other1'>
                    <Other data={data} products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} counter={counter} setCounter={setCounter} />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            {counter === 0 ?
                "" :
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <RouterLink to={"/basket"}>
                        <button className='btn-next'>Корзина</button>
                    </RouterLink>
                </div>
            }
        </div>
    );
}
