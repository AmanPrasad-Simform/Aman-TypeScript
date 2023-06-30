// function palindrome(num) {
//     let str = num.toString().toLowerCase();
//     let stri = str.split("").reverse().join("");
//     console.log(str, stri);
//     if (str === stri) {
//         return true;
//     }
//     return false;
// }
// console.log(palindrome("HelLeH"));
// console.log(palindrome(12344321));
// function anagram(a, b) {
//     let x = a.toString().toLowerCase();
//     let y = b.toString().toLowerCase();
//     console.log(x, y);
//     let ans1 = x.split("").sort().join("");
//     let ans2 = y.split("").sort().join("");
//     if (ans1 === ans2) {
//         return true;
//     }
//     return false;
// }
// console.log(anagram("silent", "LisTen"));
// console.log(anagram(12122, 1212));
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// let n1: number;
// n1 = 123;
// const n2 = 423;
// console.log(add(n1, n2));
// let num: number = 84384;
// console.log(typeof num);
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "aman",
//     age: 20,
//     hobbies: ["lol", "kok"],
//     role: [12, "pop"],
// };
// const juju : string[] | number[] | boolean[] = [0890,"kjhkjh",{}]
// (person.role = [112, "puuop"]), person.role.shift();
// console.log(person);
// enum level {
//     test1,
//     test2 = 3,
//     test3,
//     test6,
//     test7 = "dn",
//     test8 = "a",
//     qqteskkt4 = 7,
//     test5,
// }
// console.log(level);
// let n1 = 12;
// let n2 = 12;
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// let aman: (a: number, b: number) => number;
// aman = add;
// console.log(aman(n1, n2));
// function processValue(value: any) {
//     // No type checking necessary, operations can be performed directly
//     console.log(value * 2);
//     console.log(value.toUpperCase());
// }
// const myValue: any = 10;
// processValue(myValue); // Output: 20
// const anotherValue: any = "Hello";
// processValue(anotherValue); // Output: HELLO
// function processValue(value: unknown) {
//     // Type checking necessary, operations cannot be performed directly
//     if (typeof value === "number") {
//         console.log(value * 2);
//     }
//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//         // console.log(value * 2);
//     }
// }
// const myValue: any = 10;
// processValue(myValue); // Output: 20
// const anotherValue: any = "Hello";
// processValue(anotherValue); // Output: HELLO
// class Car {
//     private n;
//     year;
//     constructor(name: string, year: number) {
//         this.n = name;
//         this.year = year;
//     }
//     validate() {
//         console.log("SLSLSLSL");
//     }
// }
// class BMW extends Car {}
// const bmw1 = new BMW("Audi", 2019);
// const ford1 = new Car("Ford", 2020);
// ford1.validate();
// const ford2 = { validate: ford1.validate() };
// console.log(ford2.validate);
// bmw1.validate();
// class Person {
//     private empty;
//     constructor(public name: string, private age: number) {
//         this.empty = "Engineer";
//     }
// }
// const mandalin = new Person("aman", 21);
// console.log(mandalin);
// class Department {
//     // private readonly id: string;
//     // private name: string;
//     protected employees: string[] = [];
//     constructor(private readonly id: string, public name: string) {
//         // this.id = id;
//         // this.name = n;
//     }
//     describe(this: Department) {
//         console.log(`Department (${this.id}): ${this.name}`);
//     }
//     addEmployee(employee: string) {
//         // validation etc
//         // this.id = 'd2';
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//         super(id, "IT");
//         this.admins = admins;
//     }
// }
// class AccountingDepartment extends Department {
//     constructor(id: string, private reports: string[]) {
//         super(id, "Accounting");
//     }
//     addEmployee(name: string) {
//         if (name === "Max") {
//             return;
//         }
//         this.employees.push(name);
//     }
//     addReport(text: string) {
//         this.reports.push(text);
//     }
//     printReports() {
//         console.log(this.reports);
//     }
// }
// const it = new ITDepartment("d1", ["Max"]);
// it.addEmployee("Aman");
// it.addEmployee("Manu");
// // it.employees[2] = 'Anna';
// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();
// console.log(it);
// const accounting = new AccountingDepartment("d2", []);
// accounting.addReport("!!Something went wrong...");
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.printReports();
// // accounting.printEmployeeInformation();
// abstract class User {
//     name: string;
//     age: number;
//     abstract absName: string;
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }
// class InstaUser extends User {
//     static like: number = 1000;
//     private static instance: InstaUser;
//     memes: string[];
//     // SingleTon and Private Constructor
//     private constructor() {
//         super("Shane", 20);
//         this.memes = ["LOL", "JOL"];
//     }
//     static getInstaInstance() {
//         if (this.instance) {
//             // this == InstaUser
//             return this.instance;
//         }
//         this.instance = new InstaUser();
//         return this.instance;
//     }
//     absName: string = this.name;
// }
// class SnapUser extends User {
//     private content: string[];
//     realCont: string;
//     get realContent() {
//         if (this.realCont) {
//             return this.realCont;
//         } else {
//             throw new Error("NO VALUE");
//         }
//     }
//     absName: string = this.name;
//     set realContent(value) {
//         this.realCont = value;
//     }
//     static fiscalYear = 2023;
//     constructor(cont: string[], realCont: string) {
//         super("Aishu", 19);
//         this.content = cont;
//         this.realCont = this.content[0];
//     }
//     pushContent(con: string) {
//         this.content.push(con);
//         this.realCont = con;
//     }
//     getContent() {
//         console.log(this.content);
//     }
//     getAbsName() {
//         console.log(this.absName, "===----====");
//     }
// }
// // const person = new User("Aman", 21);
// const instaUser = InstaUser.getInstaInstance();
// const snapUser = new SnapUser([], "");
// snapUser.realContent = "nooooo";
// console.log(SnapUser.fiscalYear);
// console.log(snapUser.realContent, "---");
// snapUser.pushContent("69");
// snapUser.getContent();
// snapUser.getAbsName();
// console.log(instaUser, InstaUser.like);
// type aman = {
//     name: string;
//     age: number;
// };
// type aman2 = ["aman", 1000];
// type aman3 = string | number | aman;
// interface aman1 {
//     name: string;
//     age: number;
// }
// interface aman1 {
//     live: boolean;
// }
// const perosn: aman1 = {
//     name: "perosn",
//     age: 21,
//     live: false,
// };
// interface person1 extends person2 {
//     name: string;
//     age: number;
// }
// interface person2 {
//     live: boolean;
//     gender: string;
// }
// const person1: person1 = {
//     name: "person1",
//     age: 21,
//     live: false,
//     gender: "male",
// };
// type teacher = {
//     name: string;
//     age: number;
// };
// type admin = teacher & {
//     role: string;
//     salary: number;
// };
// const Aman: demop = false;
// type demop = string | number | boolean;
// interface demoq {
//     readonly name: string;
//     age: number;
// }
// const demoq2: demoq = {
//     name: "demop",
//     age: 21,
// };
// demoq2.age = 25;
// interface shyam {
//     age?: number | string;
// }
// interface shyam1 {
//     name: string;
// }
// type dixit = string | number;
// type shyam = {
//     age?: number;
// };
// type shyam1 = {
//     name: string;
// };
// class perso implements shyam, shyam1 {
//     name;
//     age;
//     naam: dixit;
//     constructor(n: string, age: number) {
//         this.name = n;
//         this.age = age;
//         this.naam = 67;
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// ::type Guards ::
// type combine = string | number;
// function sum(a: combine, b: number) {
//     if (typeof a === "string") {
//         return a + b;
//     }
//     return false;
// }
// console.log(sum("Aman", 89));
// type teacher = {
//     name: string;
//     exp: number;
// };
// type student = {
//     name: string;
//     class: number;
//     subjects: string[];
// };
// type amalgamation = teacher | student;
// function school(info: amalgamation) {
//     console.log(info.name);
//     if ("subjects" in info) {
//         console.log(info.subjects);
//     }
//     if ("exp" in info) {
//         console.log(info.exp);
//     }
// }
// school({
//     name: "aman",
//     // subjects: ["EVS"],
//     exp: 21,
// });
// class Car {
//     drive() {
//         console.log("Driving...");
//     }
//     wheels() {
//         console.log("4 wheels");
//     }
// }
// class Truck {
//     loadCargo(amount: number) {
//         console.log("Loading cargo ..." + amount);
//     }
//     drive() {
//         console.log("Driving dfghfgghc...");
//     }
// }
// type Vehicle = Truck | Car;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Car) {
//         vehicle.wheels();
//     }
// }
// console.log(useVehicle(v1), "llll");
// const num: any = 9090;
// console.log(typeof num);
// -------Type Assertion-----------
// let num: any = 30;
// let num1 = num as string;
// console.log(num1.toLowerCase()); //Though it is wrong it doesn't gives us compiletime error but runtime error
// let num: any = 30;
// let num1 = (num as string).toLowerCase();
// console.log(num1);
// let value: any = 10;
// let numberValue = (value as string).toLowerCase(); // Type casting from string to number
// console.log(numberValue);
// ------Type Casting ---------
// let num: string = "ui";
// let aman: number = num;
// console.log(aman, typeof aman);
// ------Function overloads--------
// function overload(a: string, b: string): string;
// function overload(a: number, b: number): number;
// function overload(a: string | number, b: string | number): string | number {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// let result1 = overload("gdfgdf", "dfgfgdgdr"); // Result type: string
// let result2 = overload(20, 20); // Result type: number
// const variable = null;
// const variable = "";
// const vari = variable ?? "AA";
// console.log(vari);
