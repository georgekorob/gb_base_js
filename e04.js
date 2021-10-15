'use strict'

/* 4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort */

const products2 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78
    }
];

console.log('Задача №4.1');
console.log(products2.filter(p => p.photos && p.photos.length > 0));
console.log('Задача №4.2');
console.log(products2.sort(function(a, b) {return a.price - b.price;}));
console.log('_______________________________');
