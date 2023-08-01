// import
/* ---- Note -----
   => (.mjs) is use to notify node that this file is ES6 module
   => if are importing specific data you have to specify the exact name from the export file in the {} brackets 
   and you cannot change the name of the imported data
   => while importing all data or default data you can assign a new name to the data
*/

// 1. import specific data
import { name, greet } from './36export.mjs';
console.log(greet(), name);

// 2. import all data
import * as greetings from './36export.mjs';
console.log(greetings);

// 2. default data
import myName from './39exportDefault.mjs';
console.log(myName());