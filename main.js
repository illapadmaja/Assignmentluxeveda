


if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    
    var removeCartButtons = document.getElementsByClassName("cart_remove");
    console.log(removeCartButtons);
    for (var i=0; i< removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs=document.getElementsByClassName("cart_quenty");
    for (var i=0; i< quantityInputs.length; i++) {
        var input=quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addCart=document.getElementsByClassName("add_cart")
    for (var i=0; i < addCart.length; i++){
        var button=addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    
}

function removeCartItem(event) {
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
    var input=event.target0
    if (isNaN(input.value) || input.value <= 0) {
        input.value=1
    }
    updatetotal();
}

function addCartClicked(event){
    var button=event.target
    var shopProducts=button.parentElement
    var title = shopProducts.getElementsByClassName("product_title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price_off")[0].innerText;
    var productImage = shopProducts.getElementsByClassName("product_img")[0].src;
    addProductsToCart(title, price, productImage);
    updatetotal();
}

function addProductsToCart(title, price, productImage){
    var cartShopBox=document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems=document.getElementsByClassName("cart_content")[0];
    var cartItemsNames=cartItems.getElementsByClassName("cart_product_title");
    for (var i=0; i< cartItemsNames.length; i++){
        alert("You have already add this item to cart");
        return;
    }
   
}

var cartBoxContent=`<img src="${productImage}" alt="image" /></div>
<div class="cart_detail_box product_in">
    <h1 class="cart_product_title">${title}</h1>
    <span>Special price</span>
    
    
        <ul class="clearfix">
        <li><small>MRP</small></li>
        <li><div class="cart_price">${price}</div></li>
        <li><p>₹ 1,583</p></li>    
        <li><span>10% OFF</span></li>
        
        </ul>
    
    
    <input type="number" value="1" class="cart_quenty" />
</div>

<i class="fa fa-trash delete cart_remove" aria-hidden="true"></i>`;

cartShopBox.innerHTML=cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName("cart_remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart_quenty")[0].addEventListener("change", quantityChanged);

//update total 

function updatetotal(){
    var cartContent=document.getElementsByClassName("cart_content")[0];
    var cartBoxes=cartContent.getElementsByClassName("cart_box");
    var total=0;
    for (var i=0; i < cartBoxes.length; i++){
        var cartBox=cartBoxes[i];
        var priceElement=cartBox.getElementsByClassName("cart_price")[0];
        var quantityElement=cartBox.getElementsByClassName("cart_quenty")[0];
        var price=parseFloat(priceElement.innerText.replace("₹", ""));
        var quantity=quantityElement.value;
        total = total + price * quantity;

        document.getElementsByClassName("total_price")[0].innerText = "₹" + total;
    }

}



