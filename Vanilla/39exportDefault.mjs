// => export default only exports one value
// => default is used to fallback a value so usally function has a return value

// 1. name of the function is optional
/* export default function myName () {
    return "Hello my name is Tirth";
} */

// 2. using arrow function and export indirectly requires name of the function
const name = () => {
    return "Hii my name is Tirth";
}
export default name;