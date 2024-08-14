let product;
function displayCartItems(){
    const keys = Object.keys(localStorage);
    // console.log(keys);
    str=``
    keys.map((item)=>{
         product = JSON.parse(localStorage.getItem(item));
        console.log(product);
        str+=`
        <div>
            <div class="men-card">
                <div class="image">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="content">

                    <h5 class="category">${item.category}</h5>
                    <h4>${product.title.length>=20?`${product.title.substring(0,20)}...`:product.title}</h4>
                    <div> <span><button class="ratings">${product.rating} <span><i class="fa-solid fa-star"></i></span></button></span></div>
                    <span class="discount-price">$${product.price}</span>
                    <span class="original-price">$${Math.ceil(product.price*100/product.discountPercentage)}</span>
                    <span class="discount-percentage">${product.discountPercentage}% OFF</span>

                   
              
                </div>

                <div class="content-buttons">
                    <button class="remove-btn" onclick="removeItem(${product.id})">REMOVE</button>
                   
                </div>
          
            </div>
        </div>`

        

    })
    document.getElementById("products").innerHTML=str

}


displayCartItems()

function removeItem(id){
          
            localStorage.removeItem(id);
            displayCartItems()
    
}

