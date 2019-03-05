// $(document).ready(function () {
//     $('.collapse').collapse()
//     $('#user-rating-form').on('change', '[name="rating"]', function () {
//         $('#selected-rating').text($('[name="rating"]:checked').val());
//     });
//
// });

var obj = [
    {
        title: 'MANGO PEOPLE T-SHIRT',
        color: 'red',
        size: 'XS',
        price: 1200,
        url: './data/img/product_1.jpg',
        alt: this.title,
        quantity: 4


    },
    {
        title: 'MANGO PEOPLE DRESS',
        color: 'BLACK',
        size: 'M',
        price: 1700,
        url: './data/img/product_2.jpg',
        alt: this.title,
        quantity: 4

    },
    {
        title: 'MANGO PEOPLE SKIRT',
        color: 'WHITE',
        size: 'S',
        price: 2000,
        url: './data/img/product_3.jpg',
        alt: this.title,
        quantity: 4
    }

];






function generateGoods(obj) {
    for (var i = 0; i < obj.length; i++) {
        var good = obj[i];
        var $itemWrap = document.getElementById('acd');
        // console.log($itemWrap);
        var $shopItem = document.createElement('li');
        $shopItem.classList.add('shop-item');


        var $shopItemLink = document.createElement('a');
        $shopItemLink.classList.add('shop-item-link');
        $shopItemLink.style = 'background-image: url(' + good.url + ')';
        // console.log($shopItemLink);


        var addToCardBtn = document.createElement('a');
        addToCardBtn.classList.add('add-to-card');
        addToCardBtn.textContent = 'Add to cart';
        addToCardBtn.href = '#';
        addToCardBtn.id = i;


        var itemTitle = document.createElement('a');
        itemTitle.classList.add('item-brand');
        itemTitle.textContent = good.title;


        var itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price', 'pink');
        itemPrice.textContent = good.price;


        $shopItem.appendChild($shopItemLink);
        $shopItem.appendChild(addToCardBtn);
        $shopItem.appendChild(itemTitle);
        $shopItem.appendChild(itemPrice);
        if ($itemWrap) {
            $itemWrap.appendChild($shopItem);

        }

    }

}

generateGoods(obj);

var addToCardBtn = document.getElementsByClassName('add-to-card');
console.log(addToCardBtn);


var id = 0;

for (var i = 0; i < addToCardBtn.length; i++) {
    var btn = addToCardBtn[i];
    console.log(addToCardBtn[i]);
    btn.addEventListener('click', handleAddClick);

    function handleAddClick(evt) {
        evt.preventDefault();
        console.log('click!!');
        console.log(this.id);
        id = this.id;
        cartMass.push(obj[id]);
        console.log(cartMass);
        return (id)


    }
}
var cartMass = [];


function generateGoodsOnCart(cartMass) {
    var $rowsWrap = document.getElementById('cart-generate');
    // console.log($rowsWrap);
    for (var i = 0; i < cartMass.length; i++) {
        var good = cartMass[i];

        var $itemRow = document.createElement('div');
        $itemRow.classList.add('product-row');
        // console.log($itemRow);

        var $productDetails = document.createElement('div');
        $productDetails.classList.add('product-details');

        var $productDetailsWrap = document.createElement('div');
        $productDetailsWrap.classList.add('product-details-wrap');

        var $productDetailsImg = document.createElement('div');
        $productDetailsImg.classList.add('product-details-img');
        $productDetailsImg.style = 'background-image: url(' + good.url + ')';

        var $productName = document.createElement('div');
        $productName.classList.add('product-name');

        var spanColor = document.createElement('span');
        spanColor.classList.add('color');
        spanColor.textContent = 'color';
        var spanColorInner = document.createElement('span');
        spanColorInner.textContent = good.color;
        spanColor.appendChild(spanColorInner);

        var spanSize = document.createElement('span');
        spanSize.classList.add('size');
        spanSize.textContent = 'size';
        var spanSizeInner = document.createElement('span');
        spanSizeInner.textContent = good.size;
        spanSize.appendChild(spanSizeInner);

        var linkToProductWrap = document.createElement('h3');
        var linkToProduct = document.createElement('a');
        linkToProduct.href = "single-page.html";
        linkToProduct.textContent = good.title;
        linkToProductWrap.appendChild(linkToProduct);

        var $unitePrice = document.createElement('div');
        $unitePrice.classList.add('unite-price');
        $unitePrice.textContent = good.price;

        var $quantity = document.createElement('div');
        $quantity.classList.add('quantity');
        $quantity.textContent = good.quantity;

        // var quantityBox = document.createElement('input');
        // quantityBox.classList.add('quantity-box');
        // quantityBox.type = 'number';
        // $quantity.appendChild(quantityBox);

        var $shipping = document.createElement('div');
        $shipping.classList.add('shipping');
        $shipping.textContent = 'free';

        var $subtotal = document.createElement('div');
        $subtotal.classList.add('subtotal');
        $subtotal.textContent = good.quantity * good.price;

        var deleteGoodBtn = document.createElement('div');
        deleteGoodBtn.classList.add('action');

        var faElement = document.createElement('i');
        faElement.classList.add('fas', 'fa-times-circle');
        deleteGoodBtn.appendChild(faElement);


        $productName.appendChild(linkToProductWrap);
        $productName.appendChild(spanSize);
        $productName.appendChild(spanColor);
        $productDetailsWrap.appendChild($productDetailsImg);
        $productDetailsWrap.appendChild($productName);
        $productDetails.appendChild($productDetailsWrap);
        $itemRow.appendChild($productDetails);
        $itemRow.appendChild($unitePrice);
        $itemRow.appendChild($quantity);
        $itemRow.appendChild($shipping);
        $itemRow.appendChild($subtotal);
        $itemRow.appendChild(deleteGoodBtn);


        if ($rowsWrap) {
            $rowsWrap.appendChild($itemRow);
            console.log($rowsWrap)

        }


    }


}

generateGoodsOnCart(cartMass);






// var deleteGoodBtn = document.getElementsByClassName('action');
// console.log(deleteGoodBtn);
// var $itemRow = document.getElementsByClassName('product-row');
// console.log($itemRow);

//
// deleteGoodBtn.addEventListener("click", function(){
//     $itemRow.classList.add('hide');
// });



// var $rowsWrap = document.getElementById('cart-generate');

// function buildList(list) {
//     $rowsWrap.innerHTML = '';
//     for (var i = 0; i < friends.length; i++) {
//         var $li = document.createElement('li');
//         $li.textContent = list[i].name;
//         $list.appendChild($li);
//     }
// }
//
// buildList(friends);


// var $itemRow = document.getElementsByClassName('product-row');
// console.log($itemRow);





