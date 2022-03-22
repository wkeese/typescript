// --- Functions
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// Type set explicitly.
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);

// Inferred type.
let numbers2 = [1, 5, 7, 4, 2, 9];
let randomEle2 = getRandomElement(numbers);
console.log(randomEle2);


// Extends.
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}


function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
prop({a: 1, b: 2, c: 3}, "c");

type keys = "a" | "b" | "c";
let key: keys
prop({a: 1, b: 2, c: 3}, key);

// --- Builtin Classes
const m = new Map<number, string>([
    [1, "hello"],
    [2, "goodbye"]
]);
console.log("Map test", m.get(1));

// Custom interface and class
interface StackInterface<T> {
    push(element: T): void;
    pop(): T;
}

class Stack<T> implements StackInterface<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
let numberStack = new Stack<number>(5);
numberStack.push(5);
