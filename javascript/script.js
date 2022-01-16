let products = document.querySelector(".products");

let inputFilter = document.querySelector("#search-input");

let filter = document.querySelector(".filter");
filter.addEventListener("click", (e) => {
    switch (e.target.value) {
        case "":
            filtered.sortItems = "";
            renderProducts(allProducts, filtered);
            break;

        case "watch":
            filtered.sortItems = "watch";
            renderProducts(allProducts, filtered);
            break;

        case "shirt":
            filtered.sortItems = "shirt";
            renderProducts(allProducts, filtered);
            break;

        case "gown":
            filtered.sortItems = "gown";
            renderProducts(allProducts, filtered);
            break;

        case "jewelry":
            filtered.sortItems = "jewelry";
            renderProducts(allProducts, filtered);
            break;
        default:
            break;
    }
})


let allProducts = [];

let filtered = {
    sortItems: ""
}

document.addEventListener("DOMContentLoaded", () => {
    
    axios.get("http://localhost:3000/items")
        .then((response) =>{
            allProducts = response.data;
            renderProducts(allProducts, filtered);
        })
        .catch(error => console.log(error));

})
function renderProducts(_allProducts, _filtered) {
    let filteredProducts = _allProducts.filter((product) => {
        return product.title.toLowerCase().includes(_filtered.sortItems.toLowerCase());
    })
    products.innerHTML = "";
    filteredProducts.forEach(product => {
        let newProduct = document.createElement("div");
        newProduct.classList = "product"
        newProduct.innerHTML =`
            <div class="img-product"><img src=${product.image} alt=""></div>
            <div class="product-information">
                <div class="price-product">$ <span>${product.price}</span></div>
                <div class="title-product">${product.title}</div>
            </div>
            `;
        products.appendChild(newProduct);
    });
}



inputFilter.addEventListener("input",changeInput) 

function changeInput(e) {
    filtered.sortItems = e.target.value;
    renderProducts(allProducts, filtered);
}