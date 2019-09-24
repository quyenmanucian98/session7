let Products = function (name, price) {
    this.name = name;
    this.price = price;

    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
    this.getPrice = function () {
        return this.price;
    };
    this.setPrice = function (value) {
        this.price = value;
    };
};
let lishProduct = ["Iphone 6", " Iphone 7", "Iphone 8", "Iphone X"];
displayTitle();
displayProducts();

function displayTitle() {
    document.getElementById('stt').innerHTML = "NUMERICAL ORDE";
    document.getElementById('name').innerHTML = "PRODUCTS NAME";
    document.getElementById('gia').innerHTML = "PRODUCTS PRICE";
}

function displayProducts() {
    document.getElementById('nameProducts').innerHTML = "";
    for (let i = 0; i < lishProduct.length; i++) {
        document.getElementById('nameProducts').innerHTML += `
<button onclick='sellProducts(${i})'>SELL</button>
<button onclick='editProducts(${i})'>EDIT</button>
<span>${lishProduct[i]}</span><br><br>`
    }
}

function addProducts() {
    let inputName = prompt("Input Name");
    let inputPrice = prompt("Input price");
    let addProducts = new Products(inputName, inputPrice);
    lishProduct.push(addProducts.getName());
    displayProducts();
    document.getElementById('productsPrice').innerHTML = addProducts.getPrice();
}

function sellProducts(index) {
    lishProduct.splice(index, 1);
    displayProducts();
}

function editProducts(index) {
    lishProduct[index] = prompt('Nhập lại tên sản phẩm');
    displayProducts();
}

