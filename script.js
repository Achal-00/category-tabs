let data;

document.addEventListener(
  "DOMContentLoaded",
  async () => {
    const response = await fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    );
    data = await response.json();

    categorySelection(0);
  },
  false
);

// category selection
const categorySelection = (category) => {
  const mainContainer = document.querySelector(".product-section");
  mainContainer.innerHTML = "";

  data.categories[category].category_products.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";

    const imageHolder = document.createElement("div");
    imageHolder.className = "image-holder";
    imageHolder.style.backgroundImage = `url(${element.image})`;

    if (element.badge_text) {
      const badge = document.createElement("span");
      badge.textContent = element.badge_text;
      imageHolder.appendChild(badge);
    }

    const productDetail = document.createElement("div");
    productDetail.className = "product-detail";

    const productInfo = document.createElement("span");
    productInfo.className = "product-info";
    const productName = document.createElement("h2");
    productName.textContent = element.title;
    const seprator = document.createElement("div");
    const productVendor = document.createElement("p");
    productVendor.textContent = element.vendor;
    productInfo.appendChild(productName);
    productInfo.appendChild(seprator);
    productInfo.appendChild(productVendor);
    productDetail.appendChild(productInfo);

    const productPrice = document.createElement("span");
    productPrice.className = "product-price";
    const productOffPrice = document.createElement("p");
    productOffPrice.className = "product-offprice";
    productOffPrice.textContent = element.price;
    const productOrigPrice = document.createElement("p");
    productOrigPrice.className = "product-origprice";
    productOrigPrice.textContent = element.compare_at_price;
    const productOffPerc = document.createElement("p");
    productOffPerc.className = "product-offperc";
    productOffPerc.textContent = `${Math.round(
      ((element.compare_at_price - element.price) / element.compare_at_price) *
        100
    )}% off`;
    productPrice.appendChild(productOffPrice);
    productPrice.appendChild(productOrigPrice);
    productPrice.appendChild(productOffPerc);
    productDetail.appendChild(productPrice);

    const addToCart = document.createElement("button");
    addToCart.textContent = "Add to Cart";

    card.appendChild(imageHolder);
    card.appendChild(productDetail);
    card.appendChild(addToCart);

    mainContainer.appendChild(card);
  });
};

// men section
document
  .querySelector(".option-select button:nth-child(1)")
  .addEventListener("click", (e) => {
    document
      .querySelectorAll(
        ".option-select button:nth-child(2), .option-select button:nth-child(3)"
      )
      .forEach((item) => {
        item.style.backgroundColor = "transparent";
        item.style.color = "black";
        item.childNodes[1].style.display = "none";
      });
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
    e.target.childNodes[1].style.display = "block";
    categorySelection(0);
  });

// women section
document
  .querySelector(".option-select button:nth-child(2)")
  .addEventListener("click", (e) => {
    document
      .querySelectorAll(
        ".option-select button:nth-child(1), .option-select button:nth-child(3)"
      )
      .forEach((item) => {
        item.style.backgroundColor = "transparent";
        item.style.color = "black";
        item.childNodes[1].style.display = "none";
      });
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
    e.target.childNodes[1].style.display = "block";
    categorySelection(1);
  });

// kids section
document
  .querySelector(".option-select button:nth-child(3)")
  .addEventListener("click", (e) => {
    document
      .querySelectorAll(
        ".option-select button:nth-child(1), .option-select button:nth-child(2)"
      )
      .forEach((item) => {
        item.style.backgroundColor = "transparent";
        item.style.color = "black";
        item.childNodes[1].style.display = "none";
      });
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
    e.target.childNodes[1].style.display = "block";
    categorySelection(2);
  });
