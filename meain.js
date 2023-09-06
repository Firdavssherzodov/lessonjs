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

// // DECLARASSION
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

// let srt = name1.includes('and')

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


            