function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// • content— перший параметр, ширина контенту 
// • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін 
// • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату
// • Npx де N — це довільне число, ціле або дробове.