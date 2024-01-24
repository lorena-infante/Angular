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
/* Functions, Parameters*/
