var a = 1, b = 1, c, d;
c = ++a;
alert(c);                   // 2 переменной с присваивается инкремент а, т.е. 2

d = b++;
alert(d);                   // 1 переменной d присваивается значение b, после чего b увеличивается на 1

c = (2 + ++a);
alert(c);                   // 5 переменной с присваивается значение 2 + инкремент а (=3).

d = (2 + b++);
alert(d);                   // 4 переменной d присваивается значение 2 + b (=2), после чего b увеличивается на 1

alert(a);                   // 3 а = 3
alert(b);                   // 3 b = 3

var a = 2;
var x = 1 + (a *= 2);       // x = 5

var num1, num2, num3;
num1 = prompt('Введите число 1:');
num2 = prompt('Введите число 2:');
console.log(num1);
console.log(num2);
if (num1 >= 0 && num2 >= 0) {
    num3 = +num1 - +num2;
    console.log(num3);
} else if (num1 < 0 && num2 < 0) {
    num3 = +num1 * +num2;
    console.log(num3);
} else {
    num3 = +num1 + +num2;
    console.log(num3);
}

//var a;
//a = +prompt('Введите число от 0 до 15');
//switch (a) {
//    case a < 0:
//        alert('Число меньше 0!');
//        break;
//    case :
//        alert ('Число больше 15!');
//        break;
//    default:
//        for (; a <= 15; a++) {
//            console.log(a + ' ');
//}
//        }        