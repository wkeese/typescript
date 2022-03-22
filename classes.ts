interface PersonInterface {
    send(email: string): boolean
}

abstract class AbstractPerson implements PersonInterface {
    protected readonly firstName: string
    protected readonly lastName: string

    abstract get fullName(): string

    constructor( firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    send(email: string): boolean {
        return true;
    }
}

class Person extends AbstractPerson {
    private readonly ssn: string

    private _age = 0
    public get age() {
        return this._age;
    }
    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(ssn: string, firstName: string, lastName: string) {
        super(firstName, lastName);
        this.ssn = ssn;
    }
}

class Employee extends Person {
    private static headcount = 0

    constructor(ssn: string, firstName: string, lastName: string) {
        super(ssn, firstName, lastName);
        Employee.headcount++;
    }

    static getHeadcount(): number {
        return Employee.headcount;
    }
}

let emp1 = new Employee("171280926", 'John', 'Doe');
let emp2 = new Employee("171280926", 'Jane', 'Doe');

console.log("emp1.fullName", emp1.fullName);
console.log("emp2.fullName", emp2.fullName);
console.log("Employee.getHeadcount()", Employee.getHeadcount());

