// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó

// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120


function calculateFactorial(num){
    let result = 1;
    for(let i = 1 ; i <= num; i++){
       result = result * i;
    }
    return result;
}

let number = parseInt(prompt("Enter number :"));
let factorial = calculateFactorial(number);
console.log("Giai thừa của " + number + " là: " + factorial);


// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

// Ví dụ: reverseString(‘hello’) => olleh

let str2 = " hello ";

function reverseString( str2){
    let arrayConvert =  str2.trim().split("").reverse().join("");
    return arrayConvert;
}


 function reverseString(str2){
    let newStr = [];
    let arrayConvert = str2.trim().split("");
   
  
   for(let i = arrayConvert.length - 1; i >= 0  ; i--){
        newStr.push( arrayConvert[i]);
  }

  return newStr.join("");

}

console.log(reverseString(str2))



// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”

let country = prompt("Enter contry code:")

function countryCode(str3){
   str = str.toUpperCase();
    switch(str){
        case 'VN':
            console.log("Xin chào");
            break
        case 'EN':
            console.log("Hello");
            break  
        case'JP':
        console.log("こんにちは！");
        break  
        default:
            console.log("Not value");
            break
    }

}

console.log(countryCode(country));

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. 
// Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

let str4 = "xinchaocacbandenvoiTechmaster";

function cutString(str4){
    let cutString = str.substring(0,10);
    let lastString = "…";
    let result = cutString.concat(lastString)
    return result;
}





console.log(result)
