let productName: string = "Laptop";
console.log("Product Name:", productName);

let productPrice: number = 1500;
console.log("Product Price:", productPrice);

let productId: string | number;

productId = "ABC123";
console.log("Product ID (string):", productId);

productId = 12345;
console.log("Product ID (number):", productId);

interface Product {
  name: string;
  price: number;
}

let myProduct: Product = {
  name: "Mouse",
  price: 25,
};

console.log("My Product:", myProduct);
