
// class child{
//     constructor(name){
//         this.name = name;
//     }
// }

// const baby = new child("aiman");
// const baby2 = new child("arobi");
// console.log(baby, baby2);

// //father name soho:
// class parent{
//     constructor(){
//         this.fatherName = "rasel";
//     }
// }
// class child extends parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// const baby = new child("aiman");
// const baby2 = new child("arobi");
// console.log(baby, baby2);



class parent{
    constructor(){
        this.fatherName = "rasel";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName
    }
}

const baby = new child("aiman");
const baby2 = new child("arobi");
console.log(baby.getFullName());
console.log( baby2.getFullName());