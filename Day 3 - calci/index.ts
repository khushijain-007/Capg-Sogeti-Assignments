//console.log("hii");

//let arr3: readonly (string|number)[]=[234, "jhdghg", 3456, 4567, "56234"]
//arr3.push(3456)

// interface Person{
//     name:string,
//     age:number,
//     gender?:string
// }

// let obj:Person={
//     name:"Ansh",
//     age:18,
//     gender:"male"
// }

//OOPS
// class car{
//     brand:string;
//     color:string;
//     display():void{


//     }
//     constructor(brand:string,color:string){
//         this.brand=brand;
//         this.color=color;
//         this.display(){

//         };
//     }

//     start():void{
//         console.log("this is my car");
//     }
// }

// let c=new car("maruti","red");
// console.log


// for practice
// console.log("start");

// setTimeout(() => {
//     console.log("task completed");
// }, 5000)

// setInterval(() => {
//     console.log("task completed 2");
// },1000)

// console.log("end");



// Topic - Promises
// Types - Fulfilled, rejected and pending

// let p1=new Promise<string>((resolve, reject)=>{
//     let success=true;
//     if(success!=true){
//         resolve("login success")
//     }
//     else{
//         reject("unsuccessful")
//     }
// })
// console.log(p1);
// p1.then(()=>{

// }).catch(()=>{

// }).finally(()=>{
    
// })


// Task 1 Promise
// function getUser():Promise<string>{
//     return new Promise((resolve,reject)=>{
//         resolve("user is there")
//         reject("user not found")
//     })
// }

// getUser().then((ele)=>{
//     console.log(ele);

// }).then((res)=>{(console.log(res));
// })



// Task 2 Promise
// function calculate(num: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//         if (num <= 0) {
//             reject("Number must be greater than 0");
//         } else {
//             resolve(num);
//         }
//     });
// }

// calculate(10)
//     .then((value) => {
//         console.log("Addition:", value + 5);
//         console.log("Subtraction:", value - 3);
//         console.log("Multiplication:", value * 2);
//         console.log("Division:", value / 2);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("Operation completed");
//     });


//Second method
// let num1: number = 10;
// let num2: number = 5;
// let p1 = new Promise<[number, number]>((resolve, reject) => {
//     if (num1 > 0 && num2 > 0) {
//         resolve([num1, num2]);
//     } else {
//         reject("Numbers must be greater than 0");
//     }
// });

// p1.then(([a, b]) => {
//     console.log("Addition:", a + b);
//     console.log("Subtraction:", a - b);
//     console.log("Multiplication:", a * b);
//     console.log("Division:", a / b);
// })
// .catch(() => {
    
// })
// .finally(() => {
    
// });


// Third method
// let p1 = new Promise<number>((resolve)=>{
// resolve(10);
// })
// p1.then(num=>num*10
// ).then(num=>num*20).then((res)=>{console.log(res);
// })

// Fourth method
let p1 = new Promise<number>((resolve)=>{
resolve(10);
})
p1.then(num=>num*10
).then((res)=>{console.log(res);
})
.then((res)=>{console.log(res);
})