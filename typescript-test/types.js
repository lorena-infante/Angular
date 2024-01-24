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
/* Functions, Parameters*/
