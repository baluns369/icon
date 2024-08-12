async function onBuy(){
    try {
        const res=await fetch("https://dummyjson.com/products")
        const products=await res.json()
            str=``
            products.products.map((item)=>{
                str+=`<a href="/cart.html">
            <div class="card">
                <div class="image">
                 <img src="${item.thumbnail}" alt="">
                    </div>
             <div class="det">
                    <h4></h4>
                    <p></p>
                    <button id="but" class="b1">BUY</button>
                </div>
            </div>
        </a>`
            })
        
    }
}