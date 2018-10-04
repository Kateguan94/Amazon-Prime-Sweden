var products = [{
    price: 5990,
    name: 'Samsung 49" UHD Smart TV',
    thumbnail: './images/UE49NU7105XXC.jpg',
    category: 'electronics'
}, {
    price: 386,
    name: 'Chromecast (generation 2)',
    thumbnail: './images/CHROMECAST2.jpg',
    category: 'electronics'
}, {
    price: 2790,
    name: 'Philips 32" Full HD LED TV',
    thumbnail: './images/43PUS6503.jpg',
    category: 'electronics'
}, {
    price: 6490,
    name: 'LG 55" 4K UHD Smart TV',
    thumbnail: './images/55UK6400.jpg',
    category: 'electronics'
}, {
    price: 1549,
    name: 'Apple TV generation 4 - 32 GB',
    thumbnail: './images/APPLEMR912HYA.jpg',
    category: 'electronics'
}, {
    price: 1490,
    name: 'Sony 3D Smart Blu-ray',
    thumbnail: './images/BDPS6700B.jpg',
    category: 'electronics'
}, {
    price: 10990,
    name: 'Predator Z650',
    thumbnail: './images/ACEZ650.jpg',
    category: 'electronics'
}, {
    price: 5990,
    name: 'Sagemcom Digitalbox Smartbox',
    thumbnail: './images/DTIW77.jpg',
    category: 'electronics'
}, {
    price: 1890,
    name: 'NVIDIA SHIELD TV 4K',
    thumbnail: './images/NVIDSHI16GBRE.jpg',
    category: 'electronics'
}, {
    price: 899,
    name: 'QUILTED PARKA WITH HOOD',
    thumbnail: './images/3305240505_1_1_1.jpg',
    category: 'clothes'
}, {
    price: 899,
    name: 'WATER-REPELLENT QUILTED PARKA',
    thumbnail: './images/8073235505_2_4_1.jpg',
    category: 'clothes'
}, {
    price: 799,
    name: 'INVERTED LAPEL FROCK COAT',
    thumbnail: './images/8190888711_2_5_1.jpg',
    category: 'clothes'
}, {
    price: 1295,
    name: 'COAT WITH WRAP COLLAR',
    thumbnail: './images/7522267704_1_1_1.jpg',
    category: 'clothes'
}, {
    price: 1245,
    name: 'Horse',
    thumbnail: './images/156101638-origpic-bc6a00.jpg_0_0_100_100_173_173_85.jpg',
    category: 'toys'
}, {
    price: 1145,
    name: 'Donkey',
    thumbnail: './images/156101640-origpic-8cd8ac.jpg_0_0_100_100_173_173_85.jpg',
    category: 'toys'
}, {
    price: 39,
    name: 'Spiral',
    thumbnail: './images/155479854-origpic-d058a1.jpg_0_0_100_100_173_173_85.jpg',
    category: 'toys'
}, {
    price: 990,
    name: 'Sony Xperia L1',
    thumbnail: './images/SONXPL1BK.jpg',
    category: 'phones'
}, {
    price: 1890,
    name: 'Motorola Moto G6 Play',
    thumbnail: './images/MOTOG6DSBK.jpg',
    category: 'phones'
}, {
    price: 5890,
    name: 'Samsung Galaxy S8',
    thumbnail: './images/SAMS864BK.jpg',
    category: 'phones'
}, {
    price: 3290,
    name: 'Huawei P20  Lite 64 GB',
    thumbnail: './images/HUAP20LBK.jpg',
    category: 'phones'
}, {
    price: 7390,
    name: 'Apple iPhone 8 64GB',
    thumbnail: './images/APPIP864GO.jpg',
    category: 'phones'
}, {
    price: 12790,
    name: 'iPhone Xs 64 GB',
    thumbnail: './images/10751.jpg',
    category: 'phones'
}, {
    price: 5790,
    name: 'iPhone 7 32 GB',
    thumbnail: './images/APPIP732BK.jpg',
    category: 'phones'
}, {
    price: 1590,
    name: 'Huawei Y6 2018',
    thumbnail: './images/HUAY618BK.jpg',
    category: 'phones'
}, {
    price: 2989,
    name: 'iPhone SE 32 GB',
    thumbnail: './images/APPIPSE32GO.jpg',
    category: 'phones'
}, {
    price: 6190,
    name: 'OnePlus 6',
    thumbnail: './images/ONEPLUS6128MR.jpg',
    category: 'phones'
}, {
    price: 99,
    name: 'WILSON smart core 7 dz',
    thumbnail: './images/wilson.png',
    category: 'sport'
}, {
    price: 199,
    name: 'Umbrella Storm',
    thumbnail: './images/umbrella.png',
    category: 'sport'
}, {
    price: 99,
    name: 'W Tech Glove Lh',
    thumbnail: './images/nike.png',
    category: 'sport'
}, {
    price: 199,
    name: 'Rbz Tour dz',
    thumbnail: './images/rbz.png',
    category: 'sport'
}];

products = products.sort(function(a, b) {
    if (a.price < b.price) {
        return -1
    } else if (a.price > b.price) {
        return 1
    } else {
        return 0;
    }
});

var productTileTemplate = document.querySelector('.productTile');
productTileTemplate.remove();
var container = document.querySelector('.container');
products.forEach(function(product) {
    var productTile = productTileTemplate.cloneNode(true);
    productTile.querySelector('img').src = product.thumbnail;
    productTile.querySelector('.name').textContent = product.name;
    productTile.querySelector('.price').textContent = product.price;
    productTile.$category = product.category;
    productTile.$name = product.name;

    container.appendChild(productTile)
});

function showProductsInCategory(event) {
    var clickedElement = event.target;
    var category = clickedElement.getAttribute('data-category');
    if (!category) {
        showAllProducts();
    } else {
        showProductsFromCategory(category);
    }
}

function showAllProducts() {
    Array.from(container.children).forEach(function(tile) {
        tile.classList.remove('hidden');
    });
}

function showProductsFromCategory(category) {
    category = category.toLowerCase();
    Array.from(container.children).forEach(function(tile) {
        if (tile.$category === category) {
            tile.classList.remove('hidden');
        } else {
            tile.classList.add('hidden');
        }
    });
}

var cart = [];
var cartList = document.querySelector('.cartList');
var cartItemElementTemplate = cartList.querySelector('.cartItem');
cartItemElementTemplate.remove();

function addProductToCart(clickedElement) {
    if (clickedElement.tagName === 'BUTTON') {
        var tile = clickedElement.parentElement;
        cart.push(tile.$name);

        var cartItemElement = cartItemElementTemplate.cloneNode(true);
        cartItemElement.querySelector('.cartItemName').textContent = tile.$name
        cartList.appendChild(cartItemElement);
    }
}

function removeProductFromCart(clickedElement) {
    if (clickedElement.tagName === 'BUTTON') {
        var cartListItemElement = clickedElement.parentElement;
        cartListItemElement.remove();
        var itemName = cartListItemElement.querySelector('.cartItemName').textContent;
        var cartItemIndex = cart.find(function(name, index) {
            if (name === itemName) {
                return index;
            }
        });

        cart.splice(cartItemIndex, 1);
    }
}


var menu = document.querySelector('nav');
function toggleMenu() {
    menu.classList.toggle('visible');
}