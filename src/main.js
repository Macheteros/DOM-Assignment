let store = document.getElementById("store");

let storeItemsData = [{
    id:"Aphrodite",
    name:"Dji Phantom 3 Pro",
    price: 800,
    desc: "The Phantom 3 Professional carries a fully stabilized 3-axis 4k UHD video camera.",
    img: "Pics/jared-brashier-duNHkmSkW6M-unsplash.jpg",
}, 
{
    id:"Eres",
    name:"Dji Mavic 3",
    price: 1200,
    desc: "DJI Mavic 3 is DJI's next-generation flagship consumer camera drone.",
    img: "Pics/jakob-owens-CzQWJyZdFzU-unsplash.jpg",

}];


let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateStore =()=>{
    return (store.innerHTML = storeItemsData.map((x)=>{
        let {id, name, price, desc, img} =x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="items">
            <img width="236" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}.</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="button">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
        
    
    }).join(""));
};

generateStore();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
    });
  }
  else{
    search.item += 1;
  }
  

    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    
    if(search.item === 0) return;
    else{
    search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);
    

    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartSum");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);
    
};

calculation();