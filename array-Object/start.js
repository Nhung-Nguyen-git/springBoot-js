let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// // 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// // Tên - Giá - Thương Hiệu - Số lượng
// // Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);
    
 }
// // 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// // Tổng tiền mỗi sản phẩm = price * count

for (let i = 0; i < products.length; i++) {
    const element = products[i].price * products[i].count;
    console.log(products[i].name  + element);
    
}
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
// Giả sử Object.values() chứa một đối tượng với thuộc tính "products" là một mảng các sản phẩm
Object.values(products).forEach(product => {
    if (product.brand === "Apple") {
        console.log(product);
    }
});

// // 4. Tìm các sản phẩm có giá > 20000000

let expensiveProducts = products.filter(product => product.price >20000000);
console.log(expensiveProducts)



// // 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

let findProduct = products.filter(product => product.name.toLowerCase().includes("pro")) ;
console.log(findProduct)

// // 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

let newProduct = {
    name: "Google Pixel 6",
    price: 6000000,
    brand: "Google",
    count: 4,
};


products.push(newProduct);

console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

let deleteProduct = products.filter(product => !product.name.includes("Samsung")) ;
console.log(deleteProduct)
delete deleteProduct

// // 8. Sắp xếp giỏ hàng theo price tăng dần
// let upProduct = products.map(product => product.price);
console.log(products.sort((a,b) => a.price -b.price));

// // 9. Sắp xếp giỏ hàng theo count giảm dần
console.log(products.sort((a,b) => b.price -a.price));

// // 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function getRandomProducts() {
    const randomProducts = [];
    const maxIndex = products.length;
     while (randomProducts.length < 2){
        const randomIndex = Math.floor(Math.random()* maxIndex);
        const selectedProduct = products[randomIndex];
            if(!randomProducts.includes(selectedProduct)){
                randomProducts.push(selectedProduct);

            }
       
     }
     return randomProducts;



}
const selectedProducts = getRandomProducts();
console.log('2 sản phẩm ngẫu nhiên trong giỏ hàng:', selectedProducts); 




