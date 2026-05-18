
// >>>>>>>>>>>>>>>> problem 1 >>>>>>>>>>>
function filterEvenNumbers(numbers: number[]): number[] {

    let evenNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// >>>>>>>>>>>>>>>> problem 2 >>>>>>>>>>>
function reverseString(str: string): string {
    let reversed: string = "";

    for (let i = str.length ; i >= 1; i--) {
        reversed = reversed + str[i - 1];
    }

    return reversed;
}


// >>>>>>>>>>>>>>>> problem 3 >>>>>>>>>>>
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "string") {
        return "String";
    } else if (typeof input === "number") {
        return "Number";
    }; 
}
checkType("Hello"); 

// >>>>>>>>>>>>>>>> problem 4 >>>>>>>>>>>
// Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");


// >>>>>>>>>>>>>>>> problem 5 >>>>>>>>>>>
// Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) : Book & { isRead: boolean } {
    const isRead: boolean = true;
    return {
        ...book, 
        isRead
    };
}; 

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// >>>>>>>>>>>>>>>> problem 6 >>>>>>>>>>>
// Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}; 

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}; 

const student1 = new Student("Alice", 20, "A");

// >>>>>>>>>>>>>>>> problem 7 >>>>>>>>>>>
// Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

function getIntersection(array1: number[], array2: number[]): number[] {
    const intersection: number[] = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            intersection.push(array1[i]);
        }
    }
    return intersection;
}

console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]


