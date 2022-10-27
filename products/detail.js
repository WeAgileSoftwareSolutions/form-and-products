let html = "";
const detailDiv = document.querySelector(".details");

fetch("https://dummyjson.com/products/5")
  .then((response) => response.json())
  .then((data) => {
    html += `
    <div class="left">
          <div class="image-container">
            <img src=${data.thumbnail} alt="" />
          </div>
          <div class="buttons">
            <button>add to cart</button>
            <button>wishlist</button>
          </div>
        </div>
        <div class="right">
          <h1>${data.title}</h1>
          <div class="rating">${data.rating} <span>&#9733;</span></div>
          <h2>$ ${data.price}</h2>
          <hr />
          <h3>Product Detail</h3>
          <p>${data.description}</p>
          <hr />
          <h4>Customer Feedback</h4>
        </div>
    `;

    detailDiv.innerHTML = html;
  });
