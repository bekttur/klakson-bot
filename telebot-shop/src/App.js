import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Basket } from './components/Basket/Basket';
import { NewApp } from './components/NewApp/NewApp';
import { Checkout } from './components/Checkout/Checkout';
import { PaymentPage } from './components/PaymetPage/PaymentPage';
import axios from 'axios';



function App() {

  const [products, setProducts] = useState({
    main: [
      { title: 'Ёлочка "Дикая Роза" (Rose Thorn)', img: "../../images/roza.png", price: 720, count: 0, id: 1 },
      { title: 'Ёлочка "Драгонфрут" (Dragon Fruit)', img: "../../images/dragon.png", price: 720, count: 0, id: 2 },
      { title: 'Ёлочка "Золото" (Gold)', img: "../../images/gold.png", price: 720, count: 0, id: 3 },
      { title: 'Ёлочка "Сочный Цитрус" (Sliced)', img: "../../images/Sliced.png", price: 720, count: 0, id: 4 },
      { title: 'Ёлочка "Звездопад" (Supernova)', img: "../../images/supernova.png", price: 720, count: 0, id: 5 },
      { title: 'Ёлочка "Прибрежный бриз" (Bayside Breeze)', img: "../../images/bayside.png", price: 720, count: 0, id: 7 },
      { title: 'Ёлочка "Черный лёд" (Black Ice)', img: "../../images/blackIce.png", price: 720, count: 0, id: 8 },
      { title: 'Ёлочка "Кокос" (Coconut)', img: "../../images/cocount.png", price: 720, count: 0, id: 9 },
      { title: 'Ёлочка "Сладкая вата" (Cotton Candy)', img: "../../images/candy.png", price: 720, count: 0, id: 10 },
      { title: 'Ёлочка "Зелёное яблоко" (Green Apple)', img: "../../images/greenApple.png", price: 720, count: 0, id: 11 },
      { title: 'Ёлочка "Жасмин" (Jasmin)', img: "../../images/jasmin.png", price: 720, count: 0, id: 12 },
      { title: 'Ёлочка "Лаванда" (Lavender)', img: "../../images/lavender.png", price: 720, count: 0, id: 13 },
      { title: 'Ёлочка "Кожа" (Leather)', img: "../../images/Leather.jpg", price: 720, count: 0, id: 14 },
      { title: 'Ёлочка "Новая машина" (New Car Scent)', img: "../../images/newcar.png", price: 720, count: 0, id: 15 },
      { title: 'Ёлочка "Не курить!" (No Smoking)', img: "../../images/noSmoking.png", price: 720, count: 0, id: 16 },
      { title: 'Ёлочка "Персик" (Peachy Peach)', img: "../../images/peach.png", price: 720, count: 0, id: 17 },
      { title: 'Ёлочка "Пина колада" (Pina Colada)', img: "../../images/pinaColada.png", price: 720, count: 0, id: 18 },
      { title: 'Ёлочка "Клубника" (Strawberry)', img: "../../images/Strawberry.png", price: 720, count: 0, id: 19 },
      { title: 'Ёлочка "Аромат ванили" (Vanillaroma)', img: "../../images/Vanillaroma.png", price: 720, count: 0, id: 20 },
      { title: 'Ёлочка "Арбуз" (Watermelon)', img: "../../images/Watermelon.jpg", price: 720, count: 0, id: 21 },
      { title: 'Ёлочка "Дикая вишня" (Wild Cherry)', img: "../../images/Cherry.png", price: 720, count: 0, id: 22 },
      { title: 'Ёлочка "Ежевика с гвоздикой" (Blackberry Clove)', img: "../../images/Blackberry.png", price: 720, count: 0, id: 23 },
      { title: 'Ёлочка "Яблоко с корицей" (Cinamon Apple)"', img: "../../images/Cinamon.png", price: 720, count: 0, id: 24 },
      { title: 'Ёлочка "Стальная сила" (Pure Steel)', img: "../../images/Pure.png", price: 720, count: 0, id: 25 },
      { title: 'Ёлочка "Утренняя свежесть" (Morning Fresh)', img: "../../images/Fresh.png", price: 720, count: 0, id: 26 },
      { title: 'Ёлочка "Королевская сосна" (Royal Pine)', img: "../../images/Royal.png", price: 720, count: 0, id: 27 },
      { title: 'Ёлочка "Американский флаг" (Vanilla Pride)', img: "../../images/Vanilla.png", price: 720, count: 0, id: 28 },
      { title: 'Ёлочка "Бабл гам" (Bubble Gum)', img: "../../images/bubbleGum.png", price: 720, count: 0, id: 29 },
      { title: 'Ёлочка "Карибский коктейль" (Caribbean Colada)', img: "../../images/Caribbean.png", price: 720, count: 0, id: 30 },
      { title: 'Ёлочка "Летняя свежесть" (Summer Linen)', img: "../../images/Summer.png", price: 720, count: 0, id: 31 },
      { title: 'Ёлочка "Медовая вишня" (Cherry Blossom Honey)', img: "../../images/cherryBlossom.png", price: 720, count: 0, id: 32 },
      { title: 'Ёлочка "Тропический туман" (Rainforest Mist)', img: "../../images/Rainforest.png", price: 720, count: 0, id: 33 },
      { title: 'Ёлочка "Ромашковые поля" (Daisy Fields)', img: "../../images/Rainforest.png", price: 720, count: 0, id: 34 },
      { title: 'Ёлочка "Бурбон" (Bourbon)', img: "../../images/Bourbon.png", price: 720, count: 0, id: 35 },
      { title: 'Ёлочка "Сердце Севера" (True North)', img: "../../images/North.png", price: 720, count: 0, id: 36 },
      { title: 'Ёлочка "Российский флаг" (Russian Flag)', img: "../../images/Russian.jpg", price: 720, count: 0, id: 37 },
      { title: 'Ёлочка "Пламя востока" (Heat)', img: "../../images/Heat.png", price: 720, count: 0, id: 38 },
      { title: 'Ёлочка "С днем рождения!" (Celebrate!)', img: "../../images/Celebrate.png", price: 720, count: 0, id: 39 },
      { title: 'Ёлочка "Ярмарка специй" (Spice Market)', img: "../../images/Market.png", price: 720, count: 0, id: 40 },
      { title: 'Ёлочка "Весенний дождь" (Rainshine)', img: "../../images/Rainshine.jpg", price: 720, count: 0, id: 41 },
      { title: 'Ёлочка "Марокканская мята" (Moroccan Mint Tea)', img: "../../images/Moroccan.jpg", price: 720, count: 0, id: 41 },
      { title: 'Ёлочка "Барбершоп" (Fresh Shave)', img: "../../images/FreshS.jpg", price: 720, count: 0, id: 42 },
      { title: 'Ёлочка "Сансет Бич" (Sunset Beach)', img: "../../images/Sunset.jpg", price: 720, count: 0, id: 43 },
      { title: 'Ёлочка "Солнечная энергия"', img: "../../images/108.jpg", price: 789, count: 0, id: 108 },
      { title: 'Ёлочка "Коралловый Риф"  ', img: "../../images/109.jpg", price: 720, count: 0, id: 109 },
      { title: 'Ёлочка "Морской карнавал" (Pina Colada)', img: "../../images/111.jpg", price: 790, count: 0, id: 111 },
      { title: 'Ёлочка "Морозная свежесть" (Ice Blue)', img: "../../images/112.jpg", price: 720, count: 0, id: 112 },
      { title: 'Ёлочка "Черный лес" (Black Forest)', img: "../../images/119.jpg", price: 720, count: 0, id: 119 },
      { title: 'Ёлочка "Манго" (Mango)', img: "../../images/123.jpg", price: 720, count: 0, id: 123 },
      { title: 'Ёлочка "Уютное тепло" (Cable Knit)', img: "../../images/125.jpg", price: 720, count: 0, id: 125 },
      { title: 'Ёлочка "Ароматерапия" (Passion)', img: "../../images/126.jpg", price: 790, count: 0, id: 126 },
      { title: 'Ёлочка "Свежесть океана" (Ocean Mist)', img: "../../images/131.jpg", price: 720, count: 0, id: 131 },
      { title: 'Ёлочка "Смородины" (Cinna-Berry)', img: "../../images/132.jpg", price: 720, count: 0, id: 132 },
      { title: 'Ёлочка "Лимонный сад" (Lemon Grove)', img: "../../images/133.jpg", price: 790, count: 0, id: 133 },
      { title: 'Ёлочка "Брызги прибоя" (White Water)', img: "../../images/135.jpg", price: 790, count: 0, id: 135 },
      { title: 'Ёлочка "Финишная линия" (Victory Lane)', img: "../../images/136.jpg", price: 790, count: 0, id: 136 },
      { title: 'Ёлочка "Ягодный бриз" (Sunberry Cooler)', img: "../../images/138.jpg", price: 720, count: 0, id: 138 },
      { title: 'Ёлочка "Стальная сила" (Pure Steel)', img: "../../images/139.jpg", price: 720, count: 0, id: 139 },
      { title: 'Ёлочка "Маргарита" (Margarita)', img: "../../images/141.jpg", price: 720, count: 0, id: 141 },
      { title: 'Ёлочка "Живой лимон" (Lively Lemon)', img: "../../images/142.jpg", price: 720, count: 0, id: 142 },
      { title: 'Ёлочка "Сердце севера" (True North)', img: "../../images/144.jpg", price: 790, count: 0, id: 144 },
      { title: 'Ёлочка "Яблока с корицей" (Cinnamon Apple)', img: "../../images/146.jpg", price: 789, count: 0, id: 146 },
      { title: 'Ёлочка "Лаванды" (Lavender)', img: "../../images/147.jpg", price: 790, count: 0, id: 147 },
      { title: 'Ёлочка "Тропические берега" (Tropical Shores)', img: "../../images/148.jpg", price: 789, count: 0, id: 148 },
      { title: 'Ёлочка "Ромашковые поля" (Daisy Fields)', img: "../../images/149.jpg", price: 790, count: 0, id: 149 },
      { title: 'Ёлочка "Гранд каньон" (Copper Canyon)', img: "../../images/150.jpg", price: 790, count: 0, id: 150 },
      { title: 'Ёлочка "Мароканская мята" (Moroccan Mint Tea)', img: "../../images/153.jpg", price: 790, count: 0, id: 153 },
      { title: 'Ёлочка "Ванили" (Vanillaroma)', img: "../../images/154.jpg", price: 790, count: 0, id: 154 },
      { title: 'Ёлочка "Зеленый чай с лимоном" (Fresh Surge)', img: "../../images/155.jpg", price: 720, count: 0, id: 155 },
      { title: 'Ёлочка "Эвкалипта" (Eucalyptus)', img: "../../images/157.jpg", price: 790, count: 0, id: 157 },
    ],
    jar: [
      { title: 'Fiber Can "Жасмин" (Jasmin)', img: "../../images/JasminJar.png", price: 250, count: 0, id: 44 },
      { title: 'Fiber Can "Новая машина" (New Car)', img: "../../images/newCarJar.png", price: 250, count: 0, id: 45 },
      { title: 'Fiber Can "Карибский коктейль"', img: "../../images/CaribbeanJar.png", price: 250, count: 0, id: 46 },
      { title: 'Fiber Can "Яблоко" (Green Apple)', img: "../../images/greenAppleJar.png", price: 250, count: 0, id: 47 },
      { title: 'Fiber Can "Вишня" (Cherry Blast)', img: "../../images/cherryJar.png", price: 250, count: 0, id: 48 },
      { title: 'Fiber Can "Летняя свежесть"', img: "../../images/SummerJar.png", price: 250, count: 0, id: 49 },
      { title: 'Fiber Can "Лаванда" (Lavender)', img: "../../images/LavenderJar.png", price: 250, count: 0, id: 50 },
      { title: 'Fiber Can "Черный Лед" (Black Ice)', img: "../../images/blackIceJar.png", price: 250, count: 0, id: 51 },
    ],
    liquid: [
      { title: 'Little Tress "Ментоловый бриз"', img: "../../images/Bottle.png", price: 200, count: 0, id: 52 },
      { title: 'Little Tress "Взрыв чувств"', img: "../../images/Взрыв.png", price: 200, count: 0, id: 53 },
      { title: 'Little Tress "Лесные ягоды"', img: "../../images/ягоды.png", price: 200, count: 0, id: 54 },
      { title: 'Little Tress "Свежесть лимона"', img: "../../images/Lemon.png", price: 200, count: 0, id: 55 },
      { title: 'Little Tress "Спорт"', img: "../../images/sport.png", price: 200, count: 0, id: 56 },
      { title: 'Little Tress "Ваниль"', img: "../../images/Ваниль.png", price: 200, count: 0, id: 57 },
      { title: 'Little Tress "Яблоко"', img: "../../images/apple.png", price: 200, count: 0, id: 58 },
      { title: 'Little Tress "Тропики"', img: "../../images/Тропики.png", price: 200, count: 0, id: 59 },
      { title: 'Little Tress "Кокос"', img: "../../images/Кокос.png", price: 200, count: 0, id: 60 },
      // { title: 'Ma-Fra FANTASIE DI ELISIR Blue Ocean 500 мл', img: "../../images/61.jpg", price: 5500, count: 0, id: 61},
      { title: 'Aura Fresh Unisex Rave 6 мл', img: "../../images/62.jpg", price: 1250, count: 0, id: 62 },
      { title: 'Ma-Fra DEO CUBE Vanilla', img: "../../images/63.jpg", price: 1600, count: 0, id: 63},
      { title: 'Ma-Fra DEO CUBE Forest', img: "../../images/64.jpg", price: 1600, count: 0, id: 64 },
      { title: 'Aura Fresh Venso Bubble Gum 6 мл', img: "../../images/65.jpg", price: 1900, count: 0, id: 65 },
      { title: 'Ma-Fra DEO CUBE Tropical', img: "../../images/66.jpg", price: 1600, count: 0, id: 66 },
      { title: 'Ma-Fra DEO CUBE Apple', img: "../../images/67.jpg", price: 1600, count: 0, id: 67 },
      { title: 'Ma-Fra DEO CUBE Ocean', img: "../../images/68.jpg", price: 1600, count: 0, id: 68 },
      { title: 'Aura Fresh Prime CAP №5 7 мл', img: "../../images/69.jpg", price: 1499, count: 0, id: 69 },
      // { title: 'Ma-Fra Oriental Spa 500 мл', img: "../../images/70.jpg", price: 5500, count: 0, id: 70 },
      { title: 'Venso Black 6 мл', img: "../../images/71.jpg", price: 1900, count: 0, id: 71 },
      { title: 'Aura Fresh Black 6 мл', img: "../../images/72.jpg", price: 1100, count: 0, id: 72 },
      { title: 'Tensy Кофе 6 мл', img: "../../images/73.jpg", price: 1190, count: 0, id: 73 },
      { title: 'Tensy Новая машина 6 мл', img: "../../images/74.jpg", price: 1090, count: 0, id: 74 },
      { title: 'Tensy Арбуз 6 мл', img: "../../images/75.jpg", price: 1190, count: 0, id: 75 },
      { title: 'Tensy Belle 6 мл', img: "../../images/76.jpg", price: 1600, count: 0, id: 76 },
      { title: 'Tensy Adore 6 мл', img: "../../images/77.jpg", price: 1690, count: 0, id: 77 },
      { title: 'Tensy Dolce 6 мл', img: "../../images/78.jpg", price: 1600, count: 0, id: 78 },
      { title: 'KAPRIZ Kenzo 5 мл', img: "../../images/79.jpg", price: 1199, count: 0, id: 79 },
      { title: 'Tensy Bosco 6 мл', img: "../../images/80.jpg", price: 1690, count: 0, id: 80 },
      { title: 'KAPRIZ Vip Men 5 мл', img: "../../images/81.jpg", price: 1390, count: 0, id: 81 },
      { title: 'Tensy Тутти Фрутти 10 мл', img: "../../images/82.jpg", price: 1190, count: 0, id: 82 },
      { title: 'Tensy Нежность', img: "../../images/84.jpg", price: 1690, count: 0, id: 84 },
      { title: 'KAPRIZ Creed 5 мл', img: "../../images/85.jpg", price: 1390, count: 0, id: 85 },
      { title: 'Tensy Гламур', img: "../../images/86.jpg", price: 1690, count: 0, id: 86 },
      { title: 'Tensy Морской бриз', img: "../../images/87.jpg", price: 1190, count: 0, id: 87 },
      { title: 'KAPRIZ Bvlgari 5 мл', img: "../../images/88.jpg", price: 1199, count: 0, id: 88 },
      { title: 'Tensy Черный лед 6 мл', img: "../../images/89.jpg", price: 1190, count: 0, id: 89 },
      { title: 'Tensy Пина колада', img: "../../images/90.jpg", price: 1190, count: 0, id: 90 },
      { title: 'Tensy Бабл Гам 6 мл', img: "../../images/91.jpg", price: 1190, count: 0, id: 91 },
      { title: 'Tensy Barhat 6 мл', img: "../../images/92.jpg", price: 1600, count: 0, id: 92 },
      { title: 'Tensy Oud Malaki 6 мл', img: "../../images/93.jpg", price: 1690, count: 0, id: 93 },
      { title: 'Tensy Terra 6 мл', img: "../../images/94.jpg", price: 1690, count: 0, id: 94 },
      { title: 'Tensy Океан 6 мл', img: "../../images/95.jpg", price: 1190, count: 0, id: 95 },
      { title: 'Tensy Шарм 10 мл', img: "../../images/96.jpg", price: 1690, count: 0, id: 96 },
      { title: 'Tensy Водопад', img: "../../images/97.jpg", price: 1190, count: 0, id: 97 },
      { title: 'KAPRIZ Lacoste 5 мл', img: "../../images/98.jpg", price: 1390, count: 0, id: 98 },
      { title: 'Tensy Ваниль 6 мл', img: "../../images/99.jpg", price: 1190, count: 0, id: 99 },
      { title: 'KAPRIZ Egoist 5 мл', img: "../../images/100.jpg", price: 1199, count: 0, id: 100 },
      { title: 'KAPRIZ Banderas 5 мл', img: "../../images/101.jpg", price: 1390, count: 0, id: 101 },
      { title: 'Tensy Ночная орхидея 6 мл', img: "../../images/102.jpg", price: 1190, count: 0, id: 102 },
      { title: 'KAPRIZ Versace 5 мл', img: "../../images/103.jpg", price: 1199, count: 0, id: 103 },
      { title: 'KAPRIZ Givenchy 5 мл ', img: "../../images/104.jpg", price: 1199, count: 0, id: 104 },
      { title: 'KAPRIZ Chanel 5 мл', img: "../../images/105.jpg", price: 1390, count: 0, id: 105 },
      { title: 'Tensy Fleur 6 мл', img: "../../images/106.jpg", price: 1690, count: 0, id: 106 },
    
    ],
    plastic: [
      { title: 'Клипса Fresh Link Golden Vanilla', img: "../../images/162.jpg", price: 1490, count: 0, id: 162 },
      { title: 'Клипса Fresh Link Bayside Breeze', img: "../../images/163.jpg", price: 1490, count: 0, id: 163 },
      { title: 'Клипса Aura Fresh Lemon 40 мл', img: "../../images/164.jpg", price: 1199, count: 0, id: 164 },
      { title: 'Клипса Aura Fresh New Car 40 мл', img: "../../images/165.jpg", price: 1199, count: 0, id: 165 },
      { title: 'Клипса Fresh Link Caribbean Colada', img: "../../images/166.jpg", price: 1490, count: 0, id: 166 },
      { title: 'Клипса Fresh Link Bubble Gum', img: "../../images/167.jpg", price: 1490, count: 0, id: 167 },
      { title: 'Клипса Aura Fresh Black 40 мл', img: "../../images/168.jpg", price: 1300, count: 0, id: 168 },
      { title: 'Клипса Fresh Link New Car', img: "../../images/169.jpg", price: 1390, count: 0, id: 169 },
      { title: 'Клипса Fresh Link Black Ice', img: "../../images/170.jpg", price: 1490, count: 0, id: 170 },
      { title: 'Клипса Aura Fresh Aqua 40 мл', img: "../../images/171.jpg", price: 1100, count: 0, id: 171 },
    ],
    gel: [
      { title: 'Tensy SHARK "Bubble Gum"', img: "../../images/172.jpg", price: 1600, count: 0, id: 172 },
      { title: 'Tensy SHARK "Ocean"', img: "../../images/173.jpg", price: 1600, count: 0, id: 173 },
      { title: 'Tensy SHARK "Sport" ', img: "../../images/174.jpg", price: 1600, count: 0, id: 174 },
      { title: 'Tensy SHARK "Sexy"', img: "../../images/175.jpg", price: 1500, count: 0, id: 175 },
      { title: 'Tensy SHARK "Boss" ', img: "../../images/176.jpg", price: 1600, count: 0, id: 176 },
    ],
      ceramics: [
        { title: 'MEDORI Velvet Kiss 36 мл ', img: "../../images/190.jpg", price: 1470, count: 0, id: 177 },
        { title: 'MEDORI Sparkling Twill', img: "../../images/190.jpg", price: 1400, count: 0, id: 178 },
        { title: 'MEDORI Gold Jacquard', img: "../../images/190.jpg", price: 1469, count: 0, id: 179 },
        { title: 'MEDORI Bosko', img: "../../images/180.jpg", price: 1400, count: 0, id: 180 },
        { title: 'MEDORI Barhat ', img: "../../images/181.jpg", price: 1400, count: 0, id: 181 },
        { title: 'MEDORI Crystal ice', img: "../../images/182.jpg", price: 1200, count: 0, id: 182 },
        { title: 'MEDORI Lost Cherry', img: "../../images/183.jpg", price: 1400, count: 0, id: 183 },
        { title: 'MEDORI Silky Sand  ', img: "../../images/184.jpg", price: 1400, count: 0, id: 184 },
        { title: 'MEDORI Bubble Gum ', img: "../../images/185.jpg", price: 1495, count: 0, id: 185 },
        { title: 'MEDORI Black Crystal', img: "../../images/186.jpg", price: 1495, count: 0, id: 186 },
        { title: 'MEDORI Vanilla Gold', img: "../../images/187.jpg", price: 1493, count: 0, id: 187 },
        { title: 'MEDORI Silver Fleece ', img: "../../images/188.jpg", price: 1470, count: 0, id: 188 },
        { title: 'MEDORI Imperial Velour', img: "../../images/189.jpg", price: 1469, count: 0, id: 189 },
        { title: 'MEDORI Cashmere Touch', img: "../../images/190.jpg", price: 1470, count: 0, id: 190 },
      ],
      rubber: [
        { title: 'Little Trees "Прибрежный бриз"', img: "../../images/191.jpg", price: 2090, count: 0, id: 191 },
        { title: 'Little Trees "Карибский коктейль"', img: "../../images/192.jpg", price: 730, count: 0, id: 192 },
        { title: 'Little Trees "Черный лед"', img: "../../images/193.jpg", price: 1999, count: 0, id: 193 },
        { title: 'Little Trees "Медовая вишня"', img: "../../images/194.jpg", price: 2090, count: 0, id: 194 },
        { title: 'Little Trees "Новая машина"', img: "../../images/195.jpg", price: 1999, count: 0, id: 195 },
        { title: 'Car-Freshner "Клубника"', img: "../../images/196.jpg", price: 2090, count: 0, id: 196 },
        { title: 'Little Trees "Летняя свежесть"', img: "../../images/197.jpg", price: 1999, count: 0, id: 197 },
        { title: 'Little Trees "Аромат Ваниль"', img: "../../images/198.jpg", price: 2090, count: 0, id: 198 },
      ],
      other: [
        { title: 'Ma-Fra Deo home fruit & spices deohomefs', img: "../../images/199.jpg", price: 3000, count: 0, id: 199 },
      ],
  })


  const [data, setData] = useState([])

    const loadData = async () => {
        const response = await axios.get("https://klakson.coursemoodle.online/api/api/get")
        setData(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])




  const [basket, setBasket] = useState([])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])





  const [counter, setCounter] = useState(0)

  useEffect(() => {
    localStorage.setItem('counter', counter)
  }, [counter])


  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    localStorage.setItem('totalPrice', totalPrice)
  }, [totalPrice])

  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    localStorage.setItem('totalCount', totalCount)
  }, [totalCount])





  ////////////////////////////////////

  const tele = window.Telegram.WebApp;
  const TOKEN = "5976006612:AAG5HDewIVeITnwe45xjUTVaX2tBdvLhTwQ";

  fetch('https://api.telegram.org/bot5976006612:AAG5HDewIVeITnwe45xjUTVaX2tBdvLhTwQ/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: '637137504',
      text: tele.initDataUnsafe
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Message sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });

  console.log(tele.initDataUnsafe);

  if (tele.initDataUnsafe.user) {
    console.log(tele.initDataUnsafe.user.id);
  }




  const [userId, setUserId] = useState(tele.initDataUnsafe.user.id)

  useEffect(() => {
    localStorage.setItem('userId', userId)
  }, [userId])




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<NewApp data={data} userId={userId} products={products} setProducts={setProducts} counter={counter} setCounter={setCounter} basket={basket} setBasket={setBasket} />} /> {/*userId bolady*/}
          <Route path={"basket"} element={<Basket products={products} setProducts={setProducts} counter={counter} setCounter={setCounter} basket={basket} setBasket={setBasket} />} />
          <Route path={"confirmation"} element={<Checkout data={data} userId={userId} totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalCount={totalCount} setTotalCount={setTotalCount} products={products} setProducts={setProducts} counter={counter} setCounter={setCounter} basket={basket} setBasket={setBasket} />} />  {/*userId bolady*/}
          <Route path={"payment"} element={<PaymentPage totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalCount={totalCount} setTotalCount={setTotalCount} products={products} setProducts={setProducts} counter={counter} setCounter={setCounter} basket={basket} setBasket={setBasket} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


