//Задание 1
let a = new Set()
a.add('e')
a.add('r')
a.add('i')
a.add('k')
a.add('t')
a.add('h')
a.add('e')
a.add('b')
a.add('e')
a.add('s')
a.add('t')
console.log(a)
//Задание 2

let btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    let m = ['a','b', 'c']
    let text2 = document.querySelector('.text2')
    let inpz = text2.value
    m.push(inpz)
    console.log(m)
}
//Задание 3
let a2 = new Set();
a2.add('k')
console.log(a2)
let btn1 = document.querySelector('.btn1');
let inputText = document.querySelector('.text1');
btn1.onclick = function () {
let userValue = inputText.value;
document.querySelector('.out1').innerHTML = `${checkValue(userValue)}`;

function checkValue(value) {
for (let b of a2) {
if (b === value) {
return true;
}
}
return false;
}
}
//Задание 4
let btn2 = document.querySelector('.btn2');
btn2.onclick = () => {
    let g = [1,2,3,4,5,6,7,8,9,10,11]
console.log(g)
    for(let b2 of g) {
        if(g[b2] > 5){
            console.log(g[b2])
        }
        
    }

}