// const adress = prompt('api adressnini kirinting')

// function salom(adres) {
//    adres = adress.split(".")
//     console.log(adress);
//     return adress
// }

// salom(adress)

// console.log(13 && 11);

//FOR
// for (let index = 0; index <= 100 ;   index++   ) {
//  if (index % 2 == 0 ) {
//     console.log(index);
//  }

// }

//MAP
// const numbers =[1,2,3,4,5]

// //  const newnambers = numbers.map( (salom) => salom ** 2 )

// // console.log(newnambers);
// const new1 = []

//FOREACH
// numbers.forEach ((salom) =>  {
//    new1.push(salom ** 2)
//    })

// console.log(new1);

//MAP
// const movei = [
// {name : 'Firdavs', id:1, rating : 9},
// {name : 'Aboss', id:2, rating : 8},
// {name : 'ALISHER', id:3, rating : 7},
// {name : 'Eshak', id:4, rating : 6}
// ]

// const m = movei.map((moves)=>{
//     // return  {name : moves.name  , id : moves.id, rating: moves.rating + 1 }
//   if (moves.id == 3) {
//     return moves.name = 'salom abos';
// }
// else{

// }

// })
// console.log(movei);

// let a = prompt('nima kerak')

// // // DECLARASSION
// function nono() {
//   if(a == 'somsa' ){
//   var son = prompt('nechta')

//   if (son) {
//     alert('mana senga' + ' ' + son)
//   } else{
//     alert('qolmagan')
//   }
//   }
//   else{
//     alert('bir gap aytaymi tur yuqol')
//   }
// }

// nono()

// const malumot = [
//     {
//         name:'osh'
//     },
//     {
//         name:'somsa'
//     },
//     {
//       name:'lavash'
//     }
// ]
// let a1 = prompt('nima kerak');
// malumot.forEach((el)=>{
//   console.log(el);

//   if(el.name == a1 ){
// alert(el.name + ' ' + 'bor')
//   }
// }

// );

//  function meme() {

// let nozim = prompt('nima kerak')
//     if (nozim == malumot[0,1].name) {
//         alert('salom')
//     }else{
//         alert('error')
//     }
//  }

//  meme()
//FOR
// for (let i = 0; i < 10; ++i) {
//   // const element = array[i];
//   if(i == 5) {
//     break
//   }
//   console.log(i);
// }

//

// const arr = [1,2,3,4,5,6,7,6,9,7,9999,9,8]

//SPLICE
// arr.splice(length-1,0,'salom')

//  arr.splice(length-1, 1)

// console.log(arr);

//FINDINDEX
// const numbers = [1,2,55,4,5,3,'salm','salm'];

// const ser = numbers.findIndex(threenum)

// function threenum(value) {
//     return value === 'salm' ;
// }

// console.log(ser);

// const res = '12345678'

// const num = [1,2,3,4,5,6]

//FROM
// const salom = Array.from(num,)

// console.log(salom);

// const malumot =['salom','nima','gap','mayl']
// const new1 = 'nima'

//FILTER ///FIND
// const red = malumot.filter( t=>{

//     return t.length == 4

// });

// console.log(red);

// REDUCE
// const numbersavalue = [1,2,3,4,5,6]

// const value1 = numbersavalue.reduce((num1,num2)=>{
// return num1 + num2;
// }

//    ,10) ;

// console.log(value1);

//includes
// let name = 'Car and Firdavs'

//  let p =  prompt('nima kerak')

//  if (name.includes(p)) {
//      alert('bor')
//  }alert('yuq')

//String methods
// let name1 = 'Car and Firdavs sherzodov'
// let names = 'firdavs'

// let srt = names.slice(1,2)
// const srt = names.substring(5,-1)
// let srt = name1.replace('and','')
// let srt = name1.indexOf('n')
// let srt = name1.lastIndexOf('a')
// let srt = name1.startsWith('Car')
// let srt = name1.endsWith('sherzodov')
//Home Task
// 'fidusuifdsbibsdfuibsdfuibfsdiubfsdi Iskandar'
// berilgan satrni oxirgi so'zi  "Iskandar bilan tugaganligini tekshiring"

// let srt = name1.includes('salom')

// if (name1.endsWith('sherzodov')) {
//     alert('bor')
// }

// let name1 = 'Firdavs'.toUpperCase()
// let age = 16
// console.log(`Hello ${name} how are you bro ${age}`);

// console.log(srt);
// const numbers = [1,2,3,4,5,6]

// const a = numbers.filter((t)=>{
//  if (t == 5) {
//     alert('bor')
//   }  else{
// alert('yuq')
//   }
// }

// )
// console.log(a);

// let a =  prompt('nima kerak')
// let b = a.slice(1)
// let srt = a.charAt(0)
// let t = 'Firdavs'

// if (srt) {
//   alert(srt.toUpperCase() + b + ' ' + t)
// }

// console.log('N'+'23'/23 +'DK');

// let arr = [1,2,3,4]
// arr.something = 9;
// console.log(!0 || null || 9);

// let funk = () => this;
// console.log(funk);

//  let a = 13 < 12 ? alert('ha togri'):alert('yuq no tigri');

// destructuring

// const [o,g ,...boshqa] = [ 'olma1','gilos1','nok1','uzum1']

// // const o = mevalar[0];
// // const g = mevalar[1];
// // const n = mevalar[2];
// // const u = mevalar[3];

// console.log(o,g,boshqa)

//SEtTIMEOUT

// function callme() {
//     alert('salom dunyo')
// }
// // setTimeout(callme,5000)

// let a = 0;

// const timer = setInterval(()=>{
// a++
// console.log(a);
// },1000)

// setTimeout(()=>{
//     clearInterval(timer)
// },10000)

// const car = {
// name:'juguli',
// color:'aqua',
// balon:5,
// speeds: function () {
//     console.log('100 km/h');
// }
// }

// Object.prototype.hello = function ( ) {
//     console.log('hello nima gaplar');
// }

// const bus = Object.create(car)

// bus.name = 'SOMSA';
// bus.number = 20;

// const srt =  new String('la rihata fid dunyo')

// const buy = Object.create(srt)
// let internet = false ;

// const getData = () => {
//    return  new Promise((resolve,reject) =>{
// if(internet){
//    resolve('some data');
// }else{
// reject('some error')
// }
//    }
// )}

// getData().catch((async)=>{
//     console.log(async);
// }).catch((error)=>{
// console.log(error);
// }

// )

// function getName(city1,city2,city3,city4) {
//     console.log(this.fname + ' ' + this.lname +  ' Salom nima gaplar' +  ' ' + city1 + ' ' + city2 + ' ' + city3 + ' '+ city4);
// }

// CALL, BIND ,APPLY
// let names = {
// fname:'Firdav',
// lname:'sherzodov',
// getadd:function(a,v){
// console.log(this.fname + ' ' + this.lname + ' ' + a + ' ' + v);
// }

// }

// const names2 = [
//     'Sherzodov',
//     'Firdavs'
// ];

// const seti =['qandaye','tinchmi','bolyaptimi','hechnima yuq']

// const bindName =  getName.bind(names);

// bindName('salom 1','salom 2','salom 3','salom 4')

// names.getadd.call(n'salom','nima')

//   username: "mor_2314",
//   password: "83r5^_"

//   const number = 20;

//   number = 30;
//   console.log(number);

//   let num = number;
//    num = 25;
//    console.log(num)

// const person = {
// name:'Sodiq',
// age:19
// }
// person['name'] = 34;

// console.log(person.name);

//

// let x = 10;
// let y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log( x / y );
// console.log(x % y);
// console.log(x ** y );

//DECASION
// console.log(--x);

// INCARASION
// console.log(++x);

// console.log(x >= y);

// console.log(x !== '5');

// console.log('2' === 2);

// let person = {
//     name:'firdavs',
//     age:34
// }

// console.log(person.name && 'somsa');
// let qiymat = (5 + 10) || 5 * 5;
// console.log(qiymat);
// let mijoz = false;

// let result = mijoz ? '20% chegirma beriladi' :'5% briladi';
// console.log('sizga',result);

// let isopen = false;

// console.log(!isopen);

// let a ;
// let b = null;
// let c = undefined;
// let d = 4;
// let e = 'five';
// let f = a || b || c || !d || !e ;
// console.log(f);

// let  a  = 5;
// let b = 10;

// let c = a;
// a = b
// b = c

// let srt = [
//     color1,
//     color2
// ]
// let srt2 = [
//     color2,
//     color1
// ]

// console.log(srt);
// console.log(srt2);

// console.log(a);
// console.log(b);

// class Car {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.lastName = options.lastName
//     }

//     speed(){
//         console.log('100/ km');
//     }
// }

// const css = new Car(options= {
//     name: 'Firdavs',
//     age: 17,
//     lastName: 'Sherzodov'

// }
// )

//  class Bus extends Car{}

// const Man = new Bus (
// options = {
//  name : 'Man',
//  age:19.0,
//  lastName:'Toshmonov ',
//  oldName:'Eshmonov'
// })

//  console.log(  (false && true) || ( null || true) && '' && false || (false || undefined));

//  for (let index = 0; index < 50; index++) {
//   if ( index   0) {
//     console.log(index);

//   }

//  }

// for(let i = 0; i<= 10; i++){
// if ( i%2 !==0) {
//     console.log(i.toString());
// }
// }

// let a = 20 ;
// while(a > 0  ){
// // console.log('salom nima gaplar')

//     console.log(a);

// --a
// }

// let sualt = 100;
// do{
//    console.log(sualt);
//    --sual

// }while(sualt >= 1);

// let i = 0 ;

// while(  i < 20 ){
// if(i % 2 !==0){
// i++
// continue
// }
// }

// let colors = ['oq','qora','sariq'];

// for(let index in colors)
// console.log(colors[index]);

// for(let color of colors)
// console.log(color);

//Amaliyot mash

// let getSaa = addnumber(2,4);

// function addnumber(params1,params2) {
// return (params1 > params2) ? params1 : params2;
// }

//  console.log(getSaa);
// let user = isLandscape(11,10);

// function isLandscape(width,height) {
//  return (width > height);
// }

// console.log(user);

// let add = PlusAdd(15);

// console.log(add);

// function PlusAdd(input) {
//     if (typeof input !== "number")
//         return 'Son emas';
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FzzBuzz';
//     if (input % 3 === 0)
//         return 'Fizz';
//     if (input % 5 === 0)
//         return 'Buzz';

//     return input ;

// }

// const free = count(4,2)

// console.log(free);

// function count(params1,params2) {
//  return (params1 > params2) ? params1 :params2;
// }

//  let count = isLandscape(2,4)

//  console.log(count);
// function isLandscape(width,height) {
//  if (width > height) {
//     return true
//  }else{
//     return false
//  }
// }

// let count = FzzBuzz(7);

// console.log(count);

// function FzzBuzz(params) {
//     if (typeof params !== 'number') {
//         return 'Son emas'
//     } if (params % 3 === 0 && params % 5 === 0) {
//         return 'FzzBuzz'
//     } if (params % 3 === 0) {
//         return "Fzzz"
//     } if (params % 5 === 0) {
//         return 'Buzz'
//     } return params;

// }
// const SPEED_LIMIT = 70;
// const KM = 5;
// const Max = 12 ;

// const free = chack(135);

// console.log(free);

// function chack(speed) {
//     if (speed < SPEED_LIMIT) {
//       return 'Ok'
//     }else{
//      let  points = Math.floor( (speed - SPEED_LIMIT) / KM);
//      if (points >= Max) {
//       return 'Prava Reshat';
//      }else{
//         return points;
//      }
//     }
// }
// const free = sum(10);
// console.log(free);

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) {
//     if ((i % 3 === 0) || (i % 5 === 0)) {
//       sum += i
//     }
//   }
//   return sum;
// }
// let car = {
//   model:'Nexia',
//   make:'2',
//   year :18,
//   price:5000
// }

// function name1(obj) {

//   for(let key in obj ){
//   if(typeof obj[key] === 'string'){
//     console.log(key,obj[key]);
//   }
// }
// }

// name1(car)

// ONINPUT

let input = document.querySelector(".input");

input.oninput = () => {
  let love = document.querySelector(".fa-solid");
  //  love.style.color = input.value;
  document.body.style.backgroundColor = input.value;
  // console.log(input.value);
};

// showPrimenumber(20);

// function showPrimenumber(limit) {
//   for (let number = 2; number <= limit; number++) {
//     if (isPrime(number)) console.log(number);
//   }
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) return false;

//   return true;
// }

// let circle = {
//     radius:10,
//     location:{
//         x:1,
//         y:1
//     },
//     drew:function(){
//         console.log('salong');
//     }
// }

// circle.drew();

// INPUT IMG SENT

// let img = document.querySelector('#img');
// let input1 = document.querySelector('.inputt');
// input1.addEventListener('change',(e)=>{
// img.src = URL.createObjectURL(e.target.files[0])
// })

// FICTORY FUNCTION

// function fictory(radius){
//  return {
//     radius,
//     location:{
//         x:1,
//         y:1
//     },
//     drew:function(){
//         console.log('salong');
//     }
// };

// }

//  const circle1 = fictory(2);
//  console.log(circle1);

// const circle2 = fictory(4);
// console.log(circle2);

// CONSTRUCTOR FUNCTIONS

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("CONSTRUCTOR FUNCTIONS");
//   };
// }

// const circle = new Circle(3)
// console.log(circle);
// circle.color = 'yellow';

// const circle22 = new Circle(22)
// console.log(circle22);
// delete circle22.color;

// function Createobj(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }
// const obj1 = Createobj("Shomirza", 66);

// console.log(obj1);

// const obj2 = Createobj('Firdavs',55)
//  obj2.backgroundColor  = 'white';
// console.log(obj2);

// function Firdavs(params, params2) {
//   this.name = params2;
//   this.age = params;
//   this.development = function (a, b) {
//     this.name1 = a;
//     this.func = b;
//   };
//   this.mirrite = true;
// }

// const firdavs = new Firdavs(17, "firdavs");
// firdavs.development("salom", "hello");
// console.log(firdavs);

// CONSTRUCTOR AND OBJECT FUNCTIONS
// let person = {
//   rusmi: " msi ",
//   gtx: 3050,
//   core:5,
//   color: 'green'
// };

// let per = person.rusmi.toUpperCase();

// function constur(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let use = new constur( person, 17);
// use.color = person.color
// console.log(use);

// const data = new Date();
// let soat = data.getHours();

// let minut = data.getMinutes();

// let secunt = data.getSeconds();

// let yil = data.getFullYear();

// setInterval(() => {
//   console.log(soat + ' ' + minut + ' ' + secunt );
// }
// ,1000)

// function Circle(params) {
//   this.raduis = params;
//   this.drew = function () {
//     console.log("labu guju");
//   };
// }

// console.log(Circle.name , Circle.length, Circle.constructor);

// const Circle2 = new Function('name',`
// this.raduis = name;
// this.drew = function(){
//   console.log('labu guju');
// }
// `)
//  const circle = new Circle2('firdavs')
//  circle.backgroundColor = 'yellow';
//  console.log(circle);

//FUNCTION CHAQIRISH
// let salom  =Circle.call({},4);
// Circle.apply({}, [3])

// console.log(salom);

// function greet(name) {
//   console.log("Hello : " + name);

// }

// let person = {
//   name: "Firdavs",
//   age: 17,
// };

// greet.apply({}, ['son']);

// VALUE TYPES yani PERIMETIV TYPE
// let a = 5 ;
// let b = a ;
//  a = 10;
//   console.log(a,b);

// REFERNCE TYPES yani NOPERIMETIV TYPE
//   let person = {
//     value:10
//   }
//  let y  = person
//  y.value = 20;
//  console.log(y);

// let numver = {value :1};

//  function getter(numver) {
//   numver.value++;
//   console.log('hello ,' , numver);

//  }
//  getter(numver)

//  console.log('by ', numver);

// let circle = {
//   raduis: 1,
//   drew() {
//     console.log("doira");
//   },
//   age: 17,
// };

// let circle1 = {
//   raduis: 12,
//   drew() {
//     console.log("doira12");
//   },
//   age: 17,
// };

//  for(let key in circle)
//  console.log( circle[key] );

// for (let entry of Object.entries(circle)) console.log(entry);

//  if ('age' in circle) {
//   console.log('bor bacham');
//  }else{
//   console.log('yuq bacham');
//  }

// OBJECT CLONE 1 OLISH
// let clone = {};
//  for(let key in circle)
// clone[key] = circle[key];

// OBJECT CLONE 2 OLISH
// const clone = Object.assign({color:'yellow'},circle,[circle1] )

// OBJECT CLONE 3 OLISH
// const clone ={...circle }

// console.log(clone);

// CALL STACK AND HEAP
// let arrary = [1, 2, 3, 4, [1, 2, 3, 4]];

// let arrary2 = arrary;
// arrary2[4] = 5;

// let a = arrary[4];
// // 5

// arrary = null;
// arrary2 = null;

// let b = a;
// b = 10;

// console.log(arrary, "ARRARY");
// console.log(arrary2, "ARRARY,2");
// console.log(a, "a");
// console.log(b, "b");

// VS CODE color =  Dark Modern



// Math() Object


console.log(Math.PI);
// -----------------------------------------------------------------------------------------
// 1
// Math.round(); methodi yordamida berilgan kasir soni butun song a aylatirishimiz mumkin
// natija let x = 4.4; : 4
// natija let y = 4.5; : 5
// 2
// Math.pow( x , y) methodi o'ziga ikkita paramertir qabul qiladi bu yordamida berilgan x argementini y dagi darajasini chiqaradi beradi
// natija Math.pow(8,2) : 64
// 3 
// Math.rondom() methodi biz 0 va 1 oralig'idagi tasodifiy qiymatni olib beradi 
// -------------------------------------------------------------------------------------------
 // JavaScript da String ikki turga bo'linadi birinchisi String ikkinchisi String Oblecti 
 // Primitive String let a = 'string'; : String
 // String Object let a  = new String() : String Object
// 1.Savol?
 //string primetiv turga kirsa nega unda method va hodisalae chiqayapdi chundi
 // chunki biz Stringa . bilan murojjat qilganimizda javascript unga birdan String Object ni method va hodisalrini beradi 
// Casesinsevitiv textdagi katta yoki kichik ligiga ham etibor beradi
// String Objectlari iminiyoutuble  yani O'zgarmas hisoblanadi, Lekin biz unga replce method ishlash natijasida bizga yangi Stirng methodi qaytariladi

 
let greting = ' Asalamu alekum ';
// String methods 
// let greting2 = new String(); 
// console.log(greting[4]);
// console.log(greting.indexOf('ek'));
// console.log(greting.replace('salamu','salimjon'));
// let greting3 = greting.replace('salamu', 'salimjon') 
// console.log(greting.toUpperCase());
// console.log(greting3.toLowerCase());
// console.log(greting.trim());

// baketik  `` ;

let text  =  'Ertalab turganingda \'Xayitle tong\' deyish kerak';

console.log(text.split(' ' ));
 
let work = `
'salom'
dadda
adadsd,sdfdsidsfb   d sbf
`;
console.log(work);

 




 
