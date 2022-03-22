// Simple typescript.

let five: number;
five = 5;

// Type inference
const three = 3;

// Functions

// Note: no good way to make params immutable, see
// https://stackoverflow.com/questions/63793576/immutable-function-parameter-typescript !
function add(a: number, b: number) {
    return a + b;
}

console.log("add(three,5):", add(three,5));

// Inferred typing for elements in structure.
const foo = {a: "hello", b: 5};
// error: add(foo.a, foo.b);
// also error: foo.a = 3;

// Note: Return type inferred.
function addReturnTypeInferred(a: number, b: number) {
    return a + b;
}


function addArray(ary: readonly number[]): number {
    return ary.reduce((x: number, y: number): number => x + y, 0);
}

console.log("addArray([three,5,9]):", addArray([three,5,9]));

function addN(...ary: readonly number[]): number {
    return ary.reduce((x: number, y: number): number => x + y, 0);
}

console.log("addN(three,5,9):", addN(three,5,9));


// Defaults for positional parameters
// (Type of b is inferred, and so is return type.)
function addWithDefault(a: number, b = 0) {
    return a + b;
}
console.log("addWithDefault(3)", addWithDefault(3));
console.log("addWithDefault(3, 5)", addWithDefault(3, 5));

// Lambda one
const addLambda1: (a: number, b: number) => number = (a, b) => a + b;
console.log("addLambda1(three, 5):", addLambda1(three, 5));

// Lambda two
const addLambda2 = (a: number, b: number) => a + b;
console.log("addLambda2(three, 5):", addLambda2(three, 5));

// Inline type
const person: {
    name: string;
    age: number
} = {
    name: 'John',
    age: 25
};
console.log(`inline type person ${person.name} ${person.age}`);

// Tuple
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// Enum
enum Priority { low, medium, high};
function printPriority(p: Priority): void {
    console.log("priority is", p);
}
printPriority(Priority.high);

// Union type
type alphanumeric = string | number;
let input: alphanumeric;

// String literal type.
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid

// String literal with type
type MouseEvent2 = "click" | "dblclick" | "mouseup"| "mousedown";
let mouseEvent2: MouseEvent2;
mouseEvent2 = 'click'; // valid

// Simple Interface.
interface Product {
    id: number,
    name: string,
    price: number
}
const makeProduct = (x: number, y: number): Product => ({
    id: x,
    name: "foo",
    price: y
});
const myProd = makeProduct(3, 5);
console.log("interface", myProd.id, myProd.price);

// Extended Interface
interface DiscountedProduct extends Product{
    discount: number
}
const makeDiscountedProduct = (x: number, y: number, d: number): DiscountedProduct => ({
    id: x,
    name: "foo",
    price: y,
    discount: d
});
const myDiscountedProd = makeDiscountedProduct(3, 5, 1);
console.log("extended interface", myDiscountedProd.id, myDiscountedProd.price, myDiscountedProd.discount);


// Defaults for options bags.
interface Options {
    id?: number,
    name?: string,
    price?: number
}
function hashFunc({
    id = 123,
    name = "default name",
    price = 123
}: Options) {
    console.log(`hashFunc, id=${id}, name=${name}, price=${price}`);
}

hashFunc({});
hashFunc({name: "custom name"});
hashFunc({id: 456});

// Overloaded functions
function addOverloaded(a: number, b: number): number;
function addOverloaded(a: string, b: string): string;
function addOverloaded(a: any, b: any): any {
    return a + b;
}
console.log("addOverloaded(1, 1)", addOverloaded(1, 1));
console.log("addOverloaded('1', '1')", addOverloaded('1', '1'));

