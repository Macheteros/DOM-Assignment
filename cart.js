let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");





let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartSum");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);
    
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0){
    return (ShoppingCart.innerHTML = basket.map((x) => {
      console.log(x);
      return `
      <div class="cart-items">
      <img src="" alt="" />
      </div>
      `;
    }).join(""));

  } else {
    ShoppingCart.innerHTML =  ``;
    label.innerHTML =  `
    <h2>Cart is empty</h2>
    <a href="index.html">
      <button class="HomeBt">Back to home</button>
    </a>
    `; 
  }
}; 

generateCartItems(); 