"use strict";
// const arr: Array<string> = ["Aman", "Sunny"];
// arr[0].split("");
// console.log(arr);
// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//   return Object.assign(obj1, obj2);
// }
// const mergedObj = merge({ name: "Aman" }, { age: 21 });
// console.log(mergedObj.name);
// function objectKey<T extends object, U extends keyof T>(obj: T, key: U) {
//   return "Value:" + obj[key];
// }
// console.log(objectKey({ name: "aman" }, "name"));
// class Printer<T> {
//   arr: T[] = [];
//   add(item: T) {
//     return this.arr.push(item);
//   }
//   remove() {
//     return this.arr.pop();
//   }
// }
// const printer = new Printer<string>();
// const printerNo = new Printer<number>();
// printer.add("asdsasd");
// printerNo.add(7678687);
// printerNo.add(55636);
// console.log(printer.arr);
// console.log(printerNo.arr);
// ----diff between Generics and Union types:: -----
// class Printer {
//   arr: string[] | number[] = [];
//   add(item: string | number) {
//     return this.arr.push(item);
//   }
// }
// --NOTE------
// let arr: (string| number)[];
// let arr: string[] | number[];
// arr = ["hello", "world"]; // Valid assignment of string array
// arr = [1, 2, 3]; // Valid assignment of number array
// arr = ["hello", 1];
// const printer = new Printer();
// printer.add("asdsasd");
// printer.add(145454);
// const obj = { name: "Aman" };
// const arr: object[] = [{ name: "Aman33" }];
// arr.push(obj);
// console.log(arr.indexOf({ name: "Aman33" }));
// console.log(arr);
// interface objt {
//   title: string;
//   city: string;
// }
// function course(title: string) {
//   let obj: Partial<objt> = {};
//   let obj1: objt = { title: "", city: "" }; //diff between optional and partial
//   obj1.title = "Aman";
//   obj1.city = "Pune";
//   obj.title = title;
//   return obj;
// }
// interface Person {
//   name: string;
//   age: number;
//   city: string;
//   fav: boolean;
// }
// const partialPerson: Partial<Person> = {
//   name: "John",
//   age: 30,
// };
// partialPerson.city = "Ahmd";
// partialPerson.fav = true;
// console.log(partialPerson);
// const array: Readonly<string[]> = ["aman", "sunny"];
// array.pop();
// ------ Decorator ---------
// function decor(target: any, key: any) {
//     console.log("target:", target);
//     console.log("key:", key);
// }
// class School {
//     @decor
//     student = "shiva";
//     teacher = "xyz";
//     teaching() {
//         console.log(this.student + " Good");
//     }
// }
// interface Person {
//     names: string;
//     age: number;
// }
// interface Person {
//     gender: boolean;
// }
//LookUp types
// type FullName = keyof Person;
// const sar: FullName = "namess"; // Correct assignment
// function calcAge(age: number): Person["names"] {
//     return "The born year is  : " + (2023 - age);
// }
// console.log(calcAge(21));
// -----Mapped types------
// type Person = {
//     name: string;
//     age: number;
//     // dob: number;
// };
// type PersonReadOnly<T> = {
//     readonly [key in keyof T]: T[key];
// };
// const person: Partial <PersonReadOnly<Person>> = {
//     name: "shyam",
//     age: 21,
// };
// person.age = 11;
/// <reference path="./main.ts" />
var NameSpace;
(function (NameSpace) {
    class Namespace1 extends NameSpace.Namespace2 {
        getName() {
            return this.name;
        }
    }
    NameSpace.Namespace1 = Namespace1;
})(NameSpace || (NameSpace = {}));
const new1 = new NameSpace.Namespace1();
new1.setName("Sunny");
console.log(new1.getName());
