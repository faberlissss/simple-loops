console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20.');
let null1 = '';
for (let i = 10; i <= 20; i++) {
    null1 += (`${i} ,`);
}
console.log(`${null1}`);
 

console.log('Вивести квадрати чисел від 10 до 20.');
let null2 = '';
for (let a = 10; a <= 20; a++) {
    null2 += a * a + ',';
   
} 
console.log(`${null2}`);

console.log('Вивести таблицю множення на 7.');
let b = 7;
  for (let j = 0; j <= 10; j++){
    console.log(`${b}*${j}= ${b * j}`);
}

console.log('Знайти суму всіх цілих чисел від 1 до 15.');
let null3 = 0;
for (let c = 0; c <= 15; c++){
    null3 += c;
}
console.log(`${null3}`);

console.log('Знайти добуток усіх цілих чисел від 15 до 35.');
let null4 = 1;
for (let x = 15; x <= 35; x++) {
    null4 = null4 * x;
}
console.log(`${null4}`);

console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
let null5 = 0;
let null6 = 0;
for (let s = 1; s <= 500; s++) {
    null5 = null5 + s;
    null6 = null6 + 1;
    r = null5 / null6;
}
console.log(`${r}`);

console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80.');
let null7 = 0;
for (let g = 30; g <= 80; g++) {
    if (g % 2 === 0) {
        null7 = null7 + g;
    }
}
console.log(`${null7}`);

console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3.');
let null8 = '';
for (let n = 100; n <= 200; n++) {
    if (n % 3 === 0) {
        null8 += (`${n},`);
    }
}
console.log(`${null8}`);

console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');
let num = Number(prompt('Please enter natural number'));
for (let m = 1; m <= num; m++) {
    if (num % m === 0) {
        console.log(`Дільники числа:${num} = ${m}`);
    }
}
let null9 = 0;
let null10 = 0;
for (let m = 1; m <= num; m++) {
    if (num % m === 0 && m % 2 === 0) {
        null9 = null9 + 1;
        null10 = null10 + m;
    }
}
console.log('Визначити кількість його парних дільників.');
console.log(`Кількість парних дільників числа: ${num} = ${null9}`);
console.log('Знайти суму його парних дільників.');
console.log(`Сума парних дільників числа ${num} = ${null10}`);

console.log('Надрукувати повну таблицю множення від 1 до 10.');
console.log('На 1');
let q = 1;
  for (let w = 0; w <= 10; w++){
    console.log(`${q} * ${w}= ${q * w}`);
}
console.log('На 2');
let e = 2;
  for (let r = 0; r <= 10; r++){
    console.log(`${e} * ${r}= ${e * r}`);
}
console.log('На 3');
let t = 3;
  for (let y = 0; y <= 10; y++){
    console.log(`${t} * ${y}= ${t * y}`);
}
console.log('На 4');
let u = 4;
  for (let i = 0; i <= 10; i++){
    console.log(`${u} * ${i}= ${u * i}`);
}
console.log('На 5');
let o = 5;
  for (let p = 0; p <= 10; p++){
    console.log(`${o} * ${p}= ${o * p}`);
}
console.log('На 6');
let a = 6;
  for (let s = 0; s <= 10; s++){
    console.log(`${a} * ${s}= ${a * s}`);
}
console.log('На 7');
let d = 7;
  for (let f = 0; f <= 10; f++){
    console.log(`${d} * ${f}= ${d * f}`);
}
console.log('На 8');
let g = 8;
  for (let h = 0; h <= 10; h++){
    console.log(`${g} * ${h}= ${g * h}`);
}
console.log('На 9');
let j = 9;
  for (let k = 0; k <= 10; k++){
    console.log(`${j} * ${k}= ${j * k}`);
}
console.log('На 10');
let l = 10;
  for (let z = 0; z <= 10; z++){
    console.log(`${l} * ${z}= ${l * z}`);
}

