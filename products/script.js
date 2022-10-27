const products = [];
let html = "";
const productDiv = document.querySelector(".products");
// const productCount = document.querySelector(".sort-section sub");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    products.push(...data.products);
    products.forEach((product) => {
      html += `
            <a href="./product-detail.html" class="product">
            <div class="thumbnail">
               <img
                 src=${product.thumbnail}
                 alt="product-image"
               />
             </div>
             <div class="product-details">
               <h4>${product.title}</h4>
               <div class="rating">${product.rating} <span>&#9733;</span></div>
               <h5>$ ${product.price}</h5>
               <button>Add to cart</button>
             </div>
           </a>
             `;
    });
    // productCount.textContent = `(${products.length} items)`;
    productDiv.innerHTML = html;
  });
