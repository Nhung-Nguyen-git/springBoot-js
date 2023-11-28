// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

let createText = document.createElement("p");
createText.id = "text";
createText.textContent ="Tôi có thể làm ";
document.body.appendChild(createText);
const text = document.getElementById("text");
console.log(text)

// text.innerHTML= 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';


// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const list = document.querySelectorAll(".list li");
[...list].forEach(item => {
    console.log(item)
    item.style.color = "blue";
});

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// 1.Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const listAfter = document.getElementById("list");
const template = `
<li>Item 8</li>
<li>Item 9</li>
<li>Item 10</li>`;
listAfter.insertAdjacentHTML("beforeend",template);


// 2.Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
var listItems = listAfter.getElementsByTagName('li');
if (listItems.length > 0) {
    listItems[0].style.color = 'red';
}

// 3.Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
if (listItems.length > 0) {
    listItems[2].style.backgroundColor = 'blue';
}

// 4.Remove thẻ <li> 4
if (listItems.length >= 4) {
    listAfter.removeChild(listItems[3])
}

// 5.Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ;

let newItem = document.createElement("li");
newItem.textContent = "hello";
listAfter.insertBefore(newItem, listAfter.getElementsByTagName('li')[3]);