var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Primitives: string, number, boolean */
var name1 = 'Lorenin';
var age = 28;
var isMarried = true;
var langLearnt;
langLearnt = 'Italian';
/* More advanced: array, object */
var arrStr = ['holas', 'las', 'lolas'];
var arrNum = [1, 2, 3];
var arrBool = [true, false];
var hobbies;
hobbies = ['singing', 'learning', 'programming', 'sleeping'];
/* Objects */
var obj;
obj = {
    name2: 'Lorein',
    age2: 28,
    isMarried: true
};
console.log(obj);
/* Array of objects */
var arrOfObj;
arrOfObj = [
    { name2: 'Lorenin',
        age2: 28,
        isMarried: true
    },
    { name2: 'Fco',
        age2: 31,
        isMarried: true
    }
];
console.log(arrOfObj);
var objHobbies;
objHobbies = {
    hasHobbies: true,
    hobbyName: 'riding bike',
    yearsUsingHobby: 2
};
console.log(objHobbies);
var arrObjHobbies;
arrObjHobbies = [
    { name: 'Fco',
        hasHobbies: true,
        hobbyName: 'Judo',
        yearsUsingHobby: 1
    },
    { name: 'Lorena',
        hasHobbies: true,
        hobbyName: 'Singing',
        yearsUsingHobby: 1
    }
];
console.log(arrObjHobbies);
/* Union types*/
var unionTypes;
unionTypes = 'Hola';
unionTypes = 0;
unionTypes = {
    name: 'hi'
};
var lorenin;
var panchis;
var losDos;
lorenin = {
    name: 'Lore',
    age: 28,
    hobby: true
};
panchis = {
    name: 'Fco',
    age: 31,
    hobby: true
};
losDos = [lorenin, panchis];
console.log(losDos);
/* Functions and types*/
function add1(a, b) {
    return a + b; //return number type is implicit 
}
function show(value) {
    console.log(value); // returns void. It has no return.
}
// Generics: type definitions that allow functions, classes, interfaces to have a certain type
function insertAtBeginning(arr, value) {
    var newArr = __spreadArray([value], arr, true);
    console.log(newArr);
    return newArr;
}
;
var fruitsArr = ['banana', 'apple', 'pear', 'peach'];
insertAtBeginning(fruitsArr, 'orange');
var numbersArr = [1, 2, 3, 4];
insertAtBeginning(numbersArr, 0);
/* Classes */
//Long-way
var Student = /** @class */ (function () {
    function Student(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        console.log(this.courses.slice());
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Lorena', 'I', 28, ['Angular']);
student.enrol('Javascript');
student.listCourses();
console.log(student);
/* Short way */
var Student1 = /** @class */ (function () {
    function Student1(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student1.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student1.prototype.listCourses = function () {
        console.log(this.courses.slice());
        return this.courses.slice();
    };
    return Student1;
}());
var student1 = new Student1('Fco', 'Knt', 31, ['Rust', 'Python']);
student1.enrol('Data Structures and Algorithms');
student.listCourses();
console.log(student1);
var lore;
lore = {
    firstName: 'Lorencia',
    age: 28,
    greet: function () {
        console.log('Hi!');
    }
};
console.log('Interface Lore', lore);
var Learner = /** @class */ (function () {
    function Learner() {
    }
    return Learner;
}());
var learner = new Learner;
learner = {
    firstName: 'Lorencia Aprende',
    age: 28,
    greet: function () {
        console.log('Hi!!!!!');
    }
};
console.log('interface Learner', learner);
