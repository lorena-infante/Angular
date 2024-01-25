/* Primitives: string, number, boolean */
let name1:string ='Lorenin';
let age: number = 28;
let isMarried:boolean = true;
let langLearnt:string;

langLearnt='Italian';

/* More advanced: array, object */
let arrStr:string[] = ['holas','las','lolas'];
let arrNum: number[] = [1,2,3];
let arrBool: boolean[] = [true,false];
let hobbies:string[];
hobbies = ['singing', 'learning', 'programming','sleeping'];

/* Objects */
let obj:{
    name2:string;
    age2:number;
    isMarried:boolean;
}

obj = {
    name2:'Lorein',
    age2: 28,
    isMarried: true
}
console.log(obj);
/* Array of objects */

let arrOfObj :{
    name2:string;
    age2:number;
    isMarried:boolean;
}[];

arrOfObj = [
    { name2:'Lorenin',
      age2: 28,
      isMarried:true
    },
    { name2:'Fco',
      age2: 31,
      isMarried:true
    }
]

console.log(arrOfObj);


let objHobbies:{
    hasHobbies:boolean;
    hobbyName:string;
    yearsUsingHobby:number;
};

objHobbies = {
    hasHobbies: true,
    hobbyName:'riding bike',
    yearsUsingHobby: 2
}

console.log(objHobbies);

let arrObjHobbies: {
    name:string;
    hasHobbies: boolean;
    hobbyName: string;
    yearsUsingHobby: number;
}[];

arrObjHobbies = [
    { name:'Fco',
      hasHobbies: true,
      hobbyName:'Judo',
      yearsUsingHobby: 1    
    },
    { name:'Lorena',
      hasHobbies: true,
      hobbyName:'Singing',
      yearsUsingHobby: 1    
    }
]

console.log(arrObjHobbies);

/* Union types*/
let unionTypes: string | number | {};

unionTypes = 'Hola';
unionTypes = 0;
unionTypes = {
    name:'hi'
}

/* Type Aliases */
type Person = {
    name:string;
    age:number;
    hobby:boolean;
};

let lorenin:Person;
let panchis:Person;
let losDos: Person[];

lorenin = {
    name:'Lore',
    age:28,
    hobby:true
};

panchis = {
    name:'Fco',
    age: 31,
    hobby: true
}
losDos = [lorenin,panchis];
console.log(losDos);
/* Functions and types*/

function add1(a:number, b:number){
    return a+b; //return number type is implicit 
}

function show(value:any){
    console.log(value); // returns void. It has no return.
}
// Generics: type definitions that allow functions, classes, interfaces to have a certain type

function insertAtBeginning<T>(arr:T[], value:T){
    const newArr = [value,...arr];
    console.log(newArr);
    return newArr;
};

const fruitsArr:string[] =['banana','apple','pear','peach'];

insertAtBeginning(fruitsArr,'orange');

const numbersArr:number[]= [1,2,3,4];
insertAtBeginning(numbersArr, 0);

/* Classes */

//Long-way
class Student {
    firstName:string;
    lastName:string;
    age:number;
    private courses:string[];
    
    constructor(first:string, last:string, age:number, courses:string[]){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    enrol(courseName:string){
        this.courses.push(courseName);
    }

    listCourses(){
       console.log(this.courses.slice());
       return this.courses.slice();
    }
}

const student = new Student ('Lorena', 'I',28, ['Angular']);
student.enrol('Javascript');
student.listCourses();
console.log(student);

/* Short way */

class Student1 {
    constructor(public firstName:string, public lastName:string, public age:number, private courses:string[]){}
    
    enrol(courseName:string){
        this.courses.push(courseName);
    }

    listCourses(){
        console.log(this.courses.slice());
        return this.courses.slice();
    }

}

const student1 = new Student1 ('Fco','Knt', 31, ['Rust','Python']);
student1.enrol('Data Structures and Algorithms');
student.listCourses();
console.log(student1);

// Interfaces

interface Human {
    firstName:string;
    age:number;
    greet:() => void; //here only the structure is built
}

let lore:Human;

lore = {
    firstName:'Lorencia',
    age:28,
    greet (){
        console.log('Hi!');
    }
}

console.log('Interface Lore', lore);
class Learner implements Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let learner = new Learner;

learner = {
    firstName:'Lorencia Aprende',
    age: 28,
    greet (){
        console.log('Hi!!!!!');
    }
}

console.log('interface Learner', learner);