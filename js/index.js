async function getProducts(){
  try{
       const res=await fetch("https://dummyjson.com/products")
       const data=await res.json()
       // console.log(data);
       str=``
       data.products.map((item)=>{
           str+=` <a href="/pages/product.html"> 
          <div class="card">
          <div class="image">
              <img src="${item.thumbnail}" alt="">
          </div>
          <div class="det">
         
              <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
                <div class="con">  <h5>$${item.price}</h5><span><button class="ratings">${item.rating} <span class="star"><i class="fa-solid fa-star"></i></span></button></span>
             
              </div>
          </div>
        
          </div>
      </a>`

       })
       document.getElementById("products").innerHTML=str
   }
  
   catch(error){
       console.log(error);
  }
}
getProducts()


// Code for search 
document.getElementById("search").addEventListener("keyup",async(e)=>{
   try{
       const res=await fetch("https://dummyjson.com/products")
       const data=await res.json()
       const search =data.products.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
       // console.log(data);
       str=``
       search.map((item)=>{
         str+=`<a href="/pages/product.html"> 
          <div class="card">
          <div class="image">
              <img src="${item.thumbnail}" alt="">
          </div>
          <div class="det">
         
              <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
                <div class="con">  <h5>$${item.price}</h5><span><span class="math">$${Math.ceil((item.price*100/item.discountPercentage))}</span><span class="discnt">${item.discountPercentage}% Off</span>\<button class="ratings">${item.rating} <span class="star"><i class="fa-solid fa-star"></i></span></button></span>
             
              </div>
          </div>
        
          </div>
      </a>`

       })
       document.getElementById("products").innerHTML=str
   }
  
   catch(error){
       console.log(error);
  }
}

   
)